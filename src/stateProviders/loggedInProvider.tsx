import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface LoggedInContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

export const LoggedInContext = createContext<LoggedInContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export function LoggedInContextProvider({ children }: { children: ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const loginCookie = Cookies.get('isLoggedIn');
        return loginCookie === "true";
    });

    useEffect(() => {
        if (isLoggedIn) {
            Cookies.set('isLoggedIn', "true", { expires: 7 });
        } else {
            Cookies.remove('isLoggedIn');
        }
    }, [isLoggedIn]);

    return (
        <LoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </LoggedInContext.Provider>
    );
}

export const useLoggedInContext = () => useContext(LoggedInContext);