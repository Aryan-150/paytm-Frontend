import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactElement } from "react";
import { cn } from "../utils";

const buttonStyles = cva("font-dmsans flex justify-center items-center hover:cursor-pointer transition-all duration-300", {
    variants: {
        variant: {
            primary: "bg-woodsmoke-950 text-woodsmoke-100 hover:ring-1 hover:ring-offset-1 ring-woodsmoke-300 ring-offset-woodsmoke-400",
            secondary: "",
        },
        size: {
            sm: "",
            md: "",
            lg: "py-2 text-base font-medium rounded-lg",
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "sm",
    }
})

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
    text: ReactElement | string;
}

export default function Button({
    variant,
    size,
    text,
    className,
    ...props
}: ButtonProps) {
    return (
        <button {...props}
            className={cn(
                buttonStyles({variant, size}),
                "w-full",
                className
            )}
            onClick={() => {

            }}
            >
            {text}
        </button>
    )
}