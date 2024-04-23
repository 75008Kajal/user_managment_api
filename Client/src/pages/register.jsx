import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { register } from "../Services/user.js";

function Register() {
  const [phoneNO, setphoneNo] = useState("");
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onRegister = async () => {
    if (email.length === 0) {
      alert("enter email");
    } else if (password.length === 0) {
      alert("enter password");
    } else if (fullName.length === 0) {
      alert("enter name");
    } else if (phoneNO.length === 0) {
      alert("enter Phone No.");
    } else {
      const result = await register(fullName, email, password, phoneNO);
      if (result["status"] === "success") {
        alert("successfully registered a user");
        navigate("/login");
      } else {
        alert("Failed to register the user");
      }
    }
  };

  return (
    <div>
      <div className="row ">
        <div className="col"></div>
        <div className="col whole">
          <h1 className="title ">Register User</h1>
          <div className="form">
            <div className="mb-2">
              {" "}
              <h4>Enter Full Name</h4>
              <input
                type="text"
                placeholder="Enter name"
                className="form-control"
                onChange={(e) => {
                  setfullName(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              {" "}
              <h4>Enter Email</h4>
              <input
                type="text"
                placeholder="Enter Email"
                className="form-control"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <h4>Enter password</h4>
              <input
                type="password"
                placeholder="Enter password"
                className="form-control"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="mb-2">
              <h4>Enter Phone Number</h4>
              <input
                type="tel"
                placeholder="Enter Phone No."
                className="form-control"
                onChange={(e) => {
                  setphoneNo(e.target.value);
                }}
              />
            </div>
            

            <div className="center">
              <botton onClick={onRegister} className="btn btn-success">
                SignIn
              </botton>
            </div>

            <div className="statement">
              Already have account ? <Link to="/login">Login here</Link>
            </div>

          </div>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Register;
