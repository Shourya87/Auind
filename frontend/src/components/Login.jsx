// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useAuth } from "./Context/AuthContext";
import toast from "react-hot-toast";
import Logo from "../images/logo/Logo.png";

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    if (!form.email.trim() || !form.password.trim()) {
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

    return true;
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await login(form.email, form.password);
      toast.success("Login successful");
      navigate("/account");
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#050607] text-white flex items-center justify-center px-6 py-10">

      <div className="max-w-5xl w-full bg-[#0A0F12]/70 border border-cyan-400 rounded-2xl shadow-[0_0_30px_#00fff533] overflow-hidden grid grid-cols-1 md:grid-cols-2">

        {/* LEFT — BRAND PANEL */}
        <div className="hidden md:flex flex-col items-center justify-center border-r border-r-cyan-400 bg-linear-to-b from-[#001b1a] to-[black] p-10 text-center">
          <h2 className="text-3xl font-bold text-cyan-300 mb-4 animate-fade-in">
            Welcome Back
          </h2>

          <p className="text-gray-300 text-sm leading-relaxed animate-fade-in-delayed">
            Log in to access saved items, manage orders and unlock offers.
          </p>

          <img
            src={Logo}
            alt="login banner"
            className="w-60 mt-6 opacity-95 animate-float rounded-full"
          />
        </div>

        {/* RIGHT — FORM */}
        <div className="p-8">

          <h2 className="text-2xl font-bold text-center mb-6">
            Login to Your Account
          </h2>

          <form onSubmit={submitForm} className="space-y-5">

            {/* EMAIL */}
            <div className="space-y-1">
              <label className="text-sm text-gray-300 ml-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter email"
                autoFocus
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl 
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
              />
            </div>

            {/* PASSWORD */}
            <div className="space-y-1 relative">
              <label className="text-sm text-gray-300 ml-1">Password</label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full px-4 py-3 bg-[#0A0F12] border border-gray-700 rounded-xl 
                focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500 outline-none transition"
              />

              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 bottom-3 cursor-pointer text-gray-400"
              >
                {showPass ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* PASSWORD STRENGTH */}
            {form.password.length > 0 && (
              <p
                className={`text-xs ${
                  form.password.length < 6
                    ? "text-red-400"
                    : form.password.length < 9
                    ? "text-yellow-400"
                    : "text-green-400"
                }`}
              >
                {form.password.length < 6
                  ? "Weak password"
                  : form.password.length < 9
                  ? "Good password"
                  : "Strong password"}
              </p>
            )}

            {/* FORGOT */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-cyan-400 hover:text-cyan-300"
              >
                Forgot Password?
              </Link>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 font-bold rounded-xl transition-all ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-linear-to-r from-cyan-400 to-cyan-600 text-black hover:scale-[1.02]"
              }`}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

            {/* SEPARATOR */}
            <div className="flex items-center gap-3">
              <span className="h-px flex-1 bg-gray-600"></span>
              <span className="text-gray-400 text-sm">or</span>
              <span className="h-px flex-1 bg-gray-600"></span>
            </div>

            {/* GOOGLE */}
            <button
              type="button"
              className="w-full py-3 border border-gray-600 rounded-xl flex items-center justify-center gap-3 hover:border-cyan-400 transition"
            >
              <FaGoogle className="text-cyan-400" />
              <span className="text-gray-300 text-sm font-medium">
                Continue with Google
              </span>
            </button>

            {/* SIGNUP LINK */}
            <p className="text-gray-400 text-sm text-center pt-2">
              New to AUIND?{" "}
              <Link to="/signup" className="text-cyan-400 hover:text-cyan-300">
                Create Account
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* TAILWIND ANIMATIONS */}
      <style>{`
        .animate-fade-in {animation: fade 1s ease}
        .animate-fade-in-delayed {animation: fade 1.4s ease}
        .animate-float {animation: float 3s infinite ease-in-out}

        @keyframes fade {0%{opacity:0} 100%{opacity:1}}
        @keyframes float {0%{transform:translateY(0)}50%{transform:translateY(-6px)}100%{transform:translateY(0)}}
      `}</style>

    </div>
  );
}
