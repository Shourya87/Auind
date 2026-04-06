import React, { useState, useEffect } from "react";
import { hero1,hero2,hero3,hero4,hero5,hero6,hero7,hero8,hero9 } from "../images/hero/ImagesHero";
import { ImCircleLeft, ImCircleRight } from "./ReactIcons";

export default function Hero() {
  const images = [ hero1,hero2,hero3,hero4,hero5,hero6,hero7,hero8,hero9 ];
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);


  // Change image every 2 seconds (only if not paused)
  useEffect(() => {
    if (paused) return; // don’t run if mouse hover
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length, paused]);

  
  return (
    <div
      className="relative w-screen h-150"
      onMouseEnter={() => setPaused(true)} // Pause when mouse hover
      onMouseLeave={() => setPaused(false)} // Resume when mouse leaves
    >

      <div>
        <ImCircleLeft className="absolute left-5 top-1/2 opacity-50 text-4xl z-20 cursor-pointer hover:text-[#c5c6c7] hover:cursor-pointer"
          onClick={() => setCurrent((current - 1 + images.length) % images.length)}
        />
        <ImCircleRight className="absolute right-5 top-1/2 opacity-50 text-4xl z-20 cursor-pointer hover:text-[#c5c6c7] hover:cursor-pointer"
          onClick={() => setCurrent((current + 1) % images.length)}
        />
      </div>


      {/* Background images stacked */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100" : "opacity-0"
            }`}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white">
        <h1 className="text-5xl font-serif drop-shadow-lg shadow-gray-900  mb-14 animate-border">
          Welcome to AUIND!
        </h1>
      </div>

      {/* Small dots indicator */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${i === current ? "bg-white scale-110" : "bg-gray-400 opacity-60"
              }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
