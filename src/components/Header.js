import React from "react";
import { Link } from "react-router-dom";

import GoogleAuth from "./GoogleAuth";
import "../static/signIn.css";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link className="item" to="/">
        <b>castr</b>
      </Link>
      <div className="right menu">
        <Link className="item" to="/">
          All Streams
        </Link>
        <div className="item sign-in">
          <GoogleAuth />
        </div>
      </div>
    </div>
  );
};

export default Header;
