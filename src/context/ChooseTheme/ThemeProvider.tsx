import { Dispatch, FC, ReactNode, createContext, useState } from "react";

interface ThemeProviderProps {
    children: ReactNode;
}

export type ThemeVariable = "light" | "dark";

export const ThemeContext = createContext<{
    theme: ThemeVariable;
    setTheme: Dispatch<React.SetStateAction<ThemeVariable>>;
}>({ theme: "light", setTheme: () => {} });

const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<ThemeVariable>("light");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
