import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Branch from "./Branch";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import logo from "../../public/logo.png";
import PlaceIcon from "@mui/icons-material/Place";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <div className="container mx-auto w-full max-w-7xl p-2">
        <div className="pb-4 pt-4">
          <div className="flex items-center justify-between">
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                <svg
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-8">
              <NavLink to="/">
                <img className="" src={logo} alt="logo" width={"50px"} height={"50px"} />
              </NavLink>
              <div className="hidden space-x-8 md:flex">
                <NavLink to="/" className="nav text-lg">
                  Menyu
                </NavLink>
                <NavLink to="/Branch" className="nav text-lg">
                  Filiallar
                </NavLink>
                <NavLink to="/AboutUs" className="nav text-lg">
                  Biz haqimizda
                </NavLink>
                <NavLink to="/Contact" className="nav text-lg">
                  Bog'lanish
                </NavLink>
              </div>
            </div>
            <div className="flex items-center space-x-7">
              <div className="hidden space-x-2 md:flex">
                <button className="rounded-full bg-slate-100 p-2">
                  <PlaceIcon color="secondary" />
                </button>
                <h1 className="text-sm">
                  Yetkazib berish yoki Olib ketish <br />
                  <span className="text-purple-900">
                    Qabul qilib olish turini tanlang
                  </span>
                </h1>
              </div>
              <div className="flex items-center space-x-2">
                <div>
                  <button className="rounded-full bg-slate-100 p-2">
                    <ShoppingCartIcon color="secondary" />
                  </button>
                </div>
                <h1>0</h1>
              </div>
              <div className=" hidden md:flex">
                <button className="rounded-full bg-slate-100 p-2">
                  <PersonIcon color="secondary" />
                </button>
              </div>
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
        {showMenu && (
          <div className="md:hidden">
            <NavLink to="/" className="nav block text-lg">
              Menyu
            </NavLink>
            <NavLink to="/Branch" className="nav block text-lg">
              Filiallar
            </NavLink>
            <NavLink to="/AboutUs" className="nav block text-lg">
              Biz haqimizda
            </NavLink>
            <NavLink to="/Contact" className="nav block text-lg">
              Bog'lanish
            </NavLink>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Branch" element={<Branch />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
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
