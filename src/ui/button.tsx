import { cva, VariantProps } from "class-variance-authority";
import { ReactElement } from "react";
import { cn } from "../utils";
import { useNavigate } from "react-router-dom";

const buttonStyles = cva("font-dmsans flex justify-center items-center hover:cursor-pointer transition-all duration-300", {
    variants: {
        variant: {
            primary: "bg-woodsmoke-950 text-woodsmoke-100 hover:ring-1 hover:ring-offset-1 ring-woodsmoke-300 ring-offset-woodsmoke-400",
            send_money: "bg-green-500 text-woodsmoke-50 hover:ring-1 hover: ring-offset-1 ring-green-400 ring-offset-green-500",
        },
        size: {
            sm: "px-5 py-2 text-base font-medium rounded-md w-fit",
            md: "",
            lg: "py-2 my-1 text-lg font-medium rounded-lg",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    }
})

interface ButtonProps extends VariantProps<typeof buttonStyles> {
    text: ReactElement | string;
    onClick ?: () => void;
}

export default function Button({
    variant,
    size,
    text,
    onClick,
    ...props
}: ButtonProps) {

    const navigate = useNavigate();
    return (
        <button {...props}
            className={cn(
                "w-full",
                buttonStyles({variant, size}),
            )}
            onClick={() => {
                navigate("/send")
            }}
            >
            {text}
        </button>
    )
}