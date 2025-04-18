import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Send from "./pages/Send";
import { NameCharContextProvider } from "./stateProviders/nameCharProvider";
import { UserContextProvider } from "./stateProviders/userProvider";
import { LoggedInContextProvider } from "./stateProviders/loggedInProvider";
import { AuthMessageContextProvider } from "./stateProviders/authMessageProvider";
import { ResponseMessageProvider } from "./stateProviders/resMessageProvider";

export default function App() {
  return (
    <AuthMessageContextProvider>
      <ResponseMessageProvider>
        <LoggedInContextProvider>
          <UserContextProvider>
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
          </UserContextProvider>
        </LoggedInContextProvider>
      </ResponseMessageProvider>
    </AuthMessageContextProvider>
  );
}
