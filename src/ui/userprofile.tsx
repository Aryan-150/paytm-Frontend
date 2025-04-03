import { cn } from "../utils";
import Avatar from "./avatar";

interface UserProfileProps {
    letter: string;
    username: string;
    variant: "display" | "send_money";
    size: "sm" | "md";
}

export default function UserProfile({
    letter,
    username,
    variant,
    size
}: UserProfileProps) {
    return (
        <section className={cn(
            "flex justify-start items-center gap-3 w-full h-fit py-2 font-dmsans"
        )}>
            <Avatar variant={variant} size={size} letter={letter} />
            <span className={cn(
                "font-bold tracking-tight",
                {
                    "text-2xl": size === "md"
                }
            )}>{username}</span>
        </section>
    )
}