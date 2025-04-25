import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
interface LoaderContextType {
    isLoading: boolean;
    setIsLoading: Dispatch<SetStateAction<boolean>>
}

export const LoaderContext = createContext<LoaderContextType>({
    isLoading: false,
    setIsLoading: () => {}
})

export function LoaderContextProvider({ children }: { children: ReactNode }){
    const [isLoading, setIsLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
            {children}
        </LoaderContext.Provider>
    )
}

export const useLoaderContext = () => useContext(LoaderContext);