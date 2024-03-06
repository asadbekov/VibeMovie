import React from 'react'
import Carousel from './Carousel'
import axios from 'axios';
import { useEffect,useState } from 'react';
import { BASE_URL } from "../constants/constants";
import left from "../../public/icon/left.svg";
import right from "../../public/icon/right.svg";
import rBtn from "../../public/icon/Icon.svg";
import eye from "../../public/icon/Union.svg"
const Movie = () => {
  const [Movies, setMovies] = useState([]);
  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${BASE_URL}movie/now_playing`, {
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
    <div>
      <Carousel />
      <div className="movies container mx-auto  px-6  py-24">
        <div className="our_genres">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Our Genres
              </h1>
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
            <div className="mt-4 hidden justify-center gap-4 md:flex">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-red-500">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(4, 6).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(8, 10).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Horror
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular_top_10 mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
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
            <div className="mt-4 hidden justify-center gap-4 md:flex">
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Action
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Adventure
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Comedy
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(16, 18).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Drama
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending_now mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
              <div className="hidden items-center rounded-lg bg-black px-2 py-2 md:flex ">
                <button className="mr-2 rounded-lg bg-[#1A1A1A] p-3 hover:bg-orange-500">
                  <img src={left} alt="left" width={"25px"} height={"33px"} />
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
            <div className="hidden justify-center gap-4 md:flex">
              {Movies.slice(0, 5).map((movie) => (
                <div key={movie.id} className="rounded-lg bg-[#1A1A1A] p-4">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"220px"}
                  />
                  <div className="flex gap-2 rounded-b-lg bg-black px-2 py-1">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              {Movies.slice(0, 4).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A]">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex gap-2 bg-black px-2 py-1">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="new_releases mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                New Releases
              </h1>
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
            <div className="hidden justify-center gap-4 md:flex">
              {Movies.slice(5, 10).map((movie) => (
                <div key={movie.id} className="rounded-lg bg-[#1A1A1A] p-4">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"220px"}
                  />
                  <div className="flex gap-2 rounded-b-lg bg-black px-2 py-1">
                    <p className=" text-gray-600">{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              {Movies.slice(5, 9).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A]">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex gap-2 bg-black px-2 py-1">
                    <p className=" text-xs text-gray-600">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="movies container mx-auto  px-6 ">
        <div className="our_genres">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Our Genres
              </h1>
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
            <div className="mt-4 hidden justify-center gap-4 md:flex">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-red-500">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(4, 6).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Comedy
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(8, 10).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal  text-red-500">
                    Horror
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(0, 2).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"100px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"100px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(2, 4).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular_top_10 mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
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
            <div className="mt-4 hidden justify-center gap-4 md:flex">
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Action
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Adventure
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(6, 8).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1>
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Comedy
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] px-8 py-7">
                <div className="flex gap-3">
                  {Movies.slice(16, 18).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className=" flex justify-center rounded-lg bg-red-600 p-1 ">
                      <h1 className="text-sm font-normal text-white">
                        Top 10 In
                      </h1> 
                    </div>
                    <h1 className="text-sm font-semibold leading-normal text-white">
                      Drama
                    </h1>
                  </div>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(10, 12).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Action
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
              <div className="rounded-lg bg-[#1A1A1A] p-5">
                <div className="flex gap-3">
                  {Movies.slice(12, 14).map((movie) => (
                    <div key={movie.id}>
                      <img
                        className="rounded-t-lg"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                        alt=""
                        width={"120px"}
                      />
                      <img
                        className=" rounded-b-lg opacity-25"
                        src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
                        alt=""
                        width={"120px"}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-sm font-semibold leading-normal text-white">
                    Adventure
                  </h1>
                  <button>
                    <img src={rBtn} alt="" width={"20px"} height={"20px"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="trending_now mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                Popular Top 10 In Genres
              </h1>
              <div className="hidden items-center rounded-lg bg-black px-2 py-2 md:flex ">
                <button className="mr-2 rounded-lg bg-[#1A1A1A] p-3 hover:bg-orange-500">
                  <img src={left} alt="left" width={"25px"} height={"33px"} />
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
            <div className="hidden justify-center gap-4 md:flex">
              {Movies.slice(0, 5).map((movie) => (
                <div key={movie.id} className="rounded-lg bg-[#1A1A1A] p-4">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"220px"}
                  />
                  <div className="flex gap-2 rounded-b-lg bg-black px-2 py-1">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              {Movies.slice(0, 4).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A]">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex gap-2 bg-black px-2 py-1">
                    <img src={eye} alt="e" width={"16px"} height={"16px"} />
                    <h1 className=" text-gray-600">
                      {parseInt(movie.popularity)}
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="new_releases mt-12 ">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold leading-normal text-white md:text-3xl lg:text-4xl">
                New Releases
              </h1>
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
            <div className="hidden justify-center gap-4 md:flex">
              {Movies.slice(5, 10).map((movie) => (
                <div key={movie.id} className="rounded-lg bg-[#1A1A1A] p-4">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"220px"}
                  />
                  <div className="flex gap-2 rounded-b-lg bg-black px-2 py-1">
                    <p className=" text-gray-600">{movie.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-3 md:hidden">
              {Movies.slice(5, 9).map((movie) => (
                <div key={movie.id} className="bg-[#1A1A1A]">
                  <img
                    className="rounded-t-lg"
                    src={`https://media.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}`}
                    alt=""
                    width={"80px"}
                  />
                  <div className="flex gap-2 bg-black px-2 py-1">
                    <p className=" text-xs text-gray-600">
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie