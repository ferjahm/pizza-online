import React from "react";
import "./style/createAccount.css";

const CreatAcount = () => {
  return (
    <div className="login">
      <form method="" className="login-form">
        <h1 className="title">CreatAcount</h1>
        <label htmlFor="firstname">firstname</label>
        <input
          type="text"
          name="firstname"
          placeholder="firstname"
          className="input"
        />

        <label htmlFor="lastname">lastname </label>
        <input
          type="text"
          name="lastname"
          placeholder="firstname"
          className="input"
        />

        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          className="input"
        />

        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          className="input"
        />
        <div className="input-radio">
          <label htmlFor="gander">Man</label>
          <input type="radio" name="gander" className="radio" checked />

          <label htmlFor="gander">Women</label>
          <input type="radio" name="gander" className="radio" />
        </div>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
    </div>
  );
};

export default CreatAcount;
