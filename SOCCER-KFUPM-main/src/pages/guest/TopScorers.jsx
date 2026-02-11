// src/pages/guest/TopScorers.jsx
import React from 'react';

const TopScorers = () => {
  // Sample player data 
  const players = [
    { id: 1, name: 'John Doe', team: 'Team Alpha', goals: 7 },
    { id: 2, name: 'Jane Smith', team: 'Team Beta', goals: 6 },
    { id: 3, name: 'Bob Johnson', team: 'Team Gamma', goals: 5 },
    { id: 4, name: 'Alice Williams', team: 'Team Delta', goals: 5 },
    { id: 5, name: 'Charlie Brown', team: 'Team Epsilon', goals: 4 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Top Scorers</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Goals</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {players.map((player, index) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.team}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold">{player.goals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopScorers;