import React from "react";
import {
  Casualwear,
  Denim,
  EthnicJackets,
  Ethnicwear,
  Jacket,
  Kurtaset,
  Kurtiset,
  Menswear,
  Tshirt,
  WomenTops,
} from "../images/festive/ImagesFestive";

const deals = [
  { id: 1, img: Ethnicwear, title: "Ethnic Wear", offer: "50–80% OFF" },
  { id: 2, img: Kurtaset, title: "Kurta Sets", offer: "40–60% OFF" },
  { id: 3, img: Menswear, title: "Mens Wear", offer: "30–70% OFF" },
  { id: 4, img: WomenTops, title: "Women Tops", offer: "20–50% OFF" },
  { id: 5, img: Jacket, title: "Jackets", offer: "30–65% OFF" },
  { id: 6, img: EthnicJackets, title: "Ethnic Jackets", offer: "25–55% OFF" },
  { id: 7, img: Denim, title: "Denim", offer: "40–80% OFF" },
  { id: 8, img: Casualwear, title: "Casual Wear", offer: "35–75% OFF" },
  { id: 9, img: Tshirt, title: "T-Shirts", offer: "20–40% OFF" },
  { id: 10, img: Kurtiset, title: "Kurti Sets", offer: "30–50% OFF" },
];

export default function FestiveDeals() {
  return (
    <div
      className="px-6 py-12 bg-black text-center border-b-2 border-cyan-400"
      data-aos="fade-up"
      data-aos-duration="900"
    >
      <p className="text-sm uppercase tracking-widest text-cyan-400 font-semibold"
           data-aos="fade-right"
           data-aos-delay="200"
        >
          Festive Deals
        </p>

        <h1
          className="text-4xl sm:text-5xl font-bold text-white mt-2 tracking-tight"
          data-aos="zoom-in"
        >
          Festive vibes. Fresh prices.
        </h1>

      <div
        className="grid grid-cols-2 mt-10 md:grid-cols-5 gap-6"
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1000"
      >
        {deals.map((d, index) => (
          <div
            key={d.id}
            className="relative group rounded-xl overflow-hidden shadow-lg cursor-pointer"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
            data-aos-duration="900"
          >
            <img
              src={d.img}
              className="h-[260px] w-full object-cover group-hover:scale-110 transition"
            />

            <div className="absolute bottom-0 w-full bg-linear-to-t from-[#00fff5]/90 to-transparent p-4 text-white">
              <h3 className="font-bold text-xl">{d.title}</h3>
              <p className="text-sm font-semibold">{d.offer}</p>
              <p className="mt-1 text-md font-semibold underline">Shop Now</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
