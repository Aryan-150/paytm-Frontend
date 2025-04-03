import { cn } from "../utils";
import Avatar from "./avatar";

export default function Header() {
  return (
    <div
      className={cn(
        "w-full h-fit flex justify-between border-b-2 border-woodsmoke-200",
      )}
    >
      <div className={cn("w-10/12 mx-auto flex justify-between items-center")}>
        <p className="font-dmsans font-bold text-2xl text-center tracking-tight px-4 py-2">
          Paytm
        </p>
        <div className="flex justify-center items-center gap-3 px-4 py-2">
          <p className="font-dmsans font-medium text-xl">Hello</p>
          <Avatar variant={"display"} size={"sm"} letter={"U"} />
        </div>
      </div>
    </div>
  );
}
