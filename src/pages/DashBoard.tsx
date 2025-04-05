import { useRef } from "react";
import Balance from "../ui/balance";
import Header from "../ui/header";
import Input from "../ui/input";
import UserSearchcard from "../ui/userSearchCard";
import { cn } from "../utils";
import { LoaderContextProvider } from "../stateProviders/loaderProvider";

export default function DashBoard() {
    const searchUserRef = useRef<HTMLInputElement>(null);
    
    return (
        <LoaderContextProvider>
            <main className={cn(
                "w-screen h-screen flex flex-col gap-10",
                "overflow-y-scroll scroll-smooth pb-10"
            )}>
                <Header />
                <Balance />
                <div className={cn(
                    "w-10/12 mx-auto mt-4 px-4 flex flex-col justify-center items-start gap-2"
                )}>
                    <Input reference={searchUserRef} variant={"lg"} labelStyle={"dark"} type={"text"} labelName={"Users"} placeholder={"Search users...."} />
                </div>
                <div className={cn(
                    "flex flex-col gap-3 w-10/12 mx-auto divide-y snap-center px-5 divide-woodsmoke-200",
                )}>

                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                    <UserSearchcard />
                </div>
            </main>
        </LoaderContextProvider>
    )
}