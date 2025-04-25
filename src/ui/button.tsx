import { cva, VariantProps } from "class-variance-authority";
import { ReactElement } from "react";
import { cn } from "../utils";
import { AllAccountsType } from "./usersList";

const buttonStyles = cva("font-dmsans flex justify-center items-center hover:cursor-pointer transition-all duration-300 text-base font-medium rounded-md w-fit", {
    variants: {
        variant: {
            primary: "bg-woodsmoke-950 text-woodsmoke-100 hover:ring-1 hover:ring-offset-1 ring-woodsmoke-300 ring-offset-woodsmoke-400",
            send_money: "bg-green-500 text-woodsmoke-50 hover:ring-1 hover: ring-offset-1 ring-green-400 ring-offset-green-500",
        },
        size: {
            sm: "px-4 py-1.5",
            md: "px-5 py-2.5",
            lg: "py-2 my-1 w-full text-lg font-medium rounded-lg",
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
    account ?: AllAccountsType;
}

export default function Button({
    variant,
    size,
    text,
    onClick,
    ...props
}: ButtonProps) {
    return (
        <button {...props}
            className={cn(
                buttonStyles({variant, size}),
            )}
            onClick={onClick}
            >
            {text}
        </button>
    )
}