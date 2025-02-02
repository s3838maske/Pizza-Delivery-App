import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../action/userAction";

export default function Loginscreen() {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();


  useEffect(()=> {

    if (localStorage.getItem('currentUser'))
    {
      window.location.href ='/'
    }

  }, [])

  function login() {
    
      const user = {
        email,
        password,
      };
      dispatch(LoginUser(user));
    
  }

  return (
    <div className="  row justify-content-center mt-5">
      <div className=" register col-md-5 mt-5 text-start shadow p-3 mb-5  rounded">
        <h3
          className="text-center m-2"
          style={{ fontSize: "30px", color: "white" }}
        >
          Login Page
        </h3>
        <div>
          <input
            required
            type="email"
            placeholder="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            required
            type="text"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <button onClick={login} className="btn mt-3">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
