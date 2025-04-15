import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

const defaultUser = {
    username: "",
    firstName: "",
    lastName: ""
}

interface User {
    username: string;
    firstName: string;
    lastName: string;
}

interface UserContextType {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}

const UserContext = createContext<UserContextType>({
    user: defaultUser,
    setUser: () => {}
})

export function UserContextProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User>(defaultUser);
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext);