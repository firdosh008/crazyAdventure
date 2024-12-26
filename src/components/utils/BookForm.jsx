import React, { useState } from "react";
import axios from "axios"; // Axios for API requests
import { CiMail } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { AiOutlineWechatWork } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";
import formBgImage from "../../assets/Kedarkantha_Trek_thumb.jpg";

const BookForm = () => {
  const [isOpenselect, setIsOpenSelect] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    tourType: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(""); // To show submission status
  const [isSubmitting, setIsSubmitting] = useState(false); // To manage button state

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Disable button during submission
    try {
      const response = await axios.post("http://ec2-13-201-64-212.ap-south-1.compute.amazonaws.com:5000/api/book", formData);
      console.log("Form submitted:", response);
      if (response.status === 201 || response.status === 200) {
        alert("Form submitted successfully!");
        setFormStatus("Form submitted successfully!"); // Show success message
        setFormData({ name: "", email: "", tourType: "", message: "" }); // Clear form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setFormStatus("Failed to submit form. Please try again."); // Show error message
    } finally {
      setIsSubmitting(false); // Re-enable button
      setTimeout(() => setFormStatus(""), 3000); // Clear message after 3 seconds
    }
  };

  return (
    <div
      className="bg-white py-[4rem] overflow-hidden relative flex flex-col md:flex-row justify-start items-center"
      style={{
        backgroundImage: `url(${formBgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full px-4 md:px-[5rem] mt-[10rem] md:my-[4rem] overflow-auto relative">
        <form
          className="contact-form style2 bg-white px-4 w-full md:w-[50%] rounded-lg py-5 text-black"
          onSubmit={handleSubmit}
        >
          <h3 className="sec-title mb-30 text-capitalize font-inter text-[22px] font-semibold my-3">
            Book a tour
          </h3>
          <div className="flex flex-col gap-4">
            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
              <input
                type="text"
                className="w-full px-4 rounded-md form-control outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="First Name"
                required
              />
              <CiUser className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
            </div>
            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
              <input
                type="email"
                className="w-full px-4 rounded-md form-control outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Your Mail"
                required
              />
              <CiMail className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
            </div>
            <div
              className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter"
              onClick={() => setIsOpenSelect(!isOpenselect)}
            >
              <select
                name="tourType"
                id="tourType"
                className="bg-white form-select outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px] placeholder:font-inter w-full px-4 pr-10"
                value={formData.tourType}
                onChange={handleFormChange}
                required
              >
                <option value="" disabled>
                  Select Tour Type
                </option>
                <option value="Africa Adventure">Africa Adventure</option>
                <option value="Africa Wild">Africa Wild</option>
                <option value="Asia">Asia</option>
                <option value="Scandinavia">Scandinavia</option>
                <option value="Western Europe">Western Europe</option>
              </select>
            </div>
            <div className="w-[95%] mx-auto border-[2px] border-gray-200 rounded-md flex flex-row mb-2 form-group relative text-[14px] font-inter">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="3"
                className="w-full px-4 py-4 rounded-md outline-lemonYellow outline-[1px] h-[50px] placeholder:text-[14px]"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                required
              ></textarea>
              <AiOutlineWechatWork className="w-6 h-6 absolute top-[17px] right-[18px] flex justify-center items-center" />
            </div>
            <button
              type="submit"
              className={`group w-[210px] text-sm font-inter text-nowrap flex bg-lemonYellow text-black hover:text-lemonYellow px-8 py-4 rounded-[32px] relative overflow-hidden hover:bg-opacity-80 cursor-pointer mr-1 z-40 group border-none ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isSubmitting}
            >
              <span className="relative z-10 flex items-center justify-center gap-4">
                {isSubmitting ? "Submitting..." : "Send message"}
                <BsSendFill className="w-4 h-4 group-hover:scale-110 transition-all duration-500 ease-in-out" />
              </span>
            </button>
          </div>
          <p className="form-messages mb-0 mt-3">{formStatus}</p>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
