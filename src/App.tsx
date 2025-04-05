import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Send from "./pages/Send";
import { NameCharContextProvider } from "./stateProviders/nameCharProvider"; 

export default function App() {
	return (
		<NameCharContextProvider>
			<BrowserRouter>
			<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
					<Route path="/dashboard" element={<DashBoard />} />
					<Route path="/send" element={<Send />} />
			</Routes>
			</BrowserRouter>
		</NameCharContextProvider>
	);
}
