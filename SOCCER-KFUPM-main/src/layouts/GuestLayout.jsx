// src/layouts/GuestLayout.jsx
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaFutbol, FaTrophy, FaExclamationCircle, FaUsers, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const GuestLayout = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/guest/match-results', name: 'Match Results', icon: <FaFutbol className="mr-3" /> },
    { path: '/guest/top-scorers', name: 'Top Scorers', icon: <FaTrophy className="mr-3" /> },
    { path: '/guest/red-cards', name: 'Red Cards', icon: <FaExclamationCircle className="mr-3" /> },
    { path: '/guest/team-members', name: 'Team Members', icon: <FaUsers className="mr-3" /> },
  ];

  const authItems = [
    { path: '/login', name: 'Login', icon: <FaSignInAlt className="mr-3" /> },
    { path: '/signup', name: 'Sign Up', icon: <FaUserPlus className="mr-3" /> },
  ];

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white">
        <Link to="/home">
          <div className="p-4 font-bold text-xl">SOCCER@KFUPM</div>
        </Link>
        <nav className="mt-6">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 ${
                    location.pathname === item.path ? 'bg-blue-900' : 'hover:bg-blue-700'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="border-t border-blue-700 my-4"></div>
            {authItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 ${
                    location.pathname === item.path ? 'bg-blue-900' : 'hover:bg-blue-700'
                  }`}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default GuestLayout;