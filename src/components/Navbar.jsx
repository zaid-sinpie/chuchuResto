import { useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button.jsx";

export default function Navbar({onSelect}) {

  return (
    <ul className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="btns">
        <Button id={"login"} onSelect={onSelect}>
          Login
        </Button>
        <Button  id={"signup"} onSelect={onSelect}>
          Signup
        </Button>
      </div>
    </ul>
  );
}
