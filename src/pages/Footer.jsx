import React from "react";
import logo from "../../public/logo.png"
import { NavLink, Route, Routes } from "react-router-dom";
import instagram from "../../public/instagram.svg"
import facebook from "../../public/facebook.svg";
import youtube from "../../public/youtube.svg";

const Footer = () => {
  return (
    <div className="">
      <div className="mt-16 border-t"></div>
      <div className="container mx-auto w-full max-w-7xl pt-10">
        <div className="flex pb-10">
          <div>
            <img src={logo} alt="" width={50} height={40} />
          </div>
          <div className="space-x-10 pl-96">
            <NavLink to="/branch" className="text-lg">
              Filiallar
            </NavLink>
            <NavLink to="/AboutUs" className="text-lg">
              Biz haqimizda
            </NavLink>
            <NavLink to="/Contact" className="text-lg">
              Bog'lanish
            </NavLink>
          </div>
        </div>
        <div className="border-t pt-5"></div>
        <div className="flex justify-between pb-5">
          <h1 className=" text-gray-500">
            © Delever 2020 - 2024 Barcha huquqlar himoyalangan
          </h1>
          <div className="flex items-center space-x-3">
            <a href="https://www.instagram.com/maxwayuz/">
              <img src={instagram} alt="" />
            </a>
            <a href="https://www.facebook.com/maxway.uzb/">
              <img src={facebook} alt="" />
            </a>
            <a href="https://www.youtube.com/@maxway2010">
              <img src={youtube} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
