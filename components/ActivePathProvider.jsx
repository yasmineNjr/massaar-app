'use client'

import { usePathname } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

const ActivePathContext = createContext();

export const ActivePathProvider = ({ children }) => {

  const pathname = usePathname(); // Get the current pathname
  const [state, setState] = useState(pathname);

  useEffect(() => {
    // Update the context state whenever the pathname changes
    setState(pathname);
  }, [pathname]);

  return (
    <ActivePathContext.Provider value={{ state, setState }}>
      {children}
    </ActivePathContext.Provider>
  );
};

export const useActivePathContext = () => useContext(ActivePathContext);