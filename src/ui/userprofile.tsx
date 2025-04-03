import { cva, VariantProps } from "class-variance-authority"
import Avatar from "./avatar";

const userProfileStyles = cva("", {
    variants: {
        variant: {
            display: "",
            send_money: ""
        },
        size: {
            sm: "",
            md: "",
        }
    },
    compoundVariants: [
        {
            variant: ["display", "send_money"],
            size: "sm",
            className: ""
        },
        {
            variant: ["display", "send_money"],
            size: "md",
            className: ""
        }
    ]
})

interface UserProfileProps extends Required<VariantProps<typeof userProfileStyles>> {
    letter: string;
    username: string;
}

export default function UserProfile({
    letter,
    username,
    variant,
    size
}: UserProfileProps) {
    return (
        <section>
            <Avatar variant={variant} size={size} letter={letter} />
            <span>{username}</span>
        </section>
    )
}