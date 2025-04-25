import { useEffect, useRef } from "react";
import Button from "../ui/button";
import Heading from "../ui/heading";
import Input from "../ui/input";
import UserProfile from "../ui/userprofile";
import { BASE_URL, cn } from "../utils";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLoaderContext } from "../stateProviders/loaderProvider";
import { useLoggedInContext } from "../stateProviders/loggedInProvider";
import { useAccount } from "../stateProviders/allAccountsProvider";

export default function Send() {
  const sendMoneyRef = useRef<HTMLInputElement>(null);
  const { isLoading, setIsLoading } = useLoaderContext();
  const { isLoggedIn } = useLoggedInContext();
  const { account, setAccount } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoggedIn) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false)
        navigate("/signin")
      }, 2000)
    }
  }, [])

  useEffect(() => {
    console.log('useeffect of send end-point');
    console.log(account);
  }, [])

  const to = account.userId._id as string;
  const username = account.userId.username as string;
  const letter = username.trim().charAt(0).toUpperCase();

  async function transferMoney() {
    const amount = parseInt(sendMoneyRef.current?.value as string);
    console.log(amount);
    console.log(to);
    
    await axios.post(`${BASE_URL}/api/v1/account/transfer`, {
      to: to,
      amount: amount
    }, {
      headers: {
        "Content-Type": "application/json",
      }
    })
    alert('money has transfered...');
    navigate("/dashboard");
  }

  return (
    <>
      {
        isLoading
          ?
          <p className="flex justify-center py-5 font-semibold text-xl text-woodsmoke-950">
            you are not loggedin,
            redirecting to signin page ...
          </p>
          :
          <section className="w-screen h-screen bg-woodsmoke-50 flex justify-center items-center">
            <div className={cn(
              "w-2/6 h-fit px-12 py-6 shadow-lg bg-white rounded-xl border-2 border-woodsmoke-50",
              "flex flex-col gap-2",
            )}>
              <Heading text={"Send Money"} className="mb-5" />
              <UserProfile letter={letter} username={username} variant={"send_money"} size={"md"} />
              <Input reference={sendMoneyRef} variant={"lg"} labelStyle={"normal"} type={"text"} placeholder={"Enter amount"} labelName={"Amount (in Rs)"} />
              <Button variant={"send_money"} size={"lg"} text={"Initiate Transfer"}
                onClick={transferMoney}
              />
            </div>

          </section>
      }
    </>
  )
}