import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./ui/pages/SignIn";
import SignUp from "./ui/pages/SignUp";
import DashBoard from "./ui/pages/DashBoard";
import Send from "./ui/pages/Send";
import HomePage from "./ui/pages/HomePage";

export default function App() {
  return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/signin" element={< SignIn />} />
			<Route path="/signup" element={<SignUp />} />
			<Route path="/dashboard" element={<DashBoard />} />
			<Route path="/send" element={<Send />} />
		</Routes>
	</BrowserRouter>
  )
}
