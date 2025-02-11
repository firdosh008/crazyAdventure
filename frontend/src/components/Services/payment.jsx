import React from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  const orderId = searchParams.get("orderId");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 text-center">
        {status === "SUCCESS" ? (
          <>
            <h1 className="text-green-600 text-2xl font-bold">Payment Successful!</h1>
            <p className="mt-2 text-gray-700">Your order ID: <strong>{orderId}</strong></p>
            <p className="text-gray-600 mt-1">Thank you for booking your trek with us!</p>
          </>
        ) : (
          <>
            <h1 className="text-red-600 text-2xl font-bold">Payment Failed!</h1>
            <p className="mt-2 text-gray-700">Unfortunately, your payment could not be processed.</p>
            <p className="text-gray-600 mt-1">Please try again.</p>
          </>
        )}
        <Link to="/" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PaymentStatus;
