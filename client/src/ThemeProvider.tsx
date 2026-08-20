import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";
interface ThemeContext {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const themeContext = createContext<ThemeContext | null>(null);

interface ThemeProviderProps {
  children: React.ReactElement;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");
  const themeService = { theme, setTheme };
  return (
    <themeContext.Provider value={themeService}>
      {children}
    </themeContext.Provider>
  );
}

export const useTheme = () => {
  const object = useContext(themeContext);
  if (!object) {
    throw new Error("useTheme must be used within a Provider");
  }
  return object;
};