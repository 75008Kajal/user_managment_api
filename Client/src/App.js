import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./pages/register";
import LoginUser from "./pages/login";
import Homepage from "./pages/home";


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginUser />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
