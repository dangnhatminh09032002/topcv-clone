import React, { createContext, useState } from "react";

export const CvGeneratorContext = createContext();

export default function CvGeneratorProvider({ children }) {
  const [cvGeneratorState, setCvGeneratorState] = useState(null);

  const value = { cvGeneratorState, setCvGeneratorState };

  return (
    <CvGeneratorContext.Provider value={value}>
      {children}
    </CvGeneratorContext.Provider>
  );
}
