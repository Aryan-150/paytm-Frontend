import { useRef } from "react";
import AuthComponent from "../ui/authComponent";
import Input from "../ui/input";
import axios from "axios";
import { BASE_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { useAuthMessage } from "../stateProviders/authMessageProvider";
import { useResponseMessage } from "../stateProviders/resMessageProvider";

export default function SignUp() {
    const navigate = useNavigate();
    const fristNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const { isAuthMessage, setIsAuthMessage } = useAuthMessage();
    const { responseMessage, setResponseMessage } = useResponseMessage();

    async function onSignup() {
        const firstName = fristNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        if(firstName === "" || lastName === "" || email === "" || password === "") {
            setIsAuthMessage(true);
            setResponseMessage([...[], "!!! one of the field is empty"]);
            setTimeout(() => setIsAuthMessage(false), 3000);
            return;
        }

        try {
            const response = await axios.post(`${BASE_URL}/api/v1/user/signup`, {
                firstName: firstName,
                lastName: lastName,
                username: email,
                password: password
            },
            {
                headers: {
                    "Content-Type": "application/json"
                }
            }) // signup-done
            
            setIsAuthMessage(true);
            setResponseMessage(...[], [response.data.msg]);
            setTimeout(() => setIsAuthMessage(false), 5000);
            navigate("/signin");

        } catch (error: any) {
            if(error.response?.data?.errorType === "normal") {
                console.log('normal error');
                
                setIsAuthMessage(true);
                setResponseMessage(...[], [error.response.data.msg.split(":")[1].trim()]);
                setTimeout(() => setIsAuthMessage(false), 3000);
                return;
            }

            if(error.response?.data?.errorType === "zod") {
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
        <AuthComponent responseMessage={responseMessage} isAuthMessage={isAuthMessage} text={"Sign Up"} onClick={onSignup}>
            <Input reference={fristNameRef} variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"First Name"} placeholder={"jhon"} />
            <Input reference={lastNameRef} variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"Last Name"} placeholder={"doe"} />
            <Input reference={emailRef} variant={"sm"} labelStyle={"normal"} type={"email"} labelName={"Email"} placeholder={"jhon@gmail.com"} />
            <Input reference={passwordRef} variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"Password"} placeholder={"password"} />
        </AuthComponent>
    )
}