import React from "react";
import { NavLink } from "react-router";
import User from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="w-11/12 m-auto flex justify-between items-center ">
      <div className=""></div>
      <div className="nav flex gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <img src={User} alt="Image :)" />
        <button className=" btn text-white bg-[#403F3F] px-8">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
