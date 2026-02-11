// src/pages/admin/Matches.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Matches = () => {
  // Sample matches data
  const [matches, setMatches] = useState([
    { 
      id: 1, 
      tournament: 'Spring Cup 2025',
      teams: 'Eagles FC vs Falcons United', 
      date: '2025-04-15',
      time: '15:00',
      field: 'Main Stadium',
      status: 'Scheduled',
      score: '-'
    },
    { 
      id: 2, 
      tournament: 'Spring Cup 2025',
      teams: 'Lions SC vs Eagles FC', 
      date: '2025-04-18',
      time: '17:30',
      field: 'Training Field A',
      status: 'Scheduled',
      score: '-'
    },
    { 
      id: 3, 
      tournament: 'Spring Cup 2025',
      teams: 'Falcons United vs Lions SC', 
      date: '2025-04-10',
      time: '16:00',
      field: 'Main Stadium',
      status: 'Completed',
      score: '2 - 1'
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Matches</h2>
        <button 
          onClick={() => setShowAddForm(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md flex items-center"
        >
          <span className="mr-2">+</span> Schedule Match
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tournament</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Teams</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Field</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matches.map((match) => (
              <tr key={match.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{match.tournament}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{match.teams}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className="inline-flex items-center">
                    <svg className="mr-1.5 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    {match.date} at {match.time}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{match.field}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${match.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {match.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{match.score}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  {match.status === 'Scheduled' ? (
                    <>
                      <button className="text-blue-600 hover:text-blue-900 mr-3">Edit</button>
                      <button className="text-green-600 hover:text-green-900">Record Result</button>
                    </>
                  ) : (
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-6 text-right">
        <Link to="/admin/fields" className="text-blue-600 hover:text-blue-800">
          Manage Fields →
        </Link>
      </div>
    </div>
  );
};

export default Matches;