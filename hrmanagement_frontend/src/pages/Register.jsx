
import { useState } from "react";
import "./register.css";

function Register() {
  let [name, setName] = useState("");
  let [emailid, setEmailid] = useState("");
  let [password, setPassword] = useState("");
  let [role, setRole] = useState("");

  let handleRegister = async (event) => {
    event.preventDefault();

    try {
      let res = await fetch(
        "http://localhost:3000/api/employee/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, emailid, password, role })
        }
      );

      let data = await res.json();

      if (res.ok) {
        alert("Registration successful!");
        console.log("Data inserted successfully");
        console.log(data);

        setName("");
        setEmailid("");
        setPassword("");
        setRole("");
      } else {
        alert(data.message || "Registration failed");
        console.log(data);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to connect to the server");
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="row justify-content-center align-items-center min-vh-100">

          <div className="col-lg-6 col-md-8 col-sm-11">

            <div className="register-card">

              <div className="register-icon">
                <i className="bi bi-person-plus-fill"></i>
              </div>

              <h2 className="register-title">Create Account</h2>

              <p className="register-subtitle">
                Register to join our Employee Management System
              </p>

              <form onSubmit={handleRegister}>

                {/* Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={name}
                      onChange={(event) =>
                        setName(event.target.value)
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <div className="input-group register-input">
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
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group register-input">
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
                      placeholder="Create a password"
                      required
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="mb-4">
                  <label className="form-label">Select Role</label>
                  <div className="input-group register-input">
                    <span className="input-group-text">
                      <i className="bi bi-people"></i>
                    </span>
                    <select
                      className="form-select"
                      value={role}
                      onChange={(event) =>
                        setRole(event.target.value)
                      }
                      required
                    >
                      <option value="">Choose your role</option>
                      <option value="HR">HR</option>
                      <option value="EMPLOYEE">EMPLOYEE</option>
                    </select>
                  </div>
                </div>

                {/* Button */}
                <button type="submit" className="register-submit-btn">
                  Create Account
                  <i className="bi bi-arrow-right ms-2"></i>
                </button>

              </form>

              <div className="register-footer">
                <p>Welcome to our team!</p>
                <span>Employee Management System</span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
