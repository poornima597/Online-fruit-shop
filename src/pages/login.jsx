import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginInitiate } from "../redux/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state.data);

  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    if (user) {     
      history.push("/");
    }
  }, [user, dispatch]);

  const signIn = (e) => {
    e.preventDefault();
    dispatch(loginInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="login mx-auto">     
      <div className="loginForm">
        <div class="d-flex flex-row justify-content-center">
          <div class="row">
            <div class="text-center">
              <form>
                <h2 class="sign-in mb-3">Login</h2>
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
                      onClick={signIn}
                      class="login_btn mt-3"
                      id="sign-up"
                    >
                      Login
                    </button>
                  </div>
                  <div class="form-group text-center">
                    <Link to="/register" class="" >
                        Create your account                      
                    </Link>
                  </div>
                </div>
                <div class="form-check"></div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
