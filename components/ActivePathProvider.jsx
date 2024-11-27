'use client'

import { createContext, useContext, useState } from "react";

const ActivePathContext = createContext();

export const ActivePathProvider = ({ children }) => {
  const [state, setState] = useState("/");

  return (
    <ActivePathContext.Provider value={{ state, setState }}>
      {children}
    </ActivePathContext.Provider>
  );
};

export const useActivePathContext = () => useContext(ActivePathContext);