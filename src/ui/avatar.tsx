import { cva, VariantProps } from "class-variance-authority"
import { cn } from "../utils";

const avatarStyles = cva("rounded-full font-bmsans font-semibold cursor-pointer hover:ring-1 hover:ring-offset-1 transition-all duration-200", {
    variants: {
        variant: {
            display: "text-woodsmoke-800 bg-woodsmoke-100 ring-woodsmoke-200 ring-offset-woodsmoke-100",
            send_money: "text-woodsmoke-50 bg-green-400",
        },
        size: {
            sm: "px-3 py-1.5 text-md",
            md: "px-4 py-2 text-xl"
        },
    },
    defaultVariants: {
        variant: "display",
        size: "sm"
    }
})

interface AvatarProps extends VariantProps<typeof avatarStyles> {
    letter: string;
}

export default function Avatar({
    variant,
    size,
    letter
}: AvatarProps) {
    return (
        <section className={cn(
            avatarStyles({variant, size})
        )}>
            {letter.toUpperCase()}
        </section>
    )
}