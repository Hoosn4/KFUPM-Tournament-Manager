// src/layouts/AdminLayout.jsx
import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { 
  FaHome, 
  FaTrophy, 
  FaUsers, 
  FaUserAlt, 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaSignOutAlt
} from 'react-icons/fa';

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    //  handle logout logic here
    navigate('/login');
  };

  // Admin navigation items
  const navItems = [
    { to: '/admin', icon: <FaHome className="mr-3" />, text: 'Dashboard' },
    { to: '/admin/tournaments', icon: <FaTrophy className="mr-3" />, text: 'Tournaments' },
    { to: '/admin/teams', icon: <FaUsers className="mr-3" />, text: 'Teams' },
    { to: '/admin/players', icon: <FaUserAlt className="mr-3" />, text: 'Players' },
    { to: '/admin/matches', icon: <FaCalendarAlt className="mr-3" />, text: 'Matches' },
    { to: '/admin/fields', icon: <FaMapMarkerAlt className="mr-3" />, text: 'Fields' }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <h1 className="text-xl font-bold">SOCCER@KFUPM</h1>
          <button onClick={toggleSidebar} className="p-2 rounded-md hover:bg-gray-700">
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
                  end={item.to === '/admin'}
                >
                  {item.icon}
                  <span>{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-gray-700">
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

export default AdminLayout;