import React, { useState } from "react";

const Subscription = () => {
  const [price, setPrice] = useState("$9.99");
  const [price2, setPrice2] = useState("$12.99");
  const [price3, setPrice3] = useState("$14.99");
  const [date, setDate] = useState("/month");
    const [active, setActive] = useState(false);
  return (
    <div className="container  mx-auto  p-6 pt-20 md:pt-24 ">
      <div>
        <div className="mb-10 items-center justify-between md:flex">
          <div>
            <h1 className="text-2xl font-bold leading-normal text-white md:text-[28px]">
              Frequently Asked Questions
            </h1>
            <p className=" text-base font-normal leading-normal text-slate-500 ">
              Got questions? We've got answers! Check out our FAQ section to
              find answers to the most common questions about StreamVibe.
            </p>
          </div>
          <div className="mt-5 flex w-48 items-center justify-between rounded-lg bg-black p-2">
            <button
              className={`${
                active ? "" : "bg-[#1F1F1F]"
              } rounded-lg px-5 py-3 text-sm text-white hover:bg-[#1F1F1F]`}
              onClick={() => {
                setPrice("$9.99");
                setPrice2("$12.99");
                setPrice3("$14.99");
                setDate("/month");
                setActive(!active);
              }}
            >
              Monthly
            </button>
            <button
              className={`${
                active ? "bg-[#1F1F1F]" : ""
              } rounded-lg px-5 py-3 text-sm text-white hover:bg-[#1F1F1F]`}
              onClick={() => {
                setPrice("$119.8");
                setPrice2("$144.0");
                setPrice3("$168.2");
                setDate("/year");
                setActive(!active);
              }}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-1 md:flex-row lg:gap-5 pr-10 pl-10  ">
          <div className="rounded-lg bg-[#1A1A1A] p-6">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Basic Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Enjoy an extensive library of movies and shows, featuring a range
              of content, including recently released titles.
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className="rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-[#1A1A1A] p-6 pr-10 pl-10 ">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Standard Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Access to a wider selection of movies and shows, including most
              new releases and exclusive content
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price2}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className="rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-[#1A1A1A] p-6">
            <h1 className="mb-2 text-lg font-medium leading-normal text-white">
              Premium Plan
            </h1>
            <p className="mb-7 text-sm font-normal leading-normal text-slate-600">
              Access to a widest selection of movies and shows, including all
              new releases and Offline Viewing
            </p>
            <div className="mb-7 flex items-end gap-1">
              <h1 className="text-2xl font-semibold text-white md:text-3xl lg:text-[40px]">
                {price3}
              </h1>
              <span className=" text-sm font-medium text-slate-600 md:text-base lg:text-lg">
                {date}
              </span>
            </div>
            <div className="flex gap-3">
              <button className="rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className="rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <h1 className="text-2xl font-bold leading-normal text-white md:text-[28px]">
          We Provide you streaming experience across various devices.
        </h1>
        <p className=" text-base font-normal leading-normal text-slate-500 lg:pr-80">
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="mt-4 rounded-lg bg-black p-4 md:hidden">
        <button className=" w-1/3 rounded-lg px-5 py-3 text-sm font-medium leading-normal text-gray-600 hover:bg-[#1F1F1F]">
          Basic
        </button>
        <button className=" w-1/3 rounded-lg bg-[#1F1F1F] px-5 py-3 text-sm font-medium leading-normal text-white">
          Standart
        </button>
        <button className=" w-1/3 rounded-lg px-5 py-3 text-sm font-medium leading-normal text-gray-600 hover:bg-[#1F1F1F]">
          Premium
        </button>
      </div>
      <div className="mt-4 flex flex-col gap-3 rounded-lg bg-black px-10 py-4 md:hidden">
        <div className="flex">
          <div className="flex w-2/4 flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Price
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              $12.99/Month
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Free Trail
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              $12.99/Month
            </h1>
          </div>
        </div>
        <div>
          <p className=" text-sm font-medium leading-normal text-gray-600">
            Content
          </p>
          <h1 className="text-sm font-medium leading-normal text-white">
            Access to a wider selection of movies and shows, including most new
            releases and exclusive content
          </h1>
        </div>
        <div>
          <p className=" text-sm font-medium leading-normal text-gray-600">
            Devices
          </p>
          <h1 className="text-sm font-medium leading-normal text-white">
            Watch on Two device simultaneously
          </h1>
        </div>
        <div className="flex ">
          <div className="flex w-2/4 flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Cancel Anytime
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              Yes
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              HDR
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              Yes
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="flex w-2/4 flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Dolby Atmos
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              Yes
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Ad - Free
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              Yes
            </h1>
          </div>
        </div>
        <div className="flex ">
          <div className="flex w-2/4 flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Offline Viewing
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              Yes, for select titles.
            </h1>
          </div>
          <div className="flex flex-col gap-1">
            <p className=" text-sm font-medium leading-normal text-gray-600">
              Family Sharing
            </p>
            <h1 className="text-sm font-medium leading-normal text-white">
              5 family members.
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-4 hidden rounded-lg border border-slate-600 pl-10 pr-10 md:flex md:flex-col">
        <div className="flex rounded-lg bg-black">
          <div className="w-1/4 border-r border-slate-600 p-4">
            <h1 className="text-xl font-semibold leading-normal text-white">
              Features
            </h1>
          </div>
          <div className="w-1/4 border-r border-slate-600 p-4">
            <h1 className="text-xl font-semibold leading-normal text-white">
              Basic
            </h1>
          </div>
          <div className="w-1/4 border-r border-slate-600 p-4">
            <h1 className="text-xl font-semibold leading-normal text-white">
              Standart
            </h1>
          </div>
          <div className=" w-1/4 p-4">
            <h1 className="text-xl font-semibold leading-normal text-white">
              Premium
            </h1>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="w-1/4 border-r border-t border-slate-600 p-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Price
              </h1>
            </div>
            <div className="w-1/4 border-r border-t border-slate-600 p-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                $9.99/Month
              </h1>
            </div>
            <div className="w-1/4 border-r border-t border-slate-600 p-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                $12.99/Month
              </h1>
            </div>
            <div className="w-1/4  border-t border-slate-600 p-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                $14.99/Month
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Content
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-10 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Access to a wide selection of movies and shows, including some
                new releases.
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Access to a wider selection of movies and shows, including most
                new releases and exclusive content
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-20 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Access to a widest selection of movies and shows, including all
                new releases and Offline Viewing
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Devices
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Watch on one device simultaneously
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-20 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Watch on Two device simultaneously
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Watch on Four device simultaneously
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4  pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Free Trail
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 pb-10 pt-10 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                7 Days
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                7 Days
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4  pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                7 Days
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Cancel Anytime
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Dolby Atmos
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
          </div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                HDR
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Ad - Free
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                No
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 pb-10 pt-10">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Offline Viewing
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                No
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes, for select titles.
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes, for all titles.
              </h1>
            </div>
          </div>
        </div>
        <div>
          <div className="flex">
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Family Sharing
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t  border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                No
              </h1>
            </div>
            <div className="flex w-1/4 items-center border-r border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes, up to 5 family members.
              </h1>
            </div>
            <div className="flex  w-1/4 items-center border-t border-slate-600 p-4 ">
              <h1 className=" text-lg font-medium leading-normal text-gray-500">
                Yes, up to 6 family members.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
