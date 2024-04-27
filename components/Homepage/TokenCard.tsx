"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination, FreeMode } from "swiper/modules";
import Image from "next/image";

export default function App() {
  return (
    <>
      <Swiper
        className="mySwiper"
        spaceBetween={50}
        loop={true}
        breakpoints={{
          
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
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
          <div className=" rounded-3xl overflow-clip ">
            <div
              className=" rounded-3xl   "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className=" relative p-8 py-16  text-start space-y-10 lg:h-[25rem] flex flex-col justify-between md:w-[60%] ">
                <h2 className="text-3xl font-normal text-[#242F65]">
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
                <Image src={"/ph1.svg"} alt="phone1" height={1000} width={250} className="absolute -right-[17rem] -bottom-[11rem] overflow-hidden"/>    

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-3xl overflow-clip">
            <div
              className="rounded-3xl "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-8 py-16 text-start space-y-10 lg:h-[25rem] flex flex-col justify-between md:w-[60%]">
                <h2 className="text-3xl font-normal text-[#242F65]">
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
                <Image src={"/ph2.svg"} alt="phone1" height={1000} width={250} className="absolute -right-[17rem] -bottom-[11rem] overflow-hidden"/>    

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" rounded-3xl overflow-clip">
            <div
              className=" rounded-3xl "
              style={{
                backgroundImage: 'url("/cardbg.png")',
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div className="relative p-8 py-16  text-start space-y-10 lg:h-[25rem] flex flex-col justify-between md:w-[60%] ">
                <h2 className="text-3xl font-normal text-[#242F65]">
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
                <Image src={"/ph3.svg"} alt="phone1" height={1000} width={250} className="absolute -right-[17rem] -bottom-[11rem] overflow-hidden"/>    

              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
