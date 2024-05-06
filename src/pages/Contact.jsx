import { Telegram } from '@mui/icons-material';
import React from 'react'
import qr from "../../public/qr.png"
const Contact = () => {
  return (
    <div className="container mx-auto w-full max-w-7xl">
      <h1 className=" mb-7 text-3xl font-bold">Bog'lanish</h1>
      <div className="h-64 w-72 rounded-lg bg-slate-400 p-5">
        <div className=" rounded-lg p-2">
          <img
            className=" rounded-lg bg-white p-1"
            src={qr}
            alt=""
            width={80}
          />
        </div>
        <h1 className=" pb-5 pt-2 text-lg font-bold text-white">
          Telegramda sharh <br />
          qoldiring yoki savol bering
        </h1>
        <div className="flex ">
          <Telegram color="secondary" />
          <a className=" text-white" href="https://t.me/maxwaymasterfood_bot">
            @maxwaymasterfood_bot
          </a>
        </div>
      </div>
      <h1 className=" mt-5 text-xl font-bold mb-2">Yagona aloqa markazi</h1>
      <a href="tel:+998712005400">+998712005400</a>
    </div>
  );
}

export default Contact