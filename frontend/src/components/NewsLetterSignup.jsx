import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function NewsLetterSignup() {
  const [email, setEmail] = useState("");

  const handleNotify = () => {
    if (!email) return;

    toast.success("You’re now on the AUIND drop list!", {
      duration: 1800,
      position: "top-right",
      style: {
        background: "#0a0f1f",
        color: "#fff",
        fontSize: "14px",
        border: "1px solid #0ff",
      },
    });

    setEmail("");
  };

  return (
    <div
      className="w-full py-20 px-4 border-b-2 border-cyan-400 relative overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        background: "radial-gradient(circle at top, #020510 10%, #000207 90%)",
      }}
    >
      <Toaster />

      {/* Tiny glowing stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-cyan-400 rounded-full opacity-30"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h2
          className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide text-center"
          data-aos="zoom-in"
        >
          Get Notified About New Products
        </h2>

        <p
          className="text-gray-400 text-center mt-2 text-sm max-w-lg"
          data-aos="fade-up"
        >
          Join our AUIND family for exclusive drops, streetwear releases and discount alerts.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full flex flex-col sm:flex-row gap-4 mt-8"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-white/10 border border-cyan-400/40 text-white px-5 py-3 rounded-xl
                       focus:ring-2 focus:ring-cyan-300 focus:outline-none placeholder-gray-400
                       backdrop-blur-lg"
          />

          <button
            type="submit"
            onClick={handleNotify}
            className="px-8 py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-bold rounded-xl
                       transition shadow-[0_0_20px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(0,255,255,0.6)]"
          >
            Notify Me
          </button>
        </form>
      </div>
    </div>
  );
}
