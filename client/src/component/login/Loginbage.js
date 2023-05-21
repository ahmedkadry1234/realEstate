import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/counterSlice";
import "./Login.css";
import { Link, NavLink } from "react-router-dom";

const Loginbage = () => {
  // const [email, setemail] = useState("");
  // const [pas, setpas] = useState("");
  // const dispatch = useDispatch();
  // const users = (e) => {
  //   e.preventDefault()
  //   dispatch(
  //     login({
  //       email: email,
  //       name:email.slice(0,1),
  //       pas: pas,
  //       loggin: true,
  //     })
  //   );
  //   window.location =window.location.protocol + "//"+ window.location.hostname +":" + window.location.port + "/";
  // };
  return (
    <div className="Login" id="login">
      <Link to="/" className="title-Name">
        SpaceKey HomeLaunch
      </Link>
      {/* <form action="" onSubmit={(e) => users(e)}>
        <div className="logation mb-3">
          <NavLink to="/log" activeClassName="active">
            <div className="Log active " >
              Login
            </div>
          </NavLink>
        </div>
        <div className="email mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="passowrd mb-3">
          <input
            className="form-control"
            type="password"
            placeholder="Confirm a password "
            required
            value={pas}
            onChange={(e) => setpas(e.target.value)}
          />
        </div>
       
        <input
          type="submit"
          value="login with Google"
          className="btn btn-danger mb-3 form-control"
        />
      </form> */}
      <div className="Googelbtn ">
        <Link to="/auth/google" className="btn btn-danger">
          login with Google
        </Link>
      </div>
    </div>
  );
};
export default Loginbage;
