import AuthComponent from "../authComponent";
import Input from "../input";

export default function SignUp() {
    return (
        <AuthComponent text={"Sign Up"}>
            <Input variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"First Name"} placeholder={"jhon"} />
            <Input variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"Last Name"} placeholder={"doe"} />
            <Input variant={"sm"} labelStyle={"normal"} type={"email"} labelName={"Email"} placeholder={"jhon@gmail.com"} />
            <Input variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"Password"} placeholder={"password"} />
        </AuthComponent>
    )
}