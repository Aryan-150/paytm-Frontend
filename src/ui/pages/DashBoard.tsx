import { cn } from "../../utils";
import Balance from "../balance";
import Header from "../header";
import Input from "../input";
import UserSearchcard from "../userSearchCard";

export default function DashBoard() {
    return (
        <main className={cn(
            "w-screen h-screen flex flex-col gap-10",
            "overflow-y-scroll scroll-smooth pb-10"
        )}>
            <Header />
            <Balance />
            <div className={cn(
                "w-10/12 mx-auto mt-4 px-4 flex flex-col justify-center items-start gap-2"
            )}>
                <Input variant={"lg"} labelStyle={"dark"} type={"text"} labelName={"Users"} placeholder={"Search users...."} />
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
    )
}