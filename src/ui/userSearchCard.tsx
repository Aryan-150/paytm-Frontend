import { cn } from "../utils";
import Avatar from "./avatar";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import { AccountType, useAccount } from "../stateProviders/allAccountsProvider";

export default function UserSearchcard({ userAccount }: { userAccount : AccountType }) {
  const navigate = useNavigate();
  const accountId = userAccount._id;
  const username = userAccount.userId?.username;
  const userId = userAccount.userId._id;
  const letter = username?.charAt(0).toUpperCase();

  const { setAccount } = useAccount();
  return (
    <section className={cn("flex justify-between items-center w-full px-1 py-2")}>
      <div
        className={cn(
          "w-fit h-fit flex justify-start items-center gap-2",
          "text-lg font-medium"
        )}
      >
        <Avatar letter={letter} size={"md"} />
        <span>{username}</span>
      </div>
      <Button
        variant={"primary"}
        size={"md"}
        text={"Send Money"}
        onClick={() => {
          setAccount({
            _id: accountId,
            userId: {
              _id: userId,
              username: username,
            }
          })
          console.log({
            _id: accountId,
            userId: {
              _id: userId,
              username: username
            }
          });
          
          navigate("/send");
        }}
      />
    </section>
  );
}
