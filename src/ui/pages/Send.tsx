import { cn } from "../../utils";
import Button from "../button";
import Heading from "../heading";
import Input from "../input";
import UserProfile from "../userprofile";

export default function Send() {
    return (
        <section className="w-screen h-screen bg-woodsmoke-50 flex justify-center items-center">
            <div className={cn(
                "w-2/6 h-fit px-12 py-6 shadow-lg bg-white rounded-xl border-2 border-woodsmoke-50",
                "flex flex-col gap-2",
            )}>
                <Heading text={"Send Money"} className="mb-5" />
                <UserProfile letter="A" username="Aryan" variant={"send_money"} size={"md"} />
                <Input variant={"lg"} labelStyle={"normal"} type={"text"} placeholder={"Enter amount"} labelName={"Amount (in Rs)"} />
                <Button variant={"send_money"} size={"lg"} text={"Initiate Transfer"} />
            </div>
            
        </section>
    )
}