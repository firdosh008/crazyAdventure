import React, { useState } from "react";
import { URLS } from "../../Utils/urls";

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    image: null,
    rating: 0,
    review: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Generic handleChange for all input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle image upload separately
  const handleImageUpload = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  // Handle star rating
  const handleRating = (rate) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: rate,
    }));
  };

  // Submit handler with API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.rating) {
      alert("Please provide a rating.");
      return;
    }

    const uploadData = new FormData();
    uploadData.append("name", formData.firstName);
    uploadData.append("email", formData.email);
    uploadData.append("review", formData.review);
    uploadData.append("stars", formData.rating);
    if (formData.image) {
      uploadData.append("image", formData.image);
    }
    console.log(uploadData);
    try {
      setLoading(true);
      const response = await fetch(`${URLS.backendUrl}:5000/api/reviews/add`, {
        method: "POST",
        body: uploadData,
      });

      if (response.ok) {
        alert("Review submitted successfully!");
        setSubmitted(true);
        setFormData({
          firstName: "",
          email: "",
          image: null,
          rating: 0,
          review: "",
        });
      } else {
        alert("Failed to submit the review. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-2 rounded-md flex flex-col justify-center items-center md:justify-start md:items-start w-full md:w-[60%] mr-auto font-inter bg-gray-50 shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add a Review</h2>

      {/* Success Message */}
      {submitted && (
        <div className="mb-4 p-2 bg-green-100 text-green-800 rounded">
          Review submitted successfully!
        </div>
      )}

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="space-y-4 w-full">
        {/* Name */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="firstName" className="block font-normal">
            Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl focus:outline-none"
            required
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="email" className="block text-sm font-normal">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-xl"
            required
          />
        </div>

        {/* Image Upload */}
        <div className="flex flex-col gap-2 tracking-wider">
          <label htmlFor="image" className="block text-sm font-normal">
            Upload Image (optional)
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageUpload}
            className="w-full p-2 border rounded-xl"
          />
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Preview"
              className="mt-2 max-w-full h-20"
            />
          )}
        </div>

        {/* Star Rating */}
        <div>
          <label className="block text-sm font-normal">Rating</label>
          <div className="flex space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-3xl ${
                  formData.rating >= star ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => handleRating(star)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div>
          <label htmlFor="review" className="block text-sm font-normal">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            value={formData.review}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
            required
          />
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-[50%] bg-black text-white hover:bg-lemonYellow hover:text-black p-2 rounded-xl transition-all duration-300 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
