import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ResponseMessageContextType {
    responseMessage: Array<string>;
    setResponseMessage: Dispatch<SetStateAction<Array<string>>>;
}

const ResponseMessageContext = createContext<ResponseMessageContextType>({
    responseMessage: [],
    setResponseMessage: () => {}
});

export function ResponseMessageProvider({ children }: { children: ReactNode }) {
    const [responseMessage, setResponseMessage] = useState<Array<string>>([]);

    return <ResponseMessageContext.Provider value={{ responseMessage, setResponseMessage }}>
        {children}
    </ResponseMessageContext.Provider>
}

export const useResponseMessage = () => useContext(ResponseMessageContext);