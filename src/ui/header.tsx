import { useContext } from "react";
import { BASE_URL, cn } from "../utils";
import Avatar from "./avatar";
import { NameCharContext } from "../stateProviders/nameCharProvider";
import Button from "./button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

export default function Header() {
	const { nameChar } = useContext(NameCharContext);
	const navigate = useNavigate();
	async function logout() {
		// localStorage.removeItem('token');
		await axios.post(`${BASE_URL}/api/v1/user/logout`)
		Cookies.remove('user');
		alert('logged out... ):');
		navigate("/signin");
	}
	
	return (
		<div
			className={cn(
				"w-full h-fit flex justify-between border-b-2 border-woodsmoke-200",
			)}
		>
			<div className={cn("w-10/12 mx-auto flex justify-between items-center")}>
				<p className="font-dmsans font-bold text-2xl text-center tracking-tight px-4 py-2">
					Paytm
				</p>
				<div className="flex justify-center items-center gap-3 px-4 py-2">
					<p className="font-dmsans font-medium text-xl">Hello</p>
					<Avatar variant={"display"} size={"sm"} letter={nameChar || "D"} />
					<Button text={"logout"} onClick={logout} />
				</div>
			</div>
		</div>
	);
}
