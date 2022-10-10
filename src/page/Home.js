import React from "react";
import Login from "../components/Login";
import "./style/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <h1 className="home-title">
          Welcome to <span>Pizza house</span>
        </h1>
        <Login />
      </div>
    </div>
  );
};

export default Home;
