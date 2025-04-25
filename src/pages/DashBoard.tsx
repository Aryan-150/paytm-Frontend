import { useEffect, useRef } from "react";
import Balance from "../ui/balance";
import Header from "../ui/header";
import Input from "../ui/input";
import { cn } from "../utils";
import { LoaderContextProvider, useLoaderContext } from "../stateProviders/loaderProvider";
import UsersList from "../ui/usersList";
import { useLoggedInContext } from "../stateProviders/loggedInProvider";
import { useNavigate } from "react-router-dom";

export default function DashBoard() {
  const searchUserRef = useRef<HTMLInputElement>(null);
  const { isLoggedIn } = useLoggedInContext();
  const { isLoading, setIsLoading } = useLoaderContext();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoading);
    console.log(isLoggedIn);
    
    if(!isLoggedIn) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false)
        navigate("/signin")
      }, 2000)
    }
  }, [isLoggedIn])

  return (
    <>
      {       
        isLoading 
        ? 
          <p className="flex justify-center py-5 font-semibold text-xl text-woodsmoke-950">
            Loading...
          </p>
        :
        <LoaderContextProvider>
          <main className={cn(
            "w-screen h-screen flex flex-col gap-10",
            "overflow-y-scroll scroll-smooth pb-10"
          )}>
            <Header />
            <Balance />
            <div className={cn(
              "w-10/12 mx-auto mt-4 px-4 flex flex-col justify-center items-start gap-2"
            )}>
              <Input reference={searchUserRef} variant={"lg"} labelStyle={"dark"} type={"text"} labelName={"Users"} placeholder={"Search users...."} />
            </div>
            <div className={cn(
              "flex flex-col gap-3 w-10/12 mx-auto divide-y snap-center px-5 divide-woodsmoke-200",
            )}>
              <UsersList />
            </div>

          </main>
        </LoaderContextProvider>
      }
    </>
  )

}