import { useContext, useEffect, useState } from "react";
import { BASE_URL, cn } from "../utils";
import axios from "axios";
import { LoaderContext } from "../stateProviders/loaderProvider";

export default function Balance() {
    const { isLoading, setIsLoading } = useContext(LoaderContext);
    const [balance, setBalance] = useState<number>(0);
    async function getBalance() {
        setIsLoading(true);
        const response = await axios.get(`${BASE_URL}/api/v1/account/balance`)
        setBalance(response.data.balance);
        await new Promise(resolve => setTimeout(resolve, 200));
        setIsLoading(false);
    }
    useEffect(() => {
        getBalance();
    }, [balance])

    return (
        <section className={cn(
            "w-10/12 mx-auto px-4 flex justify-start items-center font-dmsans text-2xl h-fit font-extrabold tracking-tight",
        )}>
            <p>Your balance<span className="text-xl pl-2 font-bold">{isLoading 
            ? "Loading..."
            : `Rs ${(balance).toLocaleString('en-In')}` }</span></p>
        </section>
    )
}