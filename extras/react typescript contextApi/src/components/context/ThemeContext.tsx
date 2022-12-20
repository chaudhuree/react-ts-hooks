import React, { createContext } from "react";
import { theme, ThemeProps } from "./theme";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext<ThemeProps>(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
