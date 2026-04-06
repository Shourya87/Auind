import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiRazorpay, SiPaytm } from "react-icons/si";
import Logo from "../images/logo/LogoTransparent.png";

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 pt-14 pb-10 px-6 md:px-16">

      {/* BRAND SECTION */}
      <div className="text-center mb-14">
        <img
          src={Logo}
          alt="AUIND Logo"
          className="mx-auto w-28 opacity-95" // smaller logo
        />

        <p className="mt-3 text-base tracking-wide italic max-w-xl mx-auto">
          <span className="text-2xl font-medium text-white ">
            Feel the Indian Aura in Your Everyday Style.
          </span>
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-12">

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400 ">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Contact Us</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
            <li className="hover:text-white cursor-pointer">Returns & Refunds</li>
            <li className="hover:text-white cursor-pointer">Cancel Order</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* CONNECT */}
        <div>
          <h3 className="text-lg font-semibold mb-5 text-cyan-400">Connect With Us</h3>

          <div className="flex space-x-4 text-xl mb-6">
            <FaFacebookF className="cursor-pointer hover:text-white" />
            <FaInstagram className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <FaYoutube className="cursor-pointer hover:text-white" />
          </div>

          <h3 className="text-lg font-semibold mb-4 text-cyan-400">Download App</h3>
          <div className="flex gap-3">
            <div className="flex items-center gap-2 bg-black/70 px-3 py-2 rounded-md cursor-pointer hover:bg-black">
              <FaGooglePlay className="text-xl" />
              <p className="text-sm">Google Play</p>
            </div>
            <div className="flex items-center gap-2 bg-black/70 px-3 py-2 rounded-md cursor-pointer hover:bg-black">
              <FaApple className="text-xl" />
              <p className="text-sm">App Store</p>
            </div>
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700/40 mt-14 pt-8"></div>

      {/* PAYMENT SECTION */}
      <div className="text-center mb-8">
        <h3 className="text-lg font-semibold mb-4 text-white">100% Secure Payment</h3>
        <div className="flex justify-center gap-6 text-3xl text-white">
          <SiPaytm />
          <SiVisa />
          <SiMastercard />
          <SiRazorpay />
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2025 AUIND — All Rights Reserved.
      </div>
    </footer>
  );
}
