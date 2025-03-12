import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { URLS } from "../../Utils/urls";

const BookingForm = ({ Trekname, price }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91"); // Default to +91
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0); // Initial value as integer 0
  const [trekDate, setTrekDate] = useState(new Date()); // Default to current date
  const [numberOfPeople, setNumberOfPeople] = useState(1); // Default 1 person
  const [basePrice, setBasePrice] = useState(0);
  const [priceWithCharges, setPriceWithCharges] = useState(0);
  const [amountPaid, setAmountPaid] = useState(1000); // minimum payment
  const [remainingAmount, setRemainingAmount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [paidAmount, setPaidAmount] = useState(0); // Add this new state
  const [existingBookingId, setExistingBookingId] = useState(null); // To track existing booking
  const [couponCode, setCouponCode] = useState("");
  const [couponDiscount, setCouponDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  // Simplified login check
  useEffect(() => {
    const storedUserId = localStorage.getItem('userId');
    const storedName = localStorage.getItem('name');
    console.log(storedUserId, storedName);
    if (storedUserId && storedName) {
      setIsLoggedIn(true);
      setUserId(storedUserId);
      setName(storedName); // Optionally pre-fill the name field
    }
  }, []);

  // Modify the useEffect that fetches existing booking details
  useEffect(() => {
    if (userId && Trekname) {
      fetch(`${URLS.backendUrl}/api/remaining-amount/${Trekname}/${userId}`)
        .then(res => res.json())
        .then(data => {
          if (data.amount_paid > 0) {
            console.log(data);
            // Set payment related details
            setPaidAmount(Number(data.amount_paid));
            setExistingBookingId(data.id);
            // Auto-fill other details from existing booking
            setRemainingAmount(data.remaining_amount);
            setName(data.name || storedName);
            setEmail(data.email || '');
            setPhone(data.phone_number?.split(' ')[1] || ''); // Remove country code
            setCountryCode(data.phone_number?.split(' ')[0] || '+91');
            setAge(data.age || 0);
            setNumberOfPeople(data.number_of_people || 1);
            
            // Set trek date if it exists
            if (data.trek_date) {
              setTrekDate(new Date(data.trek_date));
            }
            
          }
        })
        .catch(err => console.log("No existing booking found"));
    }
  }, [userId, Trekname]);

  // Update price calculation effect
  useEffect(() => {
    const basePriceValue = numberOfPeople * parseFloat(price.replace(/[^0-9.]/g, ""));
    setBasePrice(basePriceValue);
    
    // Calculate discounted price if coupon is applied
    const discountAmount = isCouponApplied ? (basePriceValue * couponDiscount / 100) : 0;
    const priceAfterDiscount = basePriceValue - discountAmount;
    setDiscountedPrice(priceAfterDiscount);
    
    const charges = Number(amountPaid) * 0.05; // 5% GST
    setPriceWithCharges(Number(amountPaid) + charges);
    // Determine remaining amount based on whether it's a new booking or partial payment
    if (existingBookingId) {
      // Partial payment
      setRemainingAmount((prev) => prev - Number(amountPaid));
    } else {
      // New booking
      setRemainingAmount(priceAfterDiscount - Number(paidAmount) - Number(amountPaid));
    }
  }, [numberOfPeople, price, amountPaid, paidAmount, couponDiscount, isCouponApplied, existingBookingId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLoggedIn) {
      setError("Please login to continue with booking");
      return;
    }

    if (amountPaid < 1000) {
      setError("Minimum booking amount is ₹1000");
      return;
    }

    if (amountPaid > priceWithCharges) {
      setError("Payment amount cannot be greater than total amount");
      return;
    }

    // Validate required fields
    if (!name || !phone || !email || !age || !trekDate || !numberOfPeople) {
      setError("Please fill all the required fields.");
      return;
    }

    // Check if trek is fully paid
    if (remainingAmount <= 0) {
      setError("This trek is already fully paid.");
      return;
    }

    // Prepare data to be sent to the API
    const bookingData = {
      name,
      email,
      phoneNumber: `${countryCode} ${phone}`,
      age,
      trekDate: trekDate.toISOString().split("T")[0],
      numberOfPeople: parseInt(numberOfPeople),
      Trekname,
      price: basePrice,
      priceWithCharges,
      amountPaid,
      remainingAmount,
      userId,
      existingBookingId // Add this to identify if it's an update
    };
    console.log(bookingData);

    setLoading(true);
    setError(""); // Reset any previous error

    // Send data to API
    fetch(`${URLS.backendUrl}/api/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        
        console.log(data);
        if (data.message === "Booking saved successfully") {
          initiatePayment(data.bookingId);
          
        } else {
          setError("Booking failed. Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
      }).finally(() => {
        setLoading(false);
      });
  };

  // Ensure that the age and numberOfPeople inputs are integers
  const handleNumberChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

  const initiatePayment = async (orderId) => {
    try {
      const response = await fetch(`${URLS.backendUrl}/api/initiate-payment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderId, amount: priceWithCharges }),
      });
      const data = await response.json();
      console.log(data);
      if (data.paymentUrl) {
          setName("");
          setPhone("");
          setEmail("");
          setAge(0);
          setCountryCode("+91");
          setTrekDate(new Date());
          setNumberOfPeople(1);
          window.location.href = data.paymentUrl;
          alert("Booking successful!");
      } else {
        setError("Failed to initiate payment. Try again.");
      }
    } catch (err) {
      setError("Payment error. Please try again.");
    }
    setLoading(false);
  };

  // Add coupon verification function
  const handleApplyCoupon = async () => {
    if (!couponCode) {
      setCouponError("Please enter a coupon code");
      return;
    }

    // Check if the coupon has already been applied
    if (remainingAmount < (basePrice - paidAmount)) {
      setCouponError("Coupon has already been applied.");
      return;
    }

    try {
      const response = await fetch(`${URLS.backendUrl}/api/coupons/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          code: couponCode,
          amount: basePrice
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setCouponError(data.error);
        setIsCouponApplied(false);
        setCouponDiscount(0);
        return;
      }

      setCouponDiscount(data.discount_percentage);
      setIsCouponApplied(true);
      setCouponError("");
    } catch (error) {
      setCouponError("Failed to verify coupon");
    }
  };

  // Add this JSX block after the Trek Date input and before the Previously Paid Amount
  const couponSection = (
    <div className="flex flex-col">
      <label className="text-sm font-semibold mb-1">Coupon Code</label>
      <div className="flex gap-2">
        <input
          type="text"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
          className="border-gray-300 border-[1px] rounded-lg px-3 py-2 flex-1"
          placeholder="Enter coupon code"
        />
        <button
          type="button"
          onClick={handleApplyCoupon}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Apply
        </button>
      </div>
      {couponError && <p className="text-red-500 text-sm mt-1">{couponError}</p>}
      {isCouponApplied && (
        <p className="text-green-500 text-sm mt-1">
          Coupon applied! {couponDiscount}% discount
        </p>
      )}
    </div>
  );

  return (
    <div
      className={`sticky top-5 w-full right-0 md:max-w-md mx-auto bg-gray-50 shadow-md rounded-lg p-6 mt-10 cardShadow`}
    >
      <h2 className="text-2xl font-semibold text-center mb-4">Booking Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <p className="text-red-500 text-sm">{error}</p>}

        {/* Trek Name (Read-Only) */}
        <div className="flex flex-col">
          <label htmlFor="trekname" className="text-sm font-semibold mb-1">
            Trek Name
          </label>
          <input
            id="trekname"
            type="text"
            value={Trekname}
            readOnly
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* Name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-sm font-semibold mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Phone Number with Country Code */}
        <div className="flex flex-col">
          <label htmlFor="phone" className="text-sm font-semibold mb-1">
            Phone Number
          </label>
          <div className="flex items-center">
            <select
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-[100px]"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+91">+91</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+33">+33</option>
              {/* Add more country codes as needed */}
            </select>
            <input
              id="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full ml-2"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email ID
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Age */}
        <div className="flex flex-col">
          <label htmlFor="age" className="text-sm font-semibold mb-1">
            Age
          </label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={handleNumberChange(setAge)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Number of People */}
        <div className="flex flex-col">
          <label htmlFor="numberOfPeople" className="text-sm font-semibold mb-1">
            Number of People
          </label>
          <input
            id="numberOfPeople"
            type="number"
            value={numberOfPeople}
            onChange={handleNumberChange(setNumberOfPeople)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            required
          />
        </div>

        {/* Trek Date */}
        <div className="flex flex-col">
          <label htmlFor="trekDate" className="text-sm font-semibold mb-1">
            Trek Date
          </label>
          <DatePicker
            id="trekDate"
            selected={trekDate}
            onChange={(date) => setTrekDate(date)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
            dateFormat="dd/MM/yyyy"
          />
        </div>

        {/* Add this after the Trek Date DatePicker component */}
        {couponSection}

        {/* Show Previously Paid Amount if exists */}
        {Number(paidAmount) > 0 && (
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Previously Paid Amount</label>
            <input
              type="text"
              value={`₹${Number(paidAmount).toFixed(2)}`}
              readOnly
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
            />
          </div>
        )}

        {/* Track Price */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Track Price</label>
          <input
            type="text"
            value={`₹${Number(basePrice).toFixed(2)}`}
            readOnly
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* Discounted Price */}
        {isCouponApplied && (
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Discounted Price</label>
            <input
              type="text"
              value={`₹${Number(discountedPrice).toFixed(2)}`}
              readOnly
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
            />
          </div>
        )}

        {/* Paying Amount - Update max value based on remaining */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Paying Amount</label>
          <input
            type="number"
            value={amountPaid}
            onChange={(e) => setAmountPaid(Number(e.target.value))}
            min="1000"
            max={basePrice - Number(paidAmount)}
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Paying Amount with GST</label>
          <input
            type="text"
            value={`₹${Number(priceWithCharges).toFixed(2)}`}
            readOnly
            className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
          />
        </div>

        {/* Show Remaining Amount only if greater than 0 */}
        
          <div className="flex flex-col">
            <label className="text-sm font-semibold mb-1">Remaining Amount</label>
            <input
              type="text"
              value={`₹${Number(remainingAmount).toFixed(2)}`}
              readOnly
              className="border-gray-300 border-[1px] rounded-lg px-3 py-2 w-full bg-gray-200 cursor-not-allowed"
            />
          </div>
        <button
          type="submit"
          className="w-full bg-lemonYellow hover:bg-yellow-500 text-black hover:text-white font-semibold py-2 rounded-lg transition-colors"
          disabled={loading}
        >
          {loading ? "Booking..." : "Book Now"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
