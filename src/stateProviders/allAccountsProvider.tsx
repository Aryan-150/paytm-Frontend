import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export interface UserIdObj{
	_id: string;
	username: string;
}

export interface AccountType {
	_id: string;
	userId: UserIdObj;
}

const defaultAccount = {
	_id: "",
	userId: {
		_id: "",
		username: ""
	}
}

export interface AllAccountsContextType {
    allAccounts: Array<AccountType>;
	setAllAccounts: Dispatch<SetStateAction<Array<AccountType>>>;
}

export interface AccountContextType {
	account: AccountType;
	setAccount: Dispatch<SetStateAction<AccountType>>;
}

const AllAccountsContext = createContext<AllAccountsContextType>({
	allAccounts: [],
	setAllAccounts: () => {}
})

const AccountContext = createContext<AccountContextType>({
	account: defaultAccount,
	setAccount: () => {}
})

export function AllAccountsProvider({ children }: { children: ReactNode}) {
	const [allAccounts, setAllAccounts] = useState<Array<AccountType>>(() => {
		const allAccountsCookie = Cookies.get('allaccounts');
		if(!allAccountsCookie) {
			return [];
		}
		return JSON.parse(allAccountsCookie);
	});

	useEffect(() => {
		if(allAccounts.length !== 0) {
			Cookies.set('allAccounts',JSON.stringify(allAccounts), { expires: 7 });
		} else {
			Cookies.remove('allAccounts');
		}
	}, [allAccounts])

    return (
		<AllAccountsContext.Provider value={{ allAccounts, setAllAccounts }}>
			{children}
		</AllAccountsContext.Provider>
	) 
}

export function AccountProvider({ children }: { children: ReactNode }) {
	const [account, setAccount] = useState<AccountType>(() => {
		const accountCookie = Cookies.get('account');
		if(!accountCookie) {
			return defaultAccount;
		}
		return JSON.parse(accountCookie);
	});

	useEffect(() => {
		if(account) {
			Cookies.set('account', JSON.stringify(account), { expires: 7 });
		} else {
			Cookies.remove('account');
		}
	}, [account])

	return (
		<AccountContext.Provider value={{ account, setAccount }}>
			{children}
		</AccountContext.Provider>
	)
}

export const useAllAccounts = () => useContext(AllAccountsContext);
export const useAccount = () => useContext(AccountContext);