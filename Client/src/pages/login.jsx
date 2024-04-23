import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Services/user";
// import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { loginAction } from "../feature/userSlice";
function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onLogin = async () => {
    // client side validation
    if (email.length === 0) {
      alert("enter email");
    } else if (password.length === 0) {
      alert("enter password");
    } else {
      const result = await login(email, password);
      if (result["status"] === "success") {
        const { fullname, token } = result["data"];
        sessionStorage.token = token;
        sessionStorage.fullname = fullname;
        dispatch(loginAction());

        // alert("welcome to the application");
        navigate("/home");
      } else {
        alert("invalid email or password");
      }
    }
  };

  return (
    <div>
      <h2 className="page-title">Login</h2>

      <div className="row">
        <div className="col"></div>

        <div className="col">
          <div className="form">
            <div className="mb-3">
              <label htmlFor="">Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="">Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <div>
                Dont have an account yet?{" "}
                <Link to="/register">Register here</Link>
              </div>
              <button onClick={onLogin} className="mt-2 btn btn-success">
                Login
              </button>
            </div>
          </div>
        </div>

        <div className="col"></div>
      </div>
    </div>
  );
}

export default LoginUser;
