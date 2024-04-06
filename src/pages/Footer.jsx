import React from "react";
import garden from "../../public/icon/garden.svg";
import plant from "../../public/icon/plant.svg";
import logo from "../../public/logos/logo.svg";
import location from "../../public/icon/location.svg";
import message from "../../public/icon/message.svg";
import call from "../../public/icon/calling.svg";
import facebook from "../../public/icon/facebook.svg"
import instagram from "../../public/icon/instagram.svg"
import twitter from "../../public/icon/twitter.svg"
import linkedin from "../../public/icon/linkedin.svg"
import union from "../../public/icon/union.svg" 
import pay from "../../public/images/pay.svg"
const Footer = () => {
  return (
    <div className="container mx-auto flex w-full max-w-7xl">
      <div>
        <div className=" mt-28 flex border  border-green-100 bg-slate-50">
          <div className="p-4">
            <img src={garden} alt="" />
            <h1 className=" mb-2 mt-3 text-lg font-bold">Garden Care</h1>
            <p className=" text-gray-600">
              We are an online plant shop <br /> offering a wide range of cheap
              <br /> and trendy plants.
            </p>
          </div>
          <div className="p-5 ">
            <div className=" border-s pl-5">
              <img src={plant} alt="" />
              <h1 className=" mb-2 mt-3 text-lg font-bold">Plant Renovation</h1>
              <p className=" text-gray-600">
                We are an online plant shop <br /> offering a wide range of
                cheap
                <br /> and trendy plants.
              </p>
            </div>
          </div>
          <div className="p-5">
            <div className=" border-s pl-5">
              <img src={garden} alt="" />
              <h1 className=" mb-2 mt-3 text-lg font-bold">Watering Graden</h1>
              <p className=" text-gray-600">
                We are an online plant shop <br /> offering a wide range of
                cheap
                <br /> and trendy plants.
              </p>
            </div>
          </div>
          <div className="p-5  pl-10">
            <h1 className="mb-3 text-lg font-bold">
              Would you like to join newsletters?
            </h1>
            <div className=" mb-3">
              <input
                className="rounded-s-lg p-3 pr-20 outline-none"
                type="text"
                placeholder="enter your email address..."
              />
              <button className="rounded-e-lg bg-green-600 p-3 pl-6 pr-6 text-lg font-bold text-white hover:bg-green-400">
                Join
              </button>
            </div>
            <p className=" text-gray-600">
              We usually post offers and challenges in newsletter. We’re <br />
              your online houseplant destination. We offer a wide range <br />{" "}
              of houseplants and accessories shipped directly from our <br />{" "}
              (green)house to yours!
            </p>
          </div>
        </div>
        <div className=" flex space-x-28 border border-green-100 bg-green-50 p-6">
          <img src={logo} alt="" />
          <div className="flex items-center space-x-3">
            <img src={location} alt="" />
            <p>
              70 West Buckingham Ave. <br />
              Farmingdale, NY 11735
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={message} alt="" />
            <p>contact@greenshop.com</p>
          </div>
          <div className="flex items-center space-x-3">
            <img src={call} alt="" />
            <p>+88 01911 717 490</p>
          </div>
        </div>
        <div className=" mb-5 cursor-pointer flex space-x-40 border-y border-green-200  bg-slate-50 p-7">
          <div className=" cursor-pointer">
            <h1 className=" mb-1 text-lg font-bold">My account</h1>
            <ul className=" leading-8">
              <li className=" hover:text-blue-500">Our stores</li>
              <li className=" hover:text-blue-500"> My account</li>
              <li className=" hover:text-blue-500">Contact us</li>
              <li className=" hover:text-blue-500">Career</li>
              <li className=" hover:text-blue-500">Specials</li>
            </ul>
          </div>
          <div>
            <h1 className=" mb-1 text-lg font-bold">Help & Guide</h1>
            <ul className=" leading-8">
              <li className=" hover:text-blue-500">Help Center</li>
              <li className=" hover:text-blue-500">How to Buy</li>
              <li className=" hover:text-blue-500">Shipping & Delivery</li>
              <li className=" hover:text-blue-500">Product Policy</li>
              <li className=" hover:text-blue-500"> How to Return</li>
            </ul>
          </div>
          <div>
            <h1 className=" mb-1 text-lg font-bold">Categories</h1>
            <ul className=" leading-8">
              <li className=" hover:text-blue-500">House Plants</li>
              <li className=" hover:text-blue-500">Potter Plants</li>
              <li className=" hover:text-blue-500">Seeds</li>
              <li className=" hover:text-blue-500">Small Plant</li>
              <li className=" hover:text-blue-500">Accessories</li>
            </ul>
          </div>
          <div className=" cursor-pointer">
            <h1 className=" mb-4 text-lg font-bold">Social Media</h1>
            <div className="mb-2 flex space-x-3">
              <div className=" items-center rounded-md border p-2 pl-3 pr-3 hover:bg-gray-300">
                <img src={facebook} alt="" width={11} />
              </div>
              <div className=" items-center rounded-md border p-2 pl-2 pr-2 hover:bg-gray-300">
                <img src={instagram} alt="" width={22} />
              </div>
              <div className=" items-center rounded-md border p-2 pl-2 pr-2 hover:bg-gray-300">
                <img src={twitter} alt="" width={25} />
              </div>
              <div className=" items-center rounded-md border p-2 pl-3 pr-3 hover:bg-gray-300">
                <img src={linkedin} alt="" width={20} />
              </div>
              <div className=" items-center rounded-md border p-2 pl-2 pr-2 hover:bg-gray-300">
                <img src={union} alt="" width={25} />
              </div>
            </div>
            <h1 className="mb-2 mt-6 text-lg font-bold">We accept</h1>
            <img src={pay} alt="" width={300} />
          </div>
        </div>
        <p className=" mb-5 text-center">
          © 2021 GreenShop. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
