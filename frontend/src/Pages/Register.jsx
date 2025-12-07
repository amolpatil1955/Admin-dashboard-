import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaCamera,
  FaSpinner,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      const res = await fetch("https://admin-dashboard-4jll.onrender.com/api/v1/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Registration Successful!");
        setTimeout(() => {
          navigate("/");
        }, 1500);
      } else {
        toast.error(data.message || "Registration Failed");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="w-[90%] bg-white rounded-md p-4   md:w-[30%]">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-base font-semibold text-gray-800">
              Create Account
            </h1>
            <p className="text-gray-500 text-xs mt-0.5">Fill your details</p>
          </div>

          <form onSubmit={handleSubmit} method="post">
            {/* Full Name Field */}
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-3">
                <div className="flex items-center gap-1">
                  <FaUser className="text-gray-400 text-xs" />
                  Full Name
                </div>
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-2 py-1.5 pl-7 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                  placeholder="Enter full name"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                  required
                />
                <FaUser className="absolute left-2 top-1.5 text-gray-400 text-xs" />
              </div>
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-xs font-medium text-gray-700 mb-3">
                <div className="flex items-center gap-1">
                  <FaEnvelope className="text-gray-400 text-xs" />
                  Email
                </div>
              </label>
              <div className="relative">
                <input
                  type="email"
                  className="w-full px-2 py-1.5 pl-7 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                  placeholder="Enter email"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                  required
                />
                <FaEnvelope className="absolute left-2 top-1.5 text-gray-400 text-xs" />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-3">
              <label className="block text-xs font-medium text-gray-700 mb-3">
                <div className="flex items-center gap-1">
                  <FaLock className="text-gray-400 text-xs" />
                  Password
                </div>
              </label>
              <div className="relative">
                <input
                  type="password"
                  className="w-full px-2 py-1.5 pl-7 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                  placeholder="Create password"
                  name="password"
                  onChange={(e) => setpassword(e.target.value)}
                  required
                />
                <FaLock className="absolute left-2 top-1.5 text-gray-400 text-xs" />
              </div>
            </div>

            {/* Contact Number Field */}
            {/* <div className="mb-3">
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              <div className="flex items-center gap-1">
                <FaPhone className="text-gray-400 text-xs" />
                Contact
              </div>
              </label>
              <div className="relative">
              <div className="absolute left-2 top-1.5 flex items-center">
                <span className="text-gray-500 text-xs">+91</span>
                <div className="w-px h-3 bg-gray-300 mx-1"></div>
              </div>
              <input
                type="tel"
                className="w-full px-2 py-1.5 pl-12 border border-gray-300 rounded text-xs focus:outline-none focus:border-blue-500"
                placeholder="Number"
                required
              />
              <FaPhone className="absolute left-8 top-1.5 text-gray-400 text-xs" />
            </div>
          </div> */}

            {/* Profile Picture Field */}
            {/* <div className="mb-4">
            <label className="block text-xs font-medium text-gray-700 mb-0.5">
              <div className="flex items-center gap-1">
                <FaCamera className="text-gray-400 text-xs" />
                Profile Picture
              </div>
            </label>
            <div className="relative">
              <input
                type="file"
                className="hidden"
                id="profile-picture"
              />
              <label
                htmlFor="profile-picture"
                className="flex items-center justify-between w-full px-2 py-1.5 border border-dashed border-gray-300 rounded text-xs cursor-pointer"
              >
                <span className="text-gray-500">Choose File</span>
                <span className="text-gray-400 text-[10px]">No file</span>
                </label>
            </div>
          </div> */}

            {/* Submit Button with Loading Effect */}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-medium py-1.5 rounded text-xs transition-all flex items-center justify-center gap-2 ${
                isLoading
                  ? "bg-blue-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 text-white"
              }`}
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Please wait...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          {/* Footer Note */}
          <p className="text-center text-gray-500 text-[12px] mt-3">
            i have an account already
            <Link to={"/"} className="text-blue-500 ml-2 ">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
