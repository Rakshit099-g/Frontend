import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react"; // Imported User icon

const Login = () => {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // controls Login vs Signup

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate a delay for the animation before navigation
    navigate("/content");
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-gray-900 transition-all duration-1000 ${
        isLoggingIn ? "opacity-0 scale-95" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full overflow-hidden transform transition-transform duration-1000 ease-in-out">
        {/* Left Image Section */}
        <div className="w-1/3 pt-20">
          <img
            src="https://cdn1.iconfinder.com/data/icons/user-interface-2314/24/user_person_profile_people_avatar-1024.png"
            alt="Login Visual"
            className="w-[200px] h-[200px] object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-2/3 p-8 text-white">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="font-bold">L</span>
            </div>
            <h1 className="text-2xl font-bold">
              We are <span className="text-white">{isLogin ? "Login" : "Sign Up"}</span>
            </h1>
          </div>
          <p className="text-gray-300 mb-8">
            {isLogin ? "Welcome back! Log in to your account." : "Create your account now!"}
          </p>

          {/* Username Input - only for Sign Up */}
          {!isLogin && (
            <div className="mb-4 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Username"
                className="w-full bg-gray-700 text-white rounded-lg pl-10 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}

          {/* Email Input */}
          <div className="mb-4 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Mail className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-700 text-white rounded-lg pl-10 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Lock className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700 text-white rounded-lg pl-10 p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            {isLogin ? "Log in" : "Sign Up"}
          </button>

          {/* Toggle Link */}
          <p className="mt-4 text-center text-gray-400">
            {isLogin ? (
              <>
                New User?{" "}
                <button
                  onClick={handleSignupClick}
                  className="text-purple-500 hover:underline"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <button
                  onClick={handleLoginClick}
                  className="text-purple-500 hover:underline"
                >
                  Login
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
