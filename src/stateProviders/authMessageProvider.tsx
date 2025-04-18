import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface AuthMessageContextType {
    isAuthMessage: boolean;
    setIsAuthMessage: Dispatch<SetStateAction<boolean>>;
}

const AuthMessageContext = createContext<AuthMessageContextType>({
    isAuthMessage: false,
    setIsAuthMessage: () => {}
})

export function AuthMessageContextProvider({ children }: { children: ReactNode }) {
    const [isAuthMessage, setIsAuthMessage] = useState<boolean>(false);

    return (
        <AuthMessageContext.Provider value={{ isAuthMessage, setIsAuthMessage }}>
            {children}
        </AuthMessageContext.Provider>
    )
}

export const useAuthMessage = () => useContext(AuthMessageContext);