import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Plant from "./Plant";
import Blogs from "./Blogs";
import Button from "../../public/icon/Button.svg";
import logo from "../../public/logos/logo.svg";
import Delete from "../../public/icon/x.svg";
import logout from "../../public/icon/logout.svg"
import search from "../../public/icon/search.svg"
import shop from "../../public/icon/shop.svg"
const Header = () => {


  return (
    <div>
      <div className=" container mx-auto flex w-full max-w-7xl  p-2">
        
        <div className="flex w-full md:w-[50]  items-center justify-between border-b-2">
          <NavLink to="/">
            <img src={logo} alt="logo" width={"200px"} height={"65px"} />
          </NavLink>
          <div className="hidden items-center rounded-lg md:flex md:gap-2 lg:gap-8">
            <NavLink
              to="/"
              className="nav px-5 py-[10px] text-base font-normal text-[#3D3D3D] hover:text-black"
            >
              Home
            </NavLink>
            <NavLink
              to="/movie"
              className="nav px-5 py-[10px] text-base font-normal text-[#3D3D3D] hover:text-black"
            >
              Shop
            </NavLink>
            <NavLink
              to="/Support"
              className=" nav px-5 py-[10px] text-base font-normal text-[#3D3D3D] hover:text-black"
            >
              Plant Care
            </NavLink>
            <NavLink
              to="subscription"
              className="nav px-5 py-[10px] text-base font-normal text-[#3D3D3D] hover:text-black"
            >
              Blogs
            </NavLink>
          </div>
          <div className="flex space-x-7">
            <img src={search} alt="img" width={25} />
            <img src={shop} alt="img" width={35} />
            <div className="ml-2">
              <button
                onClick={() => setlogin}
                className=" flex items-center space-x-1 rounded-md bg-green-600 p-2 pl-5 pr-5 text-white"
              >
                <img className="pr-3" src={logout} alt="" />
                Login
              </button>
            </div>
          </div>
         
        </div>
      </div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Shop />} />
        <Route path="/support" element={<Plant />} />
        <Route path="/subscription" element={<Blogs />} />
      </Routes>
    </div>
  );
};

export default Header;
