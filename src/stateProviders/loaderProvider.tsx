import { createContext, ReactNode, useState } from "react";

export const LoaderContext = createContext({
    isLoading: false,
    setIsLoading: (isLoading: boolean) => { }
});

export function LoaderContextProvider({ children }: { children: ReactNode }) {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    return (
        <>
            <LoaderContext.Provider value={{
                isLoading: isLoading,
                setIsLoading: setIsLoading
            }}>
                {children}
            </LoaderContext.Provider>
        </>
    )
}