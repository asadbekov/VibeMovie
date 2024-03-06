import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import Support from "./Support";
import Subscription  from "./Subscription";
import Button from "../../public/icon/Button.svg";
import logo from "../../public/icon/logo.svg";
import Delete from "../../public/icon/x.svg";
import search from "../../public/icon/search.svg";
import bell from "../../public/icon/bell.svg";

const Header = () => {
  const [navHidden, setNavHidden] = useState("hidden");
  const [buttonHidden, setButtonHidden] = useState("");
  return (
    <div>
      <div className="bg-opacity-15  z-10 w-full justify-center bg-[#141414] p-2 backdrop-blur-md">
        <div className="container  mx-auto px-16 py-2 ">
          <div className="flex items-center justify-between">
            <NavLink to="/">
              <img src={logo} alt="logo" width={"200px"} height={"65px"} />
            </NavLink>
            <div className="header_item hidden items-center rounded-lg border-white bg-black p-2 md:flex md:gap-3 lg:gap-8 lg:p-[10px]">
              <NavLink
                to="/"
                className=" font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A]"
              >
                Home
              </NavLink>
              <NavLink
                to="/movie"
                className=" font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A]"
              >
                Movies & Shows
              </NavLink>
              <NavLink
                to="/Support"
                className="  font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A]"
              >
                Support
              </NavLink>
              <NavLink
                to="subscription"
                className=" font-manrope leading-1.5 box-border rounded-lg border border-black bg-black px-5 py-[10px] text-left text-base font-medium tracking-normal text-white hover:bg-[#1A1A1A]"
              >
                Subscriptions
              </NavLink>
            </div>
            <div className="flex gap-4 md:gap-7">
              <button className="ml-[40px]">
                <img src={search} alt="search" width={"28px"} height={"28px"} />
              </button>
              <button>
                <img src={bell} alt="massege" width={"25px"} height={"28px"} />
              </button>
              <button
                className={`md:hidden ${buttonHidden}`}
                onClick={() => {
                  setNavHidden("");
                  setButtonHidden("hidden");
                }}
              >
                <img src={Button} alt="vector" width={"48px"} height={"48px"} />
              </button>
              <button
                className={`md:hidden ${navHidden}`}
                onClick={() => {
                  setNavHidden("hidden");
                  setButtonHidden("");
                }}
              >
                <img src={Delete} alt="vector" width={"24px"} height={"48px"} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${navHidden} bg-opacity-15 fixed right-0 z-10 mt-[60px] flex flex-col items-end rounded-l-lg bg-[#141414] px-6 py-4 backdrop-blur-md`}
      >
        <NavLink
          to="/"
          className="cursor-pointer rounded-lg bg-[#1A1A1A] px-4 py-3 text-sm font-medium leading-normal text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="/movie"
          className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium leading-normal text-white hover:bg-[#1A1A1A]"
        >
          Movies & Shows
        </NavLink>
        <NavLink
          to="/support"
          className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium leading-normal text-white hover:bg-[#1A1A1A]"
        >
          Support
        </NavLink>
        <NavLink
          to="subscription"
          className="cursor-pointer rounded-lg px-4 py-3 text-sm font-medium leading-normal text-white hover:bg-[#1A1A1A]"
        >
          Subscriptions
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default Header;
