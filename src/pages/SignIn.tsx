import { useContext, useRef } from "react";
import AuthComponent from "../ui/authComponent";
import Input from "../ui/input";
import axios from "axios";
import { BASE_URL } from "../utils";
import { useNavigate } from "react-router-dom";
import { NameCharContext } from "../stateProviders/nameCharProvider";

export default function SignIn() {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const { setNameChar } = useContext(NameCharContext);

    async function onSignin() {
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post(`${BASE_URL}/api/v1/user/signin`, {
            username: email,
            password: password
        })
        localStorage.setItem('token', response.data.token);
        setNameChar((email as string).charAt(0).toUpperCase());
        alert(response.data.msg);
        navigate("/dashboard");
    }

    return (

        <AuthComponent text={"Sign In"} onClick={onSignin}>
            <Input reference={emailRef} variant={"sm"} labelStyle={"normal"} type={"email"} labelName={"Email"} placeholder={"jhon@gmail.com"} />
            <Input reference={passwordRef} variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"password"} placeholder={"password"} />
        </AuthComponent>

    )
}