import React, { useState } from "react";
import {
  image1, image2, image3, image4, image5, image6,
  image7, image8, image9, image10, image11, image12
} from "../images/style/ImagesStyle";

import { MdSwipeRight, MdSwipeLeft } from "react-icons/md";

export default function StyleThatShow() {
  const images = [
    image1, image2, image3, image4, image5, image6,
    image7, image8, image9, image10, image11, image12
  ];

  const [slide, setSlide] = useState(0);

  const prevSlide = () => {
    if (slide < -660) return;
    setSlide(prev => prev - 110);
  };

  const nextSlide = () => {
    if (slide > -110) return;
    setSlide(prev => prev + 110);
  };

  return (
    <div
      className="w-screen h-[700px] border-b-2 mb-16 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      {/* HEADER */}
      <div
        className="w-full px-6 p-10 text-center bg-black border-t-2 border-cyan-400"
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Style That Shows
        </p>

        <h1
          className="text-4xl sm:text-5xl font-extrabold text-white mt-2 tracking-tight"
          data-aos="zoom-in"
        >
          Indian Look and Feel
        </h1>
      </div>

      {/* SLIDER CONTAINER */}
      <div
        className="h-[600px] w-screen relative bg-black flex overflow-hidden space-x-7 py-6 pl-2"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="1000"
      >

        {/* SWIPE ICONS */}
        <div>
          <MdSwipeLeft
            onClick={nextSlide}
            className="absolute left-6 mt-10 top-1/2 text-[#c5c6c7] opacity-70 text-4xl z-20 cursor-pointer hover:text-gray-600"
            data-aos="fade-right"
            data-aos-delay="300"
          />
          <MdSwipeRight
            onClick={prevSlide}
            className="absolute right-2 mt-10 top-1/2 text-[#c5c6c7] opacity-70 text-4xl z-20 cursor-pointer hover:text-gray-600"
            data-aos="fade-left"
            data-aos-delay="300"
          />
        </div>

        {/* CARDS */}
        {images.map((img, index) => (
          <div
            key={index}
            style={{ transform: `translateX(${slide}%)` }}
            className="w-[275px] h-[500px] p-4 flex flex-col items-center justify-between bg-gray-200 rounded-xl border border-[#00fff5] shrink-0 hover:shadow-lg hover:shadow-[#00fff5] transition-shadow duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="900"
          >
            {/* IMAGE */}
            <div className="w-full h-[380px] overflow-hidden rounded-lg">
              <img
                src={img}
                alt="Style Image"
                className="w-full h-full object-cover transform transition duration-500 hover:scale-110 hover:rotate-2"
              />
            </div>

            {/* TEXT + BUTTON */}
            <div className="mt-1 flex flex-col gap-0.5 text-center">
              <p className="text-[0.8rem] font-semibold text-gray-700">
                Olive Textured Oversized Tee & Patchwork Denim Jeans<br />
                ₹ 1499
              </p>

              <button className="mt-1 w-40 self-center py-2 bg-[#00fff5] text-white text-sm font-bold rounded-full hover:scale-105 hover:bg-[#00fff763] transition-colors">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
