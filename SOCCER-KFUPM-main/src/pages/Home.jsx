// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFutbol, FaUsers, FaBolt } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Header */}
      <header className="p-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">SOCCER@KFUPM</div>
        <div className="space-x-4">
          <Link to="/login" className="bg-white text-blue-500 px-4 py-2 rounded-md font-medium">
            Login
          </Link>
          <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium">
            Sign Up
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="text-center text-white py-20 px-4">
        <h1 className="text-5xl font-bold mb-4">
          Lace up your boots, the battle for the cup at
        </h1>
        <h1 className="text-6xl font-bold mb-8">SOCCER@KFUPM BEGINS!</h1>
        <p className="text-2xl mb-12">Soccer tournaments are organized by KFUPM!</p>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <FaFutbol className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Players</h2>
          <p className="text-gray-600">
            KFUPM students, faculty, and staff are welcome to join!
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <FaUsers className="text-purple-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Teams</h2>
          <p className="text-gray-600">
            Be part of a vibrant competition! A number of teams will be vying for the championship in each tournament.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <FaBolt className="text-orange-500 text-4xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">!!!</h2>
          <p className="text-gray-600">
            Whether you lead as captain or shine as the best player, make your mark at SOCCER@KFUPM!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;