"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        loop={true}
        slidesPerView={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className=" rounded-3xl ">
            <div
              className=" rounded-3xl   "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" p-8 py-16  text-start space-y-10 lg:h-[25rem] flex flex-col justify-between w-[70%]">
                <h2 className="text-3xl font-semibold text-[#242F65]">
                  Tokenisation of Real Estate
                </h2>

                <p className="text-[#525665] text-[1.1rem]  font-medium">
                  Omaira offers tokenisation of global Real Estate Assests on
                  its highly secure and scalable protocols, which is fully
                  regulated with the concerned jurisdiction.
                </p>

                <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-3xl ">
            <div
              className="rounded-3xl "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" p-8 py-16 text-start space-y-10 lg:h-[25rem] flex flex-col justify-between w-[70%]">
                <h2 className="text-3xl font-semibold text-[#242F65]">
                  Tokenisation of Mines
                </h2>

                <p className="text-[#525665] text-[1.1rem]  font-medium ">
                  We provide highly scalable solutions for tokenisation or metal
                  and mineral mines, unlocking liquidity using our cutting edge
                  Blockchain protocol
                </p>

                <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-3xl ">
            <div
              className=" rounded-3xl "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" p-8 py-16  text-start space-y-10 lg:h-[25rem] flex flex-col justify-between w-[70%] ">
                <h2 className="text-3xl font-semibold text-[#242F65]">
                  Tokenisation of Bio Coal
                </h2>

                <p className="text-[#525665] text-[1.1rem]  font-medium ">
                  Omaira’s innovative solution to tokenise Bio Coal, aims to
                  create a carbon-neutral or positive ecosystem, providing
                  service at a global level
                </p>

                <button className="justify-center px-8 py-0 h-9 w-40 text-lg font-medium leading-9 text-center text-white bg-sky-400 rounded">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
