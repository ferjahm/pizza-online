import React from "react";
import { NavLink } from "react-router-dom";
import "../page/style/form.css";
import { FaArrowRight } from "react-icons/fa";

const Login = () => {
  return (
    <main>
      <div className="box">
        <form method="" action="" className="form">
          <h2>Login</h2>
          <label htmlFor="email">email</label>
          <input
            type="email"
            mame="email"
            placeholder="email"
            className="input"
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            mame="password"
            placeholder="password"
            className="input"
          />
          <button type="submit" className="btn">
            submit
          </button>
          <div className="form-link">
            <NavLink to="/createaccount" className="lien">
              create account
              <FaArrowRight />
            </NavLink>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
