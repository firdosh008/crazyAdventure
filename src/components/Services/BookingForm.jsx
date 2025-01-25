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
  const numericPrice = parseFloat(price.replace(/[^0-9.]/g, "")); // Remove non-numeric characters
  const [totalPrice, setTotalPrice] = useState(numericPrice);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  // Update total price whenever number of people changes
  useEffect(() => {
    setTotalPrice(numberOfPeople * numericPrice);
  }, [numberOfPeople, numericPrice]);
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate required fields
    if (!name || !phone || !email || !age || !trekDate || !numberOfPeople) {
      setError("Please fill all the required fields.");
      return;
    }

    // Format trek_date to YYYY-MM-DD
    const formattedTrekDate = trekDate.toISOString().split("T")[0]; // "YYYY-MM-DD"

    // Prepare data to be sent to the API
    const bookingData = {
      name,
      email,
      phoneNumber: `${countryCode} ${phone}`,
      countryCode: countryCode,
      age: parseInt(age), // Ensure age is an integer
      trekDate: formattedTrekDate,
      numberOfPeople: parseInt(numberOfPeople), // Ensure numberOfPeople is an integer
      Trekname,
      totalPrice,
    };
    console.log(bookingData);

    setLoading(true);
    setError(""); // Reset any previous error

    // Send data to API
    fetch(`${URLS.backendUrl}:5000/api/book`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);
        if (data.message === "Booking saved successfully") {
          alert("Booking successful!");
          // Reset form after successful booking
          setName("");
          setPhone("");
          setEmail("");
          setAge(0);
          setCountryCode("+91");
          setTrekDate(new Date());
          setNumberOfPeople(1);
        } else {
          setError("Booking failed. Please try again.");
        }
      })
      .catch((err) => {
        setLoading(false);
        setError("An error occurred. Please try again.");
      });
  };

  // Ensure that the age and numberOfPeople inputs are integers
  const handleNumberChange = (setter) => (e) => {
    const value = e.target.value;
    if (value === "" || /^[0-9\b]+$/.test(value)) {
      setter(value);
    }
  };

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

        {/* Total Price (Read-Only) */}
        <div className="flex flex-col">
          <label htmlFor="totalPrice" className="text-sm font-semibold mb-1">
            Total Price
          </label>
          <input
            id="totalPrice"
            type="text"
            value={`₹${totalPrice}`}
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
