import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../redux/action";

const Register = () => {
//   const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useSelector((state) => state.data);  

  console.log("user=>", user);
  let dispatch = useDispatch();
  useEffect(() => {
    if (user) {      
      window.location.href = "/";
    }   
  }, [user, dispatch]);
  
  

  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login mx-auto">
      <div className="registerForm">
        <div class="d-flex flex-row justify-content-center">
          <div class="row">
            <div class="text-center">
              <form>
                <h2 class="sign-in mb-3 mt-4">Register</h2>
                {/* <div class="form-group">
                  <label id="words_1" for="exampleInputEmail1">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter your name"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div> */}
                <div class="form-group text-left">
                  <label id="words_1" for="exampleInputEmail1">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                {/* <div class="form-group">
                  <label id="words_1" for="exampleInputEmail1">
                    Phone number
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Phone no"
                  />
                  <small id="emailHelp" class="form-text text-muted"></small>
                </div> */}
                <div class="form-group text-left">
                  <label id="words_2" for="exampleInputPassword1">
                    <span>Password</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                  />
                  <div class="form-group text-center">
                    <button
                      type="submit"
                      onClick={(e) => register(e)}
                      class="login_btn mt-3"
                      id="sign-up"
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
               
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
