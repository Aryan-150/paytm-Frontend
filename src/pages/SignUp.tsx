import { useRef } from "react";
import AuthComponent from "../ui/authComponent";
import Input from "../ui/input";
import axios from "axios";
import { BASE_URL } from "../utils";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    const navigate = useNavigate();
    const fristNameRef = useRef<HTMLInputElement>(null);
    const lastNameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function onSignup() {
        const firstName = fristNameRef.current?.value;
        const lastName = lastNameRef.current?.value;
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

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

        alert(response.data.msg);
        navigate("/signin");
    }

    return (
        <AuthComponent text={"Sign Up"} onClick={onSignup}>
            <Input reference={fristNameRef} variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"First Name"} placeholder={"jhon"} />
            <Input reference={lastNameRef} variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"Last Name"} placeholder={"doe"} />
            <Input reference={emailRef} variant={"sm"} labelStyle={"normal"} type={"email"} labelName={"Email"} placeholder={"jhon@gmail.com"} />
            <Input reference={passwordRef} variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"Password"} placeholder={"password"} />
        </AuthComponent>
    )
}