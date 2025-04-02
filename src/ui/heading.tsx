import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { HTMLAttributes } from "react";

const headingStyles = cva("flex justify-center items-center text-center tracking-tight", {
    variants: {
        variant: {
            main: "text-woodsmoke-950 text-4xl font-bold",
            sub: "text-woodsmoke-500 text-lg font-medium w-4/5",
        }
    },
    defaultVariants: {
        variant: "main"
    }
})

interface HeadingProps extends VariantProps<typeof headingStyles>, HTMLAttributes<HTMLHeadingElement> {
    text: string;
}

export default function Heading({
    variant,
    text,
    className
}: HeadingProps) {
    return (
        <section className={cn(
            headingStyles({variant}),
            className
        )}>
            {text}
        </section>
    )
}