import { cn } from "../../utils";
import Avatar from "../avatar";
import Balance from "../balance";
import Input from "../input";
import UserSearchcard from "../userSearchCard";

export default function DashBoard() {
    return (
        <main className={cn(
            "w-screen h-screen flex flex-col gap-10"
        )}>
            <div className={cn(
                " w-full h-fit flex justify-between border-b-2 border-woodsmoke-200"
            )}>
                <div className={cn(
                    "w-10/12 mx-auto flex justify-between items-center"
                )}>
                    <p className="font-dmsans font-bold text-2xl text-center tracking-tight px-4 py-2">Paytment App</p>
                    <div className="flex justify-center items-center gap-3 px-4 py-2">
                        <p className="font-dmsans font-medium text-xl">Hello</p>
                        <Avatar variant={"display"} size={"sm"} letter={"U"} />
                    </div>
                </div>
            </div>

            <div className={cn(
                "w-10/12 mx-auto px-4 "
            )}>
                <Balance />
            </div>

            <div className={cn(
                "w-10/12 mx-auto mt-4 px-4 flex flex-col justify-center items-start gap-2"
            )}>
                <Input variant={"lg"} labelStyle={"dark"} type={"text"} labelName={"Users"} placeholder={"Search users...."} />
                <UserSearchcard />
            </div>
            
        </main>
    )
}