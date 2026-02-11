// src/pages/SignUp.jsx
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

function SignUp() {
  // Define navigate
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // Check if the user to see his password while writing...
  const [showPassword, setShowPassword] = useState(false);
  /*Checking the vaildity of password for more security*/
  const checkLowerCase = /[a-z]/.test(password);
  const checkUpperCase = /[A-Z]/.test(password);
  const checkHasNumber = /\d/.test(password);
  const checkHasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const checkHasLongEnough = password.length >= 8;

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Navigate to Login after Signing up*/
    navigate('/login');
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
          <Link to="/login">
            <button className="bg-white px-6 py-2 rounded-md text-blue-600 font-semibold hover:bg-opacity-90">
              Login
            </button>
          </Link>
        </div>
      </nav>

      <div className="flex items-center justify-center py-12">
        <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">Create Your Account</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                id="username"
                type="username"
                placeholder="Pick a username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••"
                  className="w-full border border-gray-300 px-3 py-2 rounded pr-16 focus:outline-none focus:border-blue-500"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-sm text-blue-600 hover:underline focus:outline-none"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </button>
              </div>

              {/* Check list */}
              <ul className="text-sm space-y-1 mb-4 mt-4 flex flex-wrap gap-3">
                <li className={`flex items-center ${checkLowerCase ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className="inline-block w-3 h-3 mr-2 rounded-full border-2 border-current bg-current/10"/>
                  One lowercase character
                </li>
                <li className={`flex items-center ${checkUpperCase ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className="inline-block w-3 h-3 mr-2 rounded-full border-2 border-current bg-current/10"/>
                  One uppercase character
                </li>
                <li className={`flex items-center ${checkHasSpecial ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className="inline-block w-3 h-3 mr-2 rounded-full border-2 border-current bg-current/10"/>
                  One special character
                </li>
                <li className={`flex items-center ${checkHasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className="inline-block w-3 h-3 mr-2 rounded-full border-2 border-current bg-current/10"/>
                  One number character
                </li>
                <li className={`flex items-center ${checkHasLongEnough ? 'text-green-600' : 'text-gray-500'}`}>
                  <span className="inline-block w-3 h-3 mr-2 rounded-full border-2 border-current bg-current/10"/>
                  At least 8 characters
                </li>
              </ul>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition font-semibold"
              disabled={
                !checkLowerCase || !checkUpperCase || !checkHasSpecial || !checkHasNumber || !checkHasLongEnough
              }
            >
              Sign Up
            </button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-600">
            <p>Already have an account? <Link to="/login" className="text-blue-600 hover:underline cursor-pointer">Log in</Link></p>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <div className="flex items-center justify-center">
            <button className="w-full border border-gray-300 bg-white py-3 px-4 rounded-md hover:bg-gray-50 transition flex items-center justify-center gap-3">
              <FaGoogle className="text-red-500" />
              <span className="font-medium">Continue with Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;