import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/constants";
import img from "../../public/images/img.svg";
import RangeSlider from "../components/Range";
import banner from "../../public/images/banner.jpg";
import arrow from "../../public/icon/arrow.svg"
import img01 from "../../public/images/01.svg"
import iconright from "../../public/icon/iconright.svg"
import Basic from "../components/Basic";

const Home = () => {

  const [page, setPage] = useState(true);
 
  return (
    <div className=" container mx-auto w-full max-w-7xl items-center">
      <div className="container mx-auto flex  justify-between  bg-green-200 px-16 md:h-[450px] md:rounded-none md:bg-white md:px-10">
        <div className=" container mx-auto  w-full max-w-6xl pt-20">
          <h1 className=" text-black md:text-sm font-sans text-[11px]">
            WELCOME TO GREENSHOP
          </h1>
          <h1 className="mb-3 md:text-7xl text- font-bold leading-tight text-gray-800  ">
            LET’S MAKE A <br />
            BETTER
            <span className="text-7xl font-bold text-green-600"> PLANET</span>
          </h1>
          <p className=" mb-9  font-sans text-base text-gray-600">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use <br />
            our plants to create an unique Urban Jungle. Order your favorite
            plants!
          </p>
          <button className="rounded-lg bg-green-600 p-2 pl-6 pr-6 text-base font-medium text-white">
            SHOP NOW
          </button>
        </div>
        <div className="mb-10 mt-10">
          <img src={img} alt="img" width={650} />
        </div>
      </div>
      <div className=" container mx-auto mt-10 flex w-full max-w-7xl justify-between">
        <div>
          <div className="bg-slate-50  px-3">
            <h1 className=" pt-3 text-lg font-bold">Categories</h1>
            <div className="flex justify-between gap-20 px-4 leading-10">
              <p>
                <span className="font-bold text-green-600">House Plants</span>
                <br />
                Potter Plants <br /> Seeds <br />
                Small Plants <br /> Big Plants
                <br />
                Succulents <br /> Trerrariums <br />
                Gardening <br /> Accessories
              </p>
              <p>
                <span className="font-bold text-green-600">(33)</span> <br />
                (12) <br /> (65) <br /> (39) <br /> (23) <br /> (17) <br /> (19)
                <br /> (13) <br /> (18)
              </p>
            </div>
            <h1 className=" pt-3 text-lg font-bold">Price Range</h1>
            <div className="px-4">
              <RangeSlider />
              <p className="mb-4">
                Price
                <span className="font-bold text-green-600">$39-$1230</span>
              </p>
              <button className="mb-12 rounded-lg bg-green-600 p-2 pl-6 pr-6 font-sans text-base text-white">
                Filter
              </button>
            </div>
            <div>
              <h1 className=" pt-3 text-lg font-bold">Categories</h1>
              <div className="flex justify-between px-4 pb-5 leading-10">
                <p>
                  Small <br />
                  Medium <br />
                  Large
                </p>
                <p>
                  (119) <br /> (86) <br /> (78)
                </p>
              </div>
            </div>
          </div>
          <img src={banner} alt="img" width={350} />
        </div>
        <div className="container ">
          <div className="flex justify-between">
            <div className="flex space-x-8 pl-16">
              <button
                onClick={() => setPage(true)}
                className={`${
                  page
                    ? " border-b-2 border-green-600 pb-5 font-bold text-green-600"
                    : " pb-5 "
                } `}
              >
                All Plants
              </button>
              <button
                onClick={() => setPage(false)}
                className={`${
                  !page
                    ? "border-b-2 border-green-600 pb-5 font-bold text-green-600 "
                    : "pb-5"
                } `}
              >
                New Arrivals
              </button>
            </div>
            <div className="flex items-center">
              <p>Short by:</p>
              <select>
                <option value="1">Default sorting</option>
                <option value="2">Ikki</option>
                <option value="3">Uch</option>
              </select>
            </div>
          </div>
          {page && (
            <div>
              <div className=" flex-grow-3 flex space-x-8 pl-16 pt-7">
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div></div>
              </div>
              <div className=" flex-grow-3 flex space-x-8 pl-16 pt-7">
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div></div>
              </div>
              <div className=" flex-grow-3 mt-10 flex space-x-8 pl-16 pt-7">
                <div className="">
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
                <div>
                  <div className=" mb-4 bg-slate-50 p-6">
                    <img src={img} alt="img" width={400} />
                  </div>
                  <p>Barberton Daisy</p>
                  <h1 className="text-lg font-bold text-green-600">$119.00</h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-20 flex justify-end space-x-3">
        <div className="cursor-pointer rounded-md border border-gray-300 bg-green-600 p-1 text-white hover:bg-white hover:text-black">
          <p className="pl-2 pr-2 text-base ">1</p>
        </div>
        <div className="cursor-pointer rounded-md border border-gray-300 p-1 hover:bg-green-600 hover:text-white">
          <p className="pl-2 pr-2 text-base ">2</p>
        </div>
        <div className="cursor-pointer rounded-md border border-gray-300 p-1 hover:bg-green-600 hover:text-white">
          <p className="pl-2 pr-2 text-base ">3</p>
        </div>
        <div className="cursor-pointer rounded-md border border-gray-300 p-1 hover:bg-green-600 hover:text-white">
          <p className="pl-2 pr-2 text-base ">4</p>
        </div>
        <div className="cursor-pointer items-center rounded-md border  border-gray-300 p-1 hover:bg-green-600 hover:text-white">
          <img className="pl-1 pr-1 pt-1" src={arrow} alt="" />
        </div>
      </div>
      <div className="mt-32 flex space-x-10 ">
        <div className="flex space-x-5 rounded-sm bg-slate-50 p-5">
          <img src={img} alt="" />
          <div className="pr-5">
            <h1 className=" mb-3 pt-5 text-end text-lg font-bold">
              SUMMER CACTUS <br /> & SUCCULENTS
            </h1>
            <p className=" mb-5 text-end leading-8 text-gray-600">
              We are online plant shop offering a wide <br /> range of cheap and
              trendy plants
            </p>
            <button className="ml-40 rounded-lg bg-green-600 p-2 pl-6 pr-6 text-base font-medium text-white">
              Find More
            </button>
          </div>
        </div>
        <div className=" flex space-x-6 rounded-sm bg-slate-50 p-5">
          <img src={img} alt="" />
          <div className="pr-5">
            <h1 className=" mb-3 pt-5 text-end text-lg font-bold">
              SUMMER CACTUS <br /> & SUCCULENTS
            </h1>
            <p className=" mb-5 text-end leading-8 text-gray-600">
              We are online plant shop offering a wide <br /> range of cheap and
              trendy plants
            </p>
            <button className="ml-40 rounded-lg bg-green-600 p-2 pl-6 pr-6 text-base font-medium text-white">
              Find More
            </button>
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-32 w-full max-w-7xl items-center">
        <h1 class="mb-3 text-center text-4xl font-bold">Our Blog Post</h1>
        <p class="mx-auto mb-5 text-center text-gray-600">
          We are an online plant shop offering a wide range of cheap and trendy
          plants.
        </p>
        <div className="flex justify-between">
          <div className=" border bg-slate-50">
            <img src={img01} alt="" />
            <div className="p-3">
              <p className=" mb-2 text-green-600 ">
                September 12 I Read in 6 minutes
              </p>
              <h1 className=" mb-1 text-xl font-bold">
                Cactus & Succulent <br />
                Care Tips
              </h1>
              <p className=" mb-3 text-gray-600">
                Cacti are succulents are easy care <br /> plants for any home or
                patio.
              </p>
              <button className="flex items-center font-medium hover:text-green-600">
                Read More
                <span className="pl-1">
                  <img src={iconright} alt="" width={15} />
                </span>
              </button>
            </div>
          </div>
          <div className=" border bg-slate-50">
            <img src={img01} alt="" />
            <div className="p-3">
              <p className=" mb-2 text-green-600 ">
                September 12 I Read in 6 minutes
              </p>
              <h1 className=" mb-1 text-xl font-bold">
                Cactus & Succulent <br />
                Care Tips
              </h1>
              <p className=" mb-3 text-gray-600">
                Cacti are succulents are easy care <br /> plants for any home or
                patio.
              </p>
              <button className="flex items-center font-medium hover:text-green-600">
                Read More
                <span className="pl-1">
                  <img src={iconright} alt="" width={15} />
                </span>
              </button>
            </div>
          </div>
          <div className=" border bg-slate-50">
            <img src={img01} alt="" />
            <div className="p-3">
              <p className=" mb-2 text-green-600 ">
                September 12 I Read in 6 minutes
              </p>
              <h1 className=" mb-1 text-xl font-bold">
                Cactus & Succulent <br />
                Care Tips
              </h1>
              <p className=" mb-3 text-gray-600">
                Cacti are succulents are easy care <br /> plants for any home or
                patio.
              </p>
              <button className="flex items-center font-medium hover:text-green-600">
                Read More
                <span className="pl-1">
                  <img src={iconright} alt="" width={15} />
                </span>
              </button>
            </div>
          </div>
          <div className=" border bg-slate-50">
            <img src={img01} alt="" />
            <div className="p-3">
              <p className=" mb-2 text-green-600 ">
                September 12 I Read in 6 minutes
              </p>
              <h1 className=" mb-1 text-xl font-bold">
                Cactus & Succulent <br />
                Care Tips
              </h1>
              <p className=" mb-3 text-gray-600">
                Cacti are succulents are easy care <br /> plants for any home or
                patio.
              </p>
              <button className="flex items-center font-medium hover:text-green-600">
                Read More
                <span className="pl-1">
                  <img src={iconright} alt="" width={15} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
