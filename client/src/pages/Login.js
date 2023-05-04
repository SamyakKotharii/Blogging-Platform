import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import darkhorse from "../images/darkhorse-logo.png";
import { UserContext } from "../App";
import { useContext } from "react";
const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  // console.log(state);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    // console.log(data.adminname)
    if (res.status === 400 || !data) {
      window.alert("Invalid Credential");
    } else if (data.adminname === "Samyak") {
      localStorage.setItem("adminname", data.adminname);
      dispatch({ type: "USER", payload: true });
      navigate("/admin");
    } else {
      localStorage.setItem("adminname", data.adminname);
      dispatch({ type: "USER", payload: true });
      window.alert("Login Successful");
      navigate("/home");
    }
  };
  return (
    <div className="signin">
      <section>
        <div className="container-signin mt-5">
          <div className="signup-content">
            {/* <h2 className="form-title">Log In</h2> */}
            <div className="signin-form">
              <form method="POST" className="register-form" id="register-form">
                <div className="signin-image">
                  <figure>
                    <img src={darkhorse} alt="Company-logo" />
                  </figure>
                </div>
                <div className="input-form">
                  <div className="form-group">
                    <label htmlFor="email">
                      <i className="zmdi zmdi-email material-icons-name"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email ID"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">
                      <i className="zmdi zmdi-lock material-icons-name"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      autoComplete="off"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit-login"
                    value="Log In"
                    onClick={loginUser}
                  />
                </div>
                <NavLink to="/signup" className="signin-image-link">
                  Create Account
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
