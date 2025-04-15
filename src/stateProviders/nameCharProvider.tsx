import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface NameCharContextType {
    nameChar: string;
    setNameChar: Dispatch<SetStateAction<string>>;
}

export const NameCharContext = createContext<NameCharContextType>({
    nameChar: "",
    setNameChar: () => {}
})

export function NameCharContextProvider({ children }: { children: ReactNode }) {
    const [nameChar, setNameChar] = useState<string>("");

    return (
        <NameCharContext.Provider value={{ nameChar, setNameChar }}>
            {children}
        </NameCharContext.Provider>
    )
}

export const useNameCharContext = () => useContext(NameCharContext);