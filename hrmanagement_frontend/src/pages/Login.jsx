
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  let [emailid, setEmailid] = useState("");
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  let handleLogin = async (event) => {
    event.preventDefault();

    if (emailid === "admin@gmail.com" && password === "admin") {
      navigate("/adminhome");
    } else {
      try {
        let req = await fetch(
          "http://localhost:3000/api/employee/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ emailid, password })
          }
        );

        let res = await req.json();
        console.log(res);

        // Update this condition according to your backend response
        if (req.ok) {
          navigate("/emphome");
        } else {
          alert(res.message || "Invalid email or password");
        }
      } catch (error) {
        console.log(error);
        alert("Unable to connect to the server");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-5 col-md-7 col-sm-10">

            <div className="login-card">

              <div className="login-icon">
                <i className="bi bi-person-circle"></i>
              </div>

              <h2 className="login-title">Welcome Back!</h2>
              <p className="login-subtitle">
                Login to access your dashboard
              </p>

              <form onSubmit={handleLogin}>

                <div className="mb-4">
                  <label className="form-label">Email Address</label>
                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-envelope"></i>
                    </span>
                    <input
                      type="email"
                      className="form-control"
                      value={emailid}
                      onChange={(event) =>
                        setEmailid(event.target.value)
                      }
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="form-label">Password</label>
                  <div className="input-group custom-input">
                    <span className="input-group-text">
                      <i className="bi bi-lock"></i>
                    </span>
                    <input
                      type="password"
                      className="form-control"
                      value={password}
                      onChange={(event) =>
                        setPassword(event.target.value)
                      }
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="login-submit-btn">
                  Login <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </form>

              <div className="login-footer">
                <p>Secure Login Portal</p>
                <span>Employee Management System</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
