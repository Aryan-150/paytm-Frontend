import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

interface NameCharContextType {
    nameChar: string;
    setNameChar: Dispatch<SetStateAction<string>>;
}

export const NameCharContext = createContext<NameCharContextType>({
    nameChar: "",
    setNameChar: () => {}
})

export function NameCharContextProvider({ children }: { children: ReactNode }) {
    const [nameChar, setNameChar] = useState<string>(() => {
        const nameCharCookie = Cookies.get('namechar');
        if(!nameCharCookie){
            return "";
        }
        return nameCharCookie;
    });

    // useEffect for, when the setNameChar gets called, means nameChar changes:
    useEffect(() => {
        if(nameChar !== "") {
            Cookies.set('namechar', nameChar, {expires: 7});
        } else {
            Cookies.remove('namechar');
        }
    }, [nameChar])

    return (
        <NameCharContext.Provider value={{ nameChar, setNameChar }}>
            {children}
        </NameCharContext.Provider>
    )
}

export const useNameCharContext = () => useContext(NameCharContext);