import { cn } from "../utils";
import Heading from "./heading";

export default function SendMoneyModal() {
    return (
        <div className={cn(
            "w-screen h-screen flex justify-center items-center gap-4 bg-woodsmoke-500 opacity-50"
        )}>
            <div className={cn(
                "w-2/6 h-fit bg-woodsmoke-50 opacity-100"
            )}>
                <Heading variant={"main"} text={"Send Money"} />
            </div>
        </div>
    )
}