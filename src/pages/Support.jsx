import React, { useState } from "react";
import Minus from "../../public/icon/Minus.svg";
import Plus from "../../public/icon/Plus.svg";

const Support = () => {
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

  return (
    <div>
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
    </div>
  );
}

export default Support