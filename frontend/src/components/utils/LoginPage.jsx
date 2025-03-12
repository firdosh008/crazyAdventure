import React, { useEffect, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { URLS } from "../../Utils/urls";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Extract token from URL if present
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const token = queryParams.get("token");
    if (token) {
      localStorage.setItem("auth_token", token);
      window.location.href = "/"; // Redirect to your app's main page
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const response = await fetch(`${URLS.backendUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
    console.log(data);
      if (!response.ok) {
        setErrorMessage(data.message || "Login failed. Please try again.");
      } else {
        // Store user data in localStorage
        localStorage.setItem("userId", data.userId); // Make sure backend sends userId
        localStorage.setItem("name", data.username);
        localStorage.setItem("admin", data.isAdmin);
        
        const message = data.isAdmin
          ? "Login successful as Admin!"
          : "Login successful!";
        alert(message);

        // Redirect based on the isAdmin value
        if (data.isAdmin) {
          window.location.href = "/dashboard";
        } else {
          window.location.href = "/";
        }
      }
    } catch (error) {
      setErrorMessage("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${URLS.backendUrl}/api/auth/google`;
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-center text-gray-700">Login</h2>
          {errorMessage && <p className="text-red-500 text-center mt-2">{errorMessage}</p>}

          {/* Email/Password Login Form */}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={loginData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>

          {/* Google Login Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              className="w-full py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition"
            >
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default LoginPage;
