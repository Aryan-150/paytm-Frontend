import { cn } from "../utils";

export default function Balance() {
    const money = "10,000";
    return (
        <section className={cn(
            "w-10/12 mx-auto px-4 flex justify-start items-center font-dmsans text-2xl h-fit font-extrabold tracking-tight",
        )}>
            <p>Your balance<span className="text-xl pl-2 font-bold">Rs {money}</span></p>
        </section>
    )
}