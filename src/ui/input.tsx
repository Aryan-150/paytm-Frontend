import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import { cn } from "../utils";

const inputStyles = cva("outline-none font-dmsans text-woodsmoke-800", {
    variants: {
        variant: {
            sm: "w-72 border-1 border-woodsmoke-200 px-2 py-1 rounded",
            md: "",
            lg: "",
        }
    },
    defaultVariants: {
        variant: "sm"
    }
})

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyles> {
    type: string,
    placeholder: string;
    label: string;
}

export default function Input({
    type,
    placeholder,
    label,
    variant,
    className,
    ...props
}: InputProps) {
    return (
        <div className={cn(
            "flex flex-col gap-1 justify-items-start py-1"
        )}>
            <label htmlFor={placeholder.toUpperCase()}
                className={cn(
                    "font-dmsans text-base font-stretch-110% font-semibold tracking-wide"
                )}
            >{label}</label>
                <input id={placeholder.toUpperCase()} type={type} placeholder={placeholder} {...props}
                    className={cn(
                        inputStyles({variant}),
                        "w-full",
                        className
                    )}
                />
        </div>
    )
}