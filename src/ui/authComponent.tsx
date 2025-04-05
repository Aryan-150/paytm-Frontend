import { ReactNode } from "react";
import Heading from "./heading";
import Button from "./button";
import BottomWarning from "./bottonWarning";

interface AuthComponentProps {
    text: "Sign Up" | "Sign In";
    children: ReactNode;
    onClick ?: () => void
}

export default function AuthComponent({
    text,
    onClick,
    children
}: AuthComponentProps) {
    return (
        <section className="w-screen h-screen flex justify-center items-center bg-woodsmoke-100">
            <div className="w-3/12 px-8 py-5 h-fit rounded-xl flex flex-col items-center gap-2 bg-woodsmoke-50">
                <div className="flex flex-col justify-center items-center gap-2 w-full">
                    <Heading variant={"main"} text={text} />
                    <Heading variant={"sub"} text={text === "Sign Up" ? "Enter your information to create an account" : "Enter your credentials to access your account"} />
                </div>
                <form action="submit" className="flex flex-col gap-1 w-full mb-2">
                    {children}
                </form>
                <Button variant={"primary"} size={"lg"} text={text.toLowerCase()} onClick={onClick} />
                <BottomWarning>
                    { 
                        text === "Sign Up"
                        ?
                        <section className="my-1">
                            <p className="font-dmsans font-medium">Already have an account?{" "}
                                <a href="/signin" className="underline underline-offset-1">Sign in</a>
                            </p>
                        </section>
                        :
                        <section className="my-1">
                            <p className="font-dmsans font-medium">Don't have an account?{" "}
                                <a href="/signup" className="underline underline-offset-1">Sign Up</a>
                            </p>
                        </section>
                    }
                </BottomWarning>
            </div>
        </section>
    )
}