import React, { createContext, useState, useContext } from "react";

// Create a Context
const TrekContext = createContext();

// Create a Provider Component
export const TrekProvider = ({ children }) => {
  const [selectedTrek, setSelectedTrek] = useState(null);

  return (
    <TrekContext.Provider value={{ selectedTrek, setSelectedTrek }}>
      {children}
    </TrekContext.Provider>
  );
};

export const useTrek = () => {
  return useContext(TrekContext);
};
