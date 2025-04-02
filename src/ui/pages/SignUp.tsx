import { cn } from "../../utils";
import BottomWarning from "../bottonWarning";
import Button from "../button";
import Heading from "../heading";
import Input from "../input";

export default function SignUp() {
    return (
        <main className={cn(
            "w-screen h-screen flex justify-center items-center bg-woodsmoke-100"
        )}>
            <section className={cn(
                "w-3/12 px-8 py-5 h-fit rounded-xl flex flex-col items-center gap-2 bg-woodsmoke-50"
            )}>
                <div className={cn(
                    "flex flex-col justify-center items-center gap-2 w-full"
                )}>
                    <Heading variant={"main"} text="Sign Up" />
                    <Heading variant={"sub"} text="Enter your information to create an account" className="" />
                </div>
                <form action="submit" className="flex flex-col gap-1 w-full mb-2">
                    <Input type="text" placeholder="username" label="First Name" variant={"sm"} />
                    <Input type="text" placeholder="username" label="Last Name" variant={"sm"} />
                    <Input type="email" placeholder="username" label="Username or Email" variant={"sm"} />
                    <Input type="password" placeholder="username" label="Password" variant={"sm"} />
                </form>
                <Button variant={"primary"} size={"lg"} text={"Sign up"} />
                <BottomWarning />
            </section>
        </main>
    )
}