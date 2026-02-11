// src/pages/admin/Teams.jsx
import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const Teams = () => {
  // Sample team data
  const [teams, setTeams] = useState([
    { id: 1, name: 'Eagles FC', tournament: 'Spring Cup 2025', captain: 'Ahmed Ali', players: 15 },
    { id: 2, name: 'Falcons United', tournament: 'Spring Cup 2025', captain: 'Khalid Omar', players: 14 },
    { id: 3, name: 'Lions SC', tournament: 'Spring Cup 2025', captain: 'Not Selected', players: 12 },
  ]);

  // Sample pending players data
  const [pendingPlayers, setPendingPlayers] = useState([
    { id: 1, name: 'Mohammed Saleh', team: 'Lions SC', position: 'Defender', status: 'Pending' },
    { id: 2, name: 'Abdullah Fahad', team: 'Lions SC', position: 'Goalkeeper', status: 'Pending' },
  ]);

  const handleApprovePlayer = (id) => {
    setPendingPlayers(pendingPlayers.filter(player => player.id !== id));
  };

  const handleRejectPlayer = (id) => {
    setPendingPlayers(pendingPlayers.filter(player => player.id !== id));
  };

  const handleApproveAll = () => {
    setPendingPlayers([]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Teams</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
          Add Team to Tournament
        </button>
      </div>
      
      {/* Teams Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden mb-8">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tournament</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Captain</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Players</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.tournament}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.captain}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.players}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    Select Captain
                  </button>
                  <button className="text-green-600 hover:text-green-800">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pending Player Approvals Section */}
      <div className="mt-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Pending Player Approvals</h2>
          {pendingPlayers.length > 0 && (
            <button 
              onClick={handleApproveAll}
              className="bg-green-600 text-white px-4 py-2 rounded-md"
            >
              Approve All
            </button>
          )}
        </div>
        
        {pendingPlayers.length > 0 ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {pendingPlayers.map((player) => (
                  <tr key={player.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.team}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.position}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        {player.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <button 
                        onClick={() => handleApprovePlayer(player.id)}
                        className="text-green-600 hover:text-green-800 mr-3"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleRejectPlayer(player.id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow p-6 text-center text-gray-500">
            No pending player approvals
          </div>
        )}
      </div>
    </div>
  );
};

export default Teams;