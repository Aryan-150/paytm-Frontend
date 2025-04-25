import { useRef } from "react";
import AuthComponent from "../ui/authComponent";
import Input from "../ui/input";
import axios from "axios";
import { BASE_URL } from "../utils";
import { useNameCharContext } from "../stateProviders/nameCharProvider";
import { useUserContext } from "../stateProviders/userProvider";
import { useAuthMessage } from "../stateProviders/authMessageProvider";
import { useResponseMessage } from "../stateProviders/resMessageProvider";
import { useNavigate } from "react-router-dom";
import { useLoggedInContext } from "../stateProviders/loggedInProvider";

export default function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { setNameChar } = useNameCharContext();
    const { setUser } = useUserContext();
    const { isAuthMessage, setIsAuthMessage } = useAuthMessage();
    const { responseMessage, setResponseMessage } = useResponseMessage();
    const { setIsLoggedIn } = useLoggedInContext();
    const navigate = useNavigate();

    async function onSignin() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if(email === "" || password === "") {
            setIsAuthMessage(true);
            setResponseMessage([...[], "!!! one of the field is empty"]);
            setTimeout(() => setIsAuthMessage(false), 3000);
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/v1/user/signin`, {
                username: email,
                password: password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }); // signin done

            console.log(response.data);
            if(response.data.user){
                setUser(response.data.user);
            }
            setNameChar(response.data.user.firstName.charAt(0).toUpperCase());
            setIsAuthMessage(true);
            setResponseMessage([...[],response.data.msg]);
            setIsLoggedIn(true);
            navigate("/dashboard");
        } catch (error: any) {
            if(error.response.data.errorType === "normal"){
                console.log('normal error');
                
                setIsAuthMessage(true);
                setResponseMessage(...[], [error.response.data.msg.split(":")[1].trim()]);
                setTimeout(() => setIsAuthMessage(false), 3000);
                return;
            }

            if(error.response.data.errorType === "zod") {
                console.log('zod error');
                
                setIsAuthMessage(true);
                const zodError = error.response.data.msg;
                console.log(zodError);
                console.log(typeof zodError);
            
                let newZOdError: Array<string> = [];
                if(Array.isArray(zodError)) {
                    zodError.map((e) => {
                        newZOdError.push(e.message);
                    })
                }
                console.log(newZOdError);
                setResponseMessage(...[],newZOdError);
                setTimeout(() => setIsAuthMessage(false), 3000);
                return;
            }
        }
    }

    return (

        <AuthComponent responseMessage={responseMessage} isAuthMessage={isAuthMessage} text={"Sign In"} onClick={onSignin}>
            <Input reference={emailRef} variant={"sm"} labelStyle={"normal"} type={"email"} labelName={"Email"} placeholder={"jhon@gmail.com"} />
            <Input reference={passwordRef} variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"password"} placeholder={"password"} />
        </AuthComponent>

    )
}