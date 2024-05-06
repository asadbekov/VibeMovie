import React, { useEffect, useState } from "react";
import container1 from "../../public/container1.svg"
const Home = () => {

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://6630f50fc92f351c03dbb627.mockapi.io/products",
          {
            method: "GET",
            headers: { "content-type": "application/json" },
          },
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" container mx-auto w-full max-w-7xl ">
      <img src={container1} alt="" width={1400} />
      {data.slice(1, 2).map((product) => (
        <div className="container mx-auto w-full max-w-7xl">
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">
              🎉 Aksiya German Donar + Cola 0,4 L
            </h1>
            <div className=" flex flex-wrap justify-between">
              <div className="w-72 rounded-2xl shadow-lg">
                <img
                  className=" rounded-t-2xl"
                  src={product.image}
                  width={300}
                  height={200}
                  alt=""
                />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍟🍔🥤Maxi BOX</h1>
            <div className=" flex flex-wrap justify-between">
              <div className="w-72 rounded-2xl shadow-lg">
                <img
                  className=" rounded-t-2xl"
                  src={product.image}
                  width={300}
                  height={200}
                  alt=""
                />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-10 pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">{product.descrption}</p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">{product.descrption}</p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🥪Klab-Sendvich</h1>
            <div className=" flex space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🌯Lavash</h1>
            <div className=" flex space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🌮Shaurma</h1>
            <div className=" flex space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🫔Panini</h1>
            <div className=" flex flex-wrap justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍔Burger</h1>
            <div className=" flex  space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍱Donar Kebab</h1>
            <div className=" flex  space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🌭Hot-Dog</h1>
            <div className=" flex flex-wrap justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍟Gazaklar</h1>
            <div className=" flex flex-wrap justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-10 pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍚Tamaddilar</h1>
            <div className=" flex  space-x-10">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🍰Desertlar</h1>
            <div className=" flex flex-wrap justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex space-x-10 pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🥤Ichimliklar</h1>
            <div className=" flex  md:flex md:flex-wrap md:justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-11 pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex  space-x-11 pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" flex flex-wrap justify-between pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">
                      Original sendvich, kartoshka fri, 0,4 l <br /> coca cola,
                      tanl...
                    </p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-14">
            <h1 className=" mb-5 text-3xl font-bold">🥫Souslar</h1>
            <div className=" flex flex-wrap justify-between">
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-72 rounded-2xl shadow-lg">
                <img className=" rounded-t-2xl" src={product.image} alt="" />
                <div className="p-4">
                  <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                  <p className="pb-2">{product.descrption}</p>
                  <div className="flex items-center justify-between pb-2">
                    <h1 className="text-lg font-bold">
                      {product.price}{" "}
                      <span className=" text-base font-normal">so'm</span>
                    </h1>
                    <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                      <h1 className="pl-3 pr-3">Qo'shish</h1>
                    </button>
                  </div>
                </div>
              </div>
              <div className=" flex flex-wrap justify-between pt-5">
                <div className=" w-72 rounded-2xl shadow-lg">
                  <img className=" rounded-t-2xl" src={product.image} alt="" />
                  <div className="p-4">
                    <h1 className=" pb-1 text-lg font-bold">{product.name}</h1>
                    <p className="pb-2">{product.descrption}</p>
                    <div className="flex items-center justify-between pb-2">
                      <h1 className="text-lg font-bold">
                        {product.price}{" "}
                        <span className=" text-base font-normal">so'm</span>
                      </h1>
                      <button className=" rounded-3xl bg-purple-800 p-2 font-bold text-white">
                        <h1 className="pl-3 pr-3">Qo'shish</h1>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
