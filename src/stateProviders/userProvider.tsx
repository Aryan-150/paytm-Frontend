// UserContext.tsx

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

const defaultUser = {
	username: "",
	firstName: "",
	lastName: ""
};

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
	setUser: () => { }
});

export function UserContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User>(() => {
		const userCookie = Cookies.get('user');
		if(!userCookie){
			return defaultUser;
		}
		return JSON.parse(userCookie);
	});
	
	// Persist to cookie on update
	useEffect(() => {
		if (user.username !== "") {
			Cookies.set("user", JSON.stringify(user), { expires: 7 }); // Save for 7 days
		} else {
			Cookies.remove("user"); // Clear on logout
		}
	}, [user]);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}

export const useUserContext = () => useContext(UserContext);
