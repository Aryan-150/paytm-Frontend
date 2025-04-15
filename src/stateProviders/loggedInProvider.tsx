import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface LoggedInContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const LoggedInContext = createContext<LoggedInContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
})

export function LoggedInContextProvider({ children}: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    )
}

export const useLoggedInContext = () => useContext(LoggedInContext);