import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [choices, setChoices] = useState({});
  const [pictures, setPictures] = useState({});

  return (
    <AppContext.Provider value={{ choices, setChoices, pictures, setPictures }}>
      {children}
    </AppContext.Provider>
  );
};
