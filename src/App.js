import "./App.css";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Authentication/Auth";
import Signup from "./Components/Signup/Signup";
import Password from "./Components/Forgotpass/Password";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/create" element={<Signup />} />
        <Route path="/welcome" element={<h2>Welcome to Dashboard</h2>} />
        <Route path="/reset-password" element={<><h2>Reset Password Page</h2><Password/></>} /> {/* Placeholder for reset password page */}
      </Routes>
    </div>
  );
}

export default App;
