import React from "react";
import { Link } from "react-router-dom";
import "./style/erorr.css";
import img from "./style/error.jpg";

const Error = () => {
  return (
    <main className="main-error">
      <div className="error">
        <h1>Opss!</h1>
        <h2>Erorr 404</h2>
        <p>Sorry we couldn't find this page </p>
        <p>
          Try searching to<span> Home page</span> :
        </p>
        <Link to="/">
          <button className="btn-error">back Home</button>
        </Link>
      </div>
      <div className="img">
        <img src={img} alt="" />
      </div>
    </main>
  );
};

export default Error;
