// src/pages/Login.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo purposes navigate to admin dashboard
    // In a real app, you would check credentials first
    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 via-teal-500 to-blue-600">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center">
        <Link to="/home">
          <div className="text-white text-2xl font-bold">
            SOCCER@KFUPM
          </div>
        </Link>
        <div className="flex space-x-4">
          <Link to="/signup">
            <button className="bg-blue-700 px-6 py-2 rounded-md text-white font-semibold hover:bg-opacity-90">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Login</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="username">Username</label>
              <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="text" 
                id="username" 
                placeholder="Enter your username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
              <input 
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                type="password" 
                id="password" 
                placeholder="Enter your password"
              />
            </div>
            <button 
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 font-semibold"
              type="submit"
            >
              Sign In
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Don't have an account? <Link to="/signup" className="text-blue-600 hover:underline cursor-pointer">Sign up</Link></p>
          </div>
          
          <div className="mt-4 text-center">
            <Link to="/guest/match-results" className="text-blue-600 hover:underline cursor-pointer">
              Continue as Guest
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;