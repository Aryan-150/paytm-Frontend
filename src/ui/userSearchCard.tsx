import { cn } from "../utils";
import Avatar from "./avatar";
import Button from "./button";

export default function UserSearchcard() {
  return (
    <section className={cn("flex justify-between items-center w-full px-1 py-2")}>
      <div
        className={cn(
          "w-fit h-fit flex justify-start items-center gap-1.5",
          "text-lg font-medium"
        )}
      >
        <Avatar letter={"H"} size={"md"} />
        <span>{"Harkirat Singh"}</span>
      </div>
      <Button
        variant={"primary"}
        size={"sm"}
        text={"Send Money"}
      />
    </section>
  );
}
