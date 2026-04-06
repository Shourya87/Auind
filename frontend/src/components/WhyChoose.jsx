import React from "react";

const badges = [
  { id: 1, icon: "🚚", title: "Fast Delivery", desc: "All India Shipping" },
  {
    id: 2,
    icon: "🔄",
    title: "Easy Returns",
    desc: "7 Days Hassle-free return",
  },
  { id: 3, icon: "💳", title: "Secure Payments", desc: "100% safe checkout" },
  { id: 4, icon: "⭐", title: "Top Rated", desc: "Loved by 10k+ customers" },
  { id: 5, icon: "🎁", title: "Premium Quality", desc: "Handpicked fabrics" },
  {
    id: 6,
    icon: "🔥",
    title: "Exclusive Styles",
    desc: "Fresh trends every week",
  },
  { id: 7, icon: "👕", title: "Original Designs", desc: "Unique Indian vibe" },
  { id: 8, icon: "💬", title: "24/7 Support", desc: "We are always here" },
  { id: 9, icon: "🏆", title: "Trusted Brand", desc: "4.9/5 customer rating" },
  { id: 10, icon: "💸", title: "Value Pricing", desc: "Best deals always" },
];

export default function WhyChoose() {
  return (
    <div className="px-8 py-10 bg-black border-b-2 border-cyan-400">
      <h2 className="text-center text-3xl font-bold text-cyan-400 mb-10">
        Why Choose AUIND?
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
        {badges.map((b) => (
          <div
            key={b.id}
            className="bg-white hover:bg-black hover:text-white border shadow-cyan-400 border-cyan-400 p-6 rounded-2xl shadow hover:scale-105  transition"
          >
            <div className="text-4xl mb-2">{b.icon}</div>
            <h3 className="font-semibold text-lg ">{b.title}</h3>
            <p className="text-gray-500 text-sm">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
