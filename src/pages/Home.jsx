import React, { useEffect, useState } from "react";
import axios from "axios";
import smart from "../../public/icon/phone.svg";
import Minus from "../../public/icon/Minus.svg";
import gaming from "../../public/icon/gaming.svg";
import play from "../../public/icon/start.svg";
import laptop from "../../public/icon/laptop.svg";
import left from "../../public/icon/left.svg";
import right from "../../public/icon/right.svg";
import tablet from "../../public/icon/tablet.svg";
import Plus from "../../public/icon/Plus.svg";
import vr from "../../public/icon/vr.svg";
import tv from "../../public/icon/tv.svg";
import { BASE_URL } from "../constants/constants";

const Home = () => {
  const [hints, setHints] = useState("hidden");
  const [hint, setHint] = useState("");
  const [Pluss2, setPluss2] = useState("hidden");
  const [Plus2, setPlus2] = useState("");
  const [Pluss3, setPluss3] = useState("hidden");
  const [Plus3, setPlus3] = useState("");
  const [Pluss4, setPluss4] = useState("hidden");
  const [Plus4, setPlus4] = useState("");
  const [Pluss5, setPluss5] = useState("hidden");
  const [Plus5, setPlus5] = useState("");
  const [Pluss6, setPluss6] = useState("hidden");
  const [Plus6, setPlus6] = useState("");

  const [price, setPrice] = useState("$9.99");
  const [price2, setPrice2] = useState("$12.99");
  const [price3, setPrice3] = useState("$14.99");
  const [date, setDate] = useState("/month");

  const [Movies, setMovies] = useState([]);
  const [active,setActive] = useState(false)

   const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/popular`, {
        params: {
          api_key: "4b7feb4a7688c3c46324165839ad0ffd",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <div className="Home bg-center ">
      <div
        className="Header h-[500px]  w-full bg-opacity-50 bg-cover bg-center bg-no-repeat p-6"
        style={{ backgroundImage: "url('/public/images/sub.png')" }}
      >
        <div className="container  mx-auto">
          <div className="mt-[500px] flex items-center justify-center bg-black  md:mt-[500px]">
            <div className="absolute top-[500px] flex flex-col items-center gap-5 md:top-[550px] lg:top-[580px]">
              <h1 className="font-Manrope text-center text-3xl font-bold leading-normal tracking-normal text-white md:text-4xl lg:text-6xl">
                The Best Streaming Experience
              </h1>
              <p className=" w-96 text-center text-sm font-normal leading-normal text-gray-500 md:hidden">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere.
              </p>
              <p className="hidden w-[73%] text-center text-lg font-normal leading-normal text-gray-500 md:flex lg:w-2/3">
                StreamVibe is the best streaming experience for watching your
                favorite movies and shows on demand, anytime, anywhere. With
                StreamVibe, you can enjoy a wide variety of content, including
                find the content you want to watch.
              </p>
              <button className="flex items-center gap-2 rounded-lg bg-red-500 px-6 py-[14px] text-sm font-semibold text-white hover:bg-red-400 md:text-lg">
                <img src={play} alt="play" width={"15px"} height={"16px"} />
                Start Watching Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto  mt-60  p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className=" pl-20 text-2xl font-bold leading-normal text-white md:text-[28px]">
              The Most Viewed On Our Page
            </h1>
            <p className=" pl-20 text-base font-normal leading-normal text-slate-500">
              Whether you're looking for a comedy to make you laugh, a drama to
              make you think, or a documentary to learn something new
            </p>
          </div>
          <div className="hidden items-center rounded-lg bg-black px-2 py-2 md:flex ">
            <button className="mr-2 rounded-lg bg-[#1A1A1A] p-3 hover:bg-orange-500">
              <img src={left} alt="left" width={"17px"} height={"15px"} />
            </button>
            <span className=" h-1 w-6 rounded-[100px] bg-red-500"></span>
            <span className=" ml-1 h-1 w-6 rounded-[100px] bg-slate-900"></span>
            <span className=" ml-1 h-1 w-6 rounded-[100px] bg-slate-900"></span>
            <span className=" ml-1 h-1 w-6 rounded-[100px] bg-slate-900"></span>
            <button className="ml-2 rounded-lg bg-[#1A1A1A] p-3 hover:bg-orange-500">
              <img src={right} alt="right" width={"17px"} height={"15px"} />
            </button>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-7">
            {Movies.slice(0, 2).map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1A1A1A] p-3"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt="img"
                  width={"200px"}
                  className="rounded"
                />
                <h1 className="text-white">{movie.title}</h1>
              </div>
            ))}
          </div>
          <div className="hidden items-center justify-center gap-7 md:flex">
            {Movies.slice(2, 5).map((movie) => (
              <div
                key={movie.id}
                className="flex flex-col items-center gap-2 rounded-lg bg-[#1A1A1A] p-3"
              >
                <img
                  src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                  alt="img"
                  width={"200px"}
                  className="rounded"
                />
                <h1 className="text-white">{movie.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" container mx-auto mt-20 pl-20 pr-20 ">
        <div>
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
        <div className="mt-14 flex grid-cols-3 flex-col gap-5 md:grid">
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={smart} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-lg font-semibold leading-normal text-white md:text-xl lg:text-2xl">
                Smartphones
              </h1>
            </div>
            <p className=" text-sm font-normal leading-normal text-slate-600 md:text-base lg:text-lg">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={tablet} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-lg font-semibold leading-normal text-white md:text-xl lg:text-2xl">
                Tablet
              </h1>
            </div>
            <p className=" text-sm font-normal leading-normal text-slate-600 md:text-base lg:text-lg">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={tv} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-lg font-semibold leading-normal text-white md:text-xl lg:text-2xl">
                Smart TV
              </h1>
            </div>
            <p className=" text-sm font-normal leading-normal text-slate-600 md:text-base lg:text-lg">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={laptop} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-lg font-semibold leading-normal text-white md:text-xl lg:text-2xl">
                Laptops
              </h1>
            </div>
            <p className=" text-sm font-normal leading-normal text-slate-600 md:text-base lg:text-lg">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={gaming} alt="smart" width={"24px"} height={"24px"} />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 rounded-lg border border-gray-500 bg-black p-6 md:p-10 lg:p-12">
            <div className="mb-3 flex items-center gap-4">
              <div className="flex justify-center rounded-lg bg-[#141414] px-5 py-[14px]">
                <img src={vr} alt="smart" width={"24px"} height={"24px"} />
              </div>
              <h1 className="text-lg font-semibold leading-normal text-white md:text-xl lg:text-2xl">
                VR Headsets
              </h1>
            </div>
            <p className=" text-sm font-normal leading-normal text-slate-600 md:text-base lg:text-lg">
              StreamVibe is optimized for both Android and iOS smartphones.
              Download our app from the Google Play Store or the Apple App Store
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-20 p-6  pl-20  pr-20">
        <div className="items-center justify-between md:flex ">
          <div>
            <h1 className="text-2xl font-bold leading-normal text-white md:text-[28px]">
              Frequently Asked hints
            </h1>
            <p className=" text-base font-normal leading-normal text-slate-500 ">
              Got hints? We've got answers! Check out our FAQ section to find
              answers to the most common hints about StreamVibe.
            </p>
          </div>
          <button className="mt-4 rounded-lg bg-[#E60000] px-5 py-[14px] text-white hover:bg-red-400">
            Ask a hint
          </button>
        </div>
        <div className="mt-20  flex grid-cols-2 flex-col gap-7 md:grid">
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    01
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  What is StreamVibe?
                </h1>
              </div>
              <button
                className={`${hints}`}
                onClick={() => {
                  setHints("hidden");
                  setHint("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${hint}`}
                onClick={() => {
                  setHint("hidden");
                  setHints("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={`mt-2 text-sm font-normal leading-normal text-slate-600 ${hints}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    02
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  How much does StreamVibe cost?
                </h1>
              </div>
              <button
                className={`${Pluss2}`}
                onClick={() => {
                  setPluss2("hidden");
                  setPlus2("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${Plus2}`}
                onClick={() => {
                  setPlus2("hidden");
                  setPluss2("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${Pluss2}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    03
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  What content is available on StreamVibe?
                </h1>
              </div>
              <button
                className={`${Pluss3}`}
                onClick={() => {
                  setPluss3("hidden");
                  setPlus3("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${Plus3}`}
                onClick={() => {
                  setPlus3("hidden");
                  setPluss3("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${Pluss3}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    04
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  How can I watch StreamVibe?
                </h1>
              </div>
              <button
                className={`${Pluss4}`}
                onClick={() => {
                  setPluss4("hidden");
                  setPlus4("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${Plus4}`}
                onClick={() => {
                  setPlus4("hidden");
                  setPluss4("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${Pluss4}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    05
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  How do I sign up for StreamVibe?
                </h1>
              </div>
              <button
                className={`${Pluss5}`}
                onClick={() => {
                  setPluss5("hidden");
                  setPlus5("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${Plus5}`}
                onClick={() => {
                  setPlus5("hidden");
                  setPluss5("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${Pluss5}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg  bg-[#262626] p-3">
                  <h1 className="text-base font-semibold leading-6 text-white">
                    06
                  </h1>
                </div>
                <h1 className="text-lg font-medium leading-normal text-white">
                  What is the StreamVibe free trial?
                </h1>
              </div>
              <button
                className={`${Pluss6}`}
                onClick={() => {
                  setPluss6("hidden");
                  setPlus6("");
                }}
              >
                <img src={Minus} alt="btn" />
              </button>
              <button
                className={`${Plus6}`}
                onClick={() => {
                  setPlus6("hidden");
                  setPluss6("");
                }}
              >
                <img src={Plus} alt="btn" />
              </button>
            </div>
            <p
              className={` mt-2 text-sm font-normal leading-normal text-slate-600 ${Pluss6}`}
            >
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
            <span className="mt-7 block h-px w-full bg-red-700"></span>
          </div>
        </div>
      </div>
      <div className=" container mx-auto  p-6  pl-20  pr-20 ">
        <div className="mb-10 items-center justify-between md:flex">
          <div>
            <h1 className="text-2xl font-bold leading-normal text-white md:text-[28px]">
              Frequently Asked hints
            </h1>
            <p className=" text-base font-normal leading-normal text-slate-500 ">
              Got hints? We've got answers! Check out our FAQ section to find
              answers to the most common hints about StreamVibe.
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
        <div className=" flex flex-col gap-1 md:flex-row lg:gap-5">
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
              <button className=" active: rounded-lg bg-[#141414] px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Start Free Trial
              </button>
              <button className=" active: rounded-lg bg-red-600 px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg">
                Choose Plan
              </button>
            </div>
          </div>
          <div className="rounded-lg bg-[#1A1A1A] p-6">
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
              <button
                className={`choose_plan rounded-lg  px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-600 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg`}
              >
                Start Free Trial
              </button>
              <button
                className={`bg-red-600 rounded-lg  px-5 py-[14px] text-sm font-semibold leading-normal text-white hover:bg-red-400 md:px-6 md:py-[16px] md:text-base lg:px-6 lg:py-[18px] lg:text-lg`}
              >
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
