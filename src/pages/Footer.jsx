import React from "react";
import facebook from "../../public/logos/facebook.svg"
import Linkin from "../../public/logos/in.svg"
import twitter from "../../public/logos/twitter.svg"

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" container  mx-auto  w-full p-20 ">
        <div className="mt-10 grid grid-cols-2 justify-between gap-7 text-center md:flex">
          <div className="flex flex-col gap-3 ">
            <p className=" text-left text-base font-semibold leading-normal text-white">
              Home
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Categories
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Devices
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Pricing
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              FAQ
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-left text-base font-semibold leading-normal text-white">
              Movies
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Gernes
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Trending
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              New Release
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Popular
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-left text-base font-semibold leading-normal text-white">
              Shows
            </p>
            <p className="text-left  text-sm font-medium leading-normal text-slate-500">
              Gernes
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Trending
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              New Release
            </p>
            <p className=" text-left  text-sm font-medium leading-normal text-slate-500">
              Popular
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className=" text-left text-base font-semibold leading-normal text-white">
              Support
            </p>
            <p className="  text-left text-sm font-medium leading-normal text-slate-500">
              Contact Us
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-base text-left font-semibold leading-normal text-white">
              Subscription
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Plans
            </p>
            <p className=" text-left text-sm font-medium leading-normal text-slate-500">
              Features
            </p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className=" text-left text-base font-semibold leading-normal text-white">
              Connect With Us
            </p>
            <div className="flex gap-2 ">
              <button className="h-11 w-11 rounded-lg bg-[#1A1A1A] p-3 hover:bg-red-500">
                <img src={facebook} alt="face" width={"20px"} height={"20px"} />
              </button>
              <button className="h-11 w-11 rounded-lg bg-[#1A1A1A] p-3 hover:bg-red-500">
                <img
                  src={twitter}
                  alt="twitter"
                  width={"20px"}
                  height={"20px"}
                />
              </button>
              <button className="h-11 w-11 rounded-lg bg-[#1A1A1A] p-3 hover:bg-red-500">
                <img src={Linkin} alt="in" width={"20px"} height={"20px"} />
              </button>
            </div>
          </div>
        </div>
        <span className="mt-10 block h-px w-full bg-slate-900"></span>
        <div className="mt-8 justify-between md:flex">
          <p className=" text-sm font-normal leading-normal text-slate-600 lg:text-lg ">
            @2023 streamvib, All Rights Reserved
          </p>
          <div className="mt-5 flex gap-8 md:m-0 ">
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Terms of Use
            </p>
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Privacy Policy
            </p>
            <p className="text-sm font-normal leading-normal text-slate-600 lg:text-lg">
              Cookie Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
