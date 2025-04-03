import AuthComponent from "../authComponent";
import Input from "../input";

export default function SignIn() {
    return (
        <AuthComponent text={"Sign In"}>
            <Input variant={"sm"} labelStyle={"normal"} type={"text"} labelName={"username"} placeholder={"jhon@gmail.com"} />
            <Input variant={"sm"} labelStyle={"normal"} type={"password"} labelName={"password"} placeholder={"password"} />
        </AuthComponent>
    )
}