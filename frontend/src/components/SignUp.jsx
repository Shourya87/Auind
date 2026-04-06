// Signup.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useAuth } from "./Context/AuthContext";
import Logo from "../images/logo/Logo.png";
import toast from "react-hot-toast";

export default function Signup() {
  const [showPass, setShowPass] = useState(false);
  const [showCPass, setShowCPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();
  const { signup } = useAuth(); 

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.name.trim() || !form.email.trim() || !form.password.trim()) {
      toast.error("All fields are required");
      return false;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      toast.error("Invalid email format");
      return false;
    }

    if (form.password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return false;
    }

    if (form.password !== form.cpassword) {
      toast.error("Passwords do not match");
      return false;
    }

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    try {
      setLoading(true);

      await signup(form.name, form.email, form.password);

      toast.success("Account created successfully!");

      navigate("/account");
    } catch (err) {
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white flex items-center justify-center px-6 py-10">
      
      <div className="max-w-5xl w-full bg-[#0A0F12]/70 border border-[#0ff]/10 rounded-2xl shadow-[0_0_30px_#00fff533] overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        {/* LEFT SIDE BANNER */}
        <div className="hidden md:flex flex-col items-center justify-center bg-linear-to-b from-[#001b1a] border-r border-r-cyan-400 to-[black] p-10 text-center">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4">Welcome to AUIND</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            Join India’s fastest growing fashion platform.<br />
            Get instant access to exclusive offers, early drops,<br />
            and personalized picks.
          </p>
          <img
            src={Logo}
            alt="AUIND Logo"
            className="w-60 mt-6 opacity-90 rounded-full animate-float"
          />
        </div>

        {/* RIGHT SIDE — SIGNUP FORM */}
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            Create Your Account
          </h2>

          <form onSubmit={submitForm} className="space-y-5">

            {/* NAME */}
            <div>
              <label className="text-sm text-gray-300 ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-sm text-gray-300 ml-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <label className="text-sm text-gray-300 ml-1">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 bottom-3 cursor-pointer text-gray-400"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <label className="text-sm text-gray-300 ml-1">Confirm Password</label>
              <input
                type={showCPass ? "text" : "password"}
                name="cpassword"
                value={form.cpassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl focus:border-cyan-400 focus:ring-1 focus:ring-cyan-500 outline-none transition"
              />
              <span
                onClick={() => setShowCPass(!showCPass)}
                className="absolute right-4 bottom-3 cursor-pointer text-gray-400"
              >
                {showCPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* SIGNUP BTN */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-bold rounded-xl shadow-md transition
                ${loading
                  ? "bg-gray-600 cursor-not-allowed"
                  : "bg-linear-to-r from-cyan-400 to-cyan-600 text-black hover:scale-[1.02]"
                }`}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>

            {/* OR */}
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gray-600"></span>
              <span className="text-gray-400 text-sm">or</span>
              <span className="h-px flex-1 bg-gray-600"></span>
            </div>

            {/* GOOGLE SIGNUP */}
            <button
              type="button"
              className="w-full py-3 border border-gray-600 rounded-xl flex items-center justify-center gap-3 hover:border-cyan-400 transition"
            >
              <FaGoogle className="text-cyan-400" />
              <span className="text-gray-300 text-sm font-medium">
                Continue with Google
              </span>
            </button>

            {/* LOGIN LINK */}
            <p className="text-gray-400 text-sm text-center pt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-cyan-400 hover:text-cyan-300">
                Login
              </Link>
            </p>

          </form>
        </div>
      </div>

      {/* FLOAT ANIMATION KEYFRAME */}
      <style>{`
        .animate-float {
          animation: fl 3s infinite ease-in-out;
        }
        @keyframes fl {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </div>
  );
}
