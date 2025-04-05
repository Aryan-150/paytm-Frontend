import { createContext, ReactNode, useEffect, useState } from "react";

export const NameCharContext = createContext({
    nameChar: "",
    setNameChar: (nameChar: string) => {}
});

//! React state variables are not persistent across page reloads:
export function NameCharContextProvider({ children }: { children: ReactNode }) {
    const [nameChar, setNameChar] = useState<string>(() => {
        // Initialize from localStorage
        return localStorage.getItem("nameChar") || "";
    });

    useEffect(() => {
        // Persist to localStorage whenever nameChar changes
        localStorage.setItem("nameChar", nameChar);
    }, [nameChar]);

    return (
        <>
            <NameCharContext.Provider value={{
                nameChar: nameChar,
                setNameChar: setNameChar
            }}>
                {children}
            </NameCharContext.Provider>
        </> 
    );
}