import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import imagecard from "../../public/images/imagecard.svg";
import minus from "../../public/icon/minus.svg";
import plus from "../../public/icon/plus.svg";
import love from "../../public/icon/love.svg";
import facebook from "../../public/icon/black/facebook.svg";
import message from "../../public/icon/black/message.svg";
import linkedin from "../../public/icon/black/linkedin.svg";
import twitter from "../../public/icon/black/twitter.svg";

const Shop = () => {
  const [product, setProduct] = useState(true);
 
  return (
    <div>
      <div className="container mx-auto flex w-full max-w-7xl">
        <div className="mt-10">
          <div className="mb-8 flex">
            <h1 className=" font-bold">Home</h1>
            <p>/Shop</p>
          </div>
          <div className="flex ">
            <div className=" flex space-x-20">
              <div className=" flex items-center space-x-10">
                <div>
                  <div className=" mb-2 rounded-lg bg-slate-50 p-3">
                    <img src={imagecard} alt="" width={120} />
                  </div>
                  <div className=" mb-2 rounded-lg bg-slate-50 p-3">
                    <img src={imagecard} alt="" width={120} />
                  </div>
                  <div className=" mb-2 rounded-lg bg-slate-50 p-3">
                    <img src={imagecard} alt="" width={120} />
                  </div>
                  <div className=" mb-2 rounded-lg bg-slate-50 p-3">
                    <img src={imagecard} alt="" width={120} />
                  </div>
                </div>
                <div className=" rounded-lg bg-slate-50 p-8 pb-24 pt-24">
                  <img src={imagecard} alt="" />
                </div>
              </div>
              <div className="">
                <h1 className=" mb-3 text-4xl font-bold">Barberton Daisy</h1>
                <div className="mb-3 flex justify-between border-b border-green-200">
                  <h1 className="text-xl font-bold text-green-600">$119.00</h1>
                  <p className="">19 Customer Review</p>
                </div>
                <h1 className="mb-3 font-bold">Short Description:</h1>
                <p className=" mb-6 leading-8 text-gray-600">
                  The ceramic cylinder planters come with a wooden stand to help
                  elevate your <br /> plants off the ground. The ceramic
                  cylinder planters come with a wooden <br />
                  stand to help elevate your plants off the ground.
                </p>
                <h1 className=" mb-5   font-bold">Size:</h1>
                <div className="mb-7 flex space-x-3">
                  <button class=" rounded-full  border px-4 py-2 font-bold text-gray-500 active:border-green-600 active:text-green-600">
                    S
                  </button>
                  <button class=" rounded-full  border px-3 py-2 font-bold text-gray-500 active:border-green-600 active:text-green-600">
                    M
                  </button>
                  <button class=" rounded-full  border px-4 py-2 font-bold text-gray-500 active:border-green-600 active:text-green-600">
                    l
                  </button>
                  <button class=" rounded-full  border px-2.5 py-2 font-bold text-gray-500 active:border-green-600 active:text-green-600">
                    XL
                  </button>
                </div>
                <div className=" flex space-x-6">
                  <div className="item-center mb-7 flex space-x-5">
                    <button class=" rounded-full border bg-green-600 px-4 py-4 font-bold text-white">
                      <img src={minus} alt="" width={20} />
                    </button>
                    <h1 className="items-center pt-2 text-3xl">1</h1>
                    <button class=" rounded-full  border bg-green-600 px-4 py-4 font-bold text-white">
                      <img src={plus} alt="" width={20} />
                    </button>
                  </div>
                  <div className=" items-center space-x-5">
                    <button className="rounded-lg border p-3 pl-3 pr-3 font-bold text-green-600 hover:bg-green-600 hover:text-white ">
                      BUY NOW
                    </button>
                    <button className="rounded-lg border p-3 pl-4 pr-4 font-bold text-green-600 hover:bg-green-600 hover:text-white ">
                      ADD TO CARD
                    </button>
                    <button className=" rounded-lg border border-green-600 p-3 hover:bg-green-200 ">
                      <img src={love} alt="" width={25} />
                    </button>
                  </div>
                </div>

                <p className=" mb-3 text-gray-600">
                  <span className=" text-gray-400">SKU:</span> 1995751877966
                </p>
                <p className=" mb-3 text-gray-600">
                  <span className=" text-gray-400">Categories:</span> Potter
                  Plants
                </p>
                <p className=" mb-5 text-gray-600">
                  <span className=" text-gray-400">Tags:</span> Home, Garden,
                  Plants
                </p>
                <div className="flex space-x-3">
                  <h1 className=" font-bold">Share this products:</h1>
                  <div className="flex space-x-3">
                    <img src={facebook} alt="" />
                    <img src={message} alt="" />
                    <img src={linkedin} alt="" />
                    <img src={twitter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5 flex space-x-9 border-b-2">
            <button
              onClick={() => setProduct(true)}
              className={`${
                product
                  ? " border-b-2 border-green-600 pb-5 font-bold text-green-600"
                  : " pb-5 "
              } `}
            >
              Product Description
            </button>
            <button
              onClick={() => setProduct(false)}
              className={`${
                !product
                  ? "border-b-2 border-green-600 pb-5 font-bold text-green-600 "
                  : "pb-5"
              } `}
            >
              Reviews (19)
            </button>
          </div>
        </div>
      </div>
      {product && (
        <div className="container mx-auto w-full max-w-7xl">
          <p className=" mb-5 text-gray-500">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla augue nec est tristique auctor. Donec non est at libero
            vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
            Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
          </p>
          <p className=" mb-5 text-gray-500">
            Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
            sem, quis fermentum turpis eros eget velit. Donec ac tempus ante.
            Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis
            vulputate, sapien libero hendrerit est, sed commodo augue nisi non
            neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tempor, lorem et placerat vestibulum, metus nisi posuere nisl, in
            accumsan elit odio quis mi. Cras neque metus, consequat et blandit
            et, luctus a nunc. Etiam gravida vehicula tellus, in imperdiet
            ligula euismod eget. The ceramic cylinder planters come with a
            wooden stand to help elevate your plants off the ground.
          </p>
          <h1 className=" font-bold">Living Room:</h1>
          <p className=" mb-5 text-gray-500">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <h1 className=" font-bold">Dining Room:</h1>
          <p className=" mb-5 text-gray-500">
            The benefits of houseplants are endless. In addition to cleaning the
            air of harmful toxins, they can help to improve your mood, reduce
            stress and provide you with better sleep. Fill every room of your
            home with houseplants and their restorative qualities will improve
            your life.
          </p>
          <h1 className=" font-bold">Office:</h1>
          <p className=" mb-20 text-gray-500">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className=" border-b border-green-600">
            <h1 className=" mb-2 font-bold text-green-600">Releted Products</h1>
          </div>
          <div className="mt-10 flex justify-between">
            <div>
              <div className=" mb-3 bg-slate-50 p-5">
                <img src={imagecard} alt="" width={200} />
              </div>
              <div>
                <p className="">Beach Spider Lily</p>
                <h1 className=" font-bold text-green-600">$129.00</h1>
              </div>
            </div>
            <div>
              <div className=" mb-3 bg-slate-50 p-5">
                <img src={imagecard} alt="" width={180} />
              </div>
              <div>
                <p className="">Beach Spider Lily</p>
                <h1 className=" font-bold text-green-600">$129.00</h1>
              </div>
            </div>
            <div>
              <div className=" mb-3 bg-slate-50 p-5">
                <img src={imagecard} alt="" width={180} />
              </div>
              <div>
                <p className="">Beach Spider Lily</p>
                <h1 className=" font-bold text-green-600">$129.00</h1>
              </div>
            </div>
            <div>
              <div className=" mb-3 bg-slate-50 p-5">
                <img src={imagecard} alt="" width={180} />
              </div>
              <div>
                <p className="">Beach Spider Lily</p>
                <h1 className=" font-bold text-green-600">$129.00</h1>
              </div>
            </div>
            <div>
              <div className=" mb-3 bg-slate-50 p-5">
                <img src={imagecard} alt="" width={180} />
              </div>
              <div>
                <p className="">Beach Spider Lily</p>
                <h1 className=" font-bold text-green-600">$129.00</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
