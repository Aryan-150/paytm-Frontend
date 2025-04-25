import { ReactNode, Ref } from "react";
import { cn } from "../utils";

export default function BottomWarning({ reference, children }: { reference: Ref<HTMLDivElement> , children: ReactNode }) {
    return (
        <div ref={reference} className={cn(
            "flex flex-col justify-center items-center gap-2 my-1"
        )}>
            {children}
        </div>
    )
}