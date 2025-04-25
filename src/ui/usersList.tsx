import { useEffect } from "react"
import { useLoaderContext } from "../stateProviders/loaderProvider";
import axios from "axios";
import { BASE_URL, cn } from "../utils";
import UserSearchcard from "./userSearchCard";
import { useAllAccounts } from "../stateProviders/allAccountsProvider";

export default function UsersList() {
    const { isLoading, setIsLoading } = useLoaderContext();
    const { allAccounts, setAllAccounts } = useAllAccounts();

    async function getUserList() {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/api/v1/account/all`);
            setAllAccounts(response.data.allAccounts);
            console.log(response.data.allAccounts);
        } catch (error) {
            console.log(error);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getUserList();
    }, [])
    return (
        <section className={cn(
            "flex-col gap-1 items-center"
        )}>
            {
                isLoading
                ?
                "Loading..."
                :
                allAccounts.map((account, index) => {
                    return <UserSearchcard key={index} userAccount={account} />
                })
            }
        </section>
    )
}