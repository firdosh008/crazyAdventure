import React, { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative" onMouseLeave={handleMouseLeave}>
      <button
        onMouseEnter={handleMouseEnter}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Menu
      </button>
      {isOpen && (
        <div
          className="absolute bg-white shadow-lg rounded mt-2 w-48"
          onMouseEnter={handleMouseEnter}
        >
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Item 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Item 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
              Item 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
