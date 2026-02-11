// src/pages/guest/TeamMembers.jsx
import React, { useState } from 'react';

const TeamMembers = () => {
  // Sample team data
  const teams = [
    { id: 1, name: 'Team Alpha' },
    { id: 2, name: 'Team Beta' },
    { id: 3, name: 'Team Gamma' },
    { id: 4, name: 'Team Delta' },
  ];

  // Sample player data 
  const allPlayers = [
    { id: 1, name: 'John Doe', position: 'Forward', teamId: 1 },
    { id: 2, name: 'Jane Smith', position: 'Midfielder', teamId: 1 },
    { id: 3, name: 'Bob Johnson', position: 'Defender', teamId: 1 },
    { id: 4, name: 'Alice Williams', position: 'Goalkeeper', teamId: 1 },
    { id: 5, name: 'Charlie Brown', position: 'Forward', teamId: 2 },
    { id: 6, name: 'Diana Prince', position: 'Midfielder', teamId: 2 },
    { id: 7, name: 'Ethan Hunt', position: 'Defender', teamId: 2 },
    { id: 8, name: 'Fiona Gallagher', position: 'Goalkeeper', teamId: 2 },
    { id: 9, name: 'George Lucas', position: 'Forward', teamId: 3 },
    { id: 10, name: 'Hannah Montana', position: 'Midfielder', teamId: 3 },
    { id: 11, name: 'Ian Malcolm', position: 'Defender', teamId: 3 },
    { id: 12, name: 'Julia Roberts', position: 'Goalkeeper', teamId: 3 },
    { id: 13, name: 'Kevin Hart', position: 'Forward', teamId: 4 },
    { id: 14, name: 'Laura Dern', position: 'Midfielder', teamId: 4 },
    { id: 15, name: 'Michael Jordan', position: 'Defender', teamId: 4 },
    { id: 16, name: 'Nancy Wheeler', position: 'Goalkeeper', teamId: 4 },
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0].id);

  const teamPlayers = allPlayers.filter(player => player.teamId === selectedTeam);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      
      <div className="mb-6">
        <label htmlFor="team-select" className="block text-sm font-medium text-gray-700 mb-2">
          Select Team
        </label>
        <select
          id="team-select"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(Number(e.target.value))}
        >
          {teams.map((team) => (
            <option key={team.id} value={team.id}>
              {team.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teamPlayers.map((player) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TeamMembers;