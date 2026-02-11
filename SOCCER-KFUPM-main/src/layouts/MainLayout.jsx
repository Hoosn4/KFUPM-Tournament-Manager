// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaTrophy, 
  FaUsers, 
  FaUserAlt, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaListAlt,
  FaFootballBall,
  FaRedCard,
  FaUserFriends,
  FaSignOutAlt
} from 'react-icons/fa';

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine if we're in admin or guest section
  const isAdmin = !location.pathname.includes('match-results') && 
                 !location.pathname.includes('top-scorers') && 
                 !location.pathname.includes('red-cards') && 
                 !location.pathname.includes('team-members');

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    navigate('/login');
  };

  // Admin navigation items
  const adminNavItems = [
    { to: '/dashboard', icon: <FaHome className="mr-3" />, text: 'Dashboard' },
    { to: '/dashboard/tournaments', icon: <FaTrophy className="mr-3" />, text: 'Tournaments' },
    { to: '/dashboard/teams', icon: <FaUsers className="mr-3" />, text: 'Teams' },
    { to: '/dashboard/players', icon: <FaUserAlt className="mr-3" />, text: 'Players' },
    { to: '/dashboard/matches', icon: <FaCalendarAlt className="mr-3" />, text: 'Matches' },
    { to: '/dashboard/fields', icon: <FaMapMarkerAlt className="mr-3" />, text: 'Fields' }
  ];

  // Guest navigation items
  const guestNavItems = [
    { to: '/dashboard/match-results', icon: <FaListAlt className="mr-3" />, text: 'Match Results' },
    { to: '/dashboard/top-scorers', icon: <FaFootballBall className="mr-3" />, text: 'Top Scorers' },
    { to: '/dashboard/red-cards', icon: <FaRedCard className="mr-3" />, text: 'Red Cards' },
    { to: '/dashboard/team-members', icon: <FaUserFriends className="mr-3" />, text: 'Team Members' }
  ];

  // Choose which nav items to display
  const navItems = isAdmin ? adminNavItems : guestNavItems;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <h1 className="text-xl font-bold">SOCCER@KFUPM</h1>
          <button className="p-2 rounded-md hover:bg-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="py-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => 
                    `flex items-center py-3 px-4 ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'} transition-colors`
                  }
                  end={item.to === '/dashboard'}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 mt-auto border-t border-gray-700">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center justify-center p-2 bg-red-600 hover:bg-red-700 rounded-md transition-colors"
          >
            <FaSignOutAlt className="mr-2" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;