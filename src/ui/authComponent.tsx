import { ReactNode, useRef } from "react";
import Heading from "./heading";
import Button from "./button";
import BottomWarning from "./bottonWarning";
import { cn } from "../utils";

interface AuthComponentProps {
    text: "Sign Up" | "Sign In";
    children: ReactNode;
    isAuthMessage: boolean;
    responseMessage: Array<string>;
    onClick ?: () => void;
}

export default function AuthComponent({
    text,
    onClick,
    isAuthMessage,
    responseMessage,
    children
}: AuthComponentProps) {
    const bottomWarningRef = useRef<HTMLDivElement>(null);
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
                <BottomWarning reference={bottomWarningRef}>
                    {
                        text === "Sign Up"
                            ?
                            <p className="font-dmsans font-medium text-center">Already have an account?{" "}
                                <a href="/signin" className="underline underline-offset-1">Sign in</a>
                            </p>
                            :
                            <p className="font-dmsans font-medium text-center">Don't have an account?{" "}
                                <a href="/signup" className="underline underline-offset-1">Sign Up</a>
                            </p>
                    }
                </BottomWarning>
            </div>
            {
                isAuthMessage &&
                <div className={cn(
                    "fixed right-0 bottom-0 bg-woodsmoke-200 text-woodsmoke-950 text-start mb-10 mr-5 pl-4 pr-24 py-2 transition-all duration-200",
                    "rounded-md hover:ring-1 hover:ring-offset-1 hover:ring-woodsmoke-300 hover:ring-offset-woodsmoke-300 hover:cursor-pointer"
                )}>
                    {typeof responseMessage === "object" && responseMessage.map((message, index) => {
                        return <p key={index} className="text-base font-medium">{message}</p>
                    })}
                </div>
            }
        </section>
    )
}