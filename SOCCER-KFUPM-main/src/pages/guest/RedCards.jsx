// src/pages/guest/RedCards.jsx
import React, { useState } from 'react';

const RedCards = () => {
  const [teams, setTeams] = useState([
    { id: 1, name: 'Eagles FC' },
    { id: 2, name: 'Falcons United' },
    { id: 3, name: 'Lions SC' }
  ]);
  
  const [selectedTeam, setSelectedTeam] = useState('');
  
  const [players, setPlayers] = useState([
    { id: 1, name: 'Ahmed Ali', team: 'Eagles FC', position: 'Forward', redCards: 0 },
    { id: 2, name: 'Khalid Omar', team: 'Falcons United', position: 'Midfielder', redCards: 1 },
    { id: 3, name: 'Mohammed Saleh', team: 'Lions SC', position: 'Defender', redCards: 2 },
    { id: 4, name: 'Abdullah Fahad', team: 'Lions SC', position: 'Goalkeeper', redCards: 0 },
    { id: 5, name: 'Saad Alshammari', team: 'Falcons United', position: 'Forward', redCards: 1 },
    { id: 6, name: 'Fahad Alqahtani', team: 'Eagles FC', position: 'Defender', redCards: 1 }
  ]);
  
  const handleTeamChange = (e) => {
    setSelectedTeam(e.target.value);
  };
  
  // Filter players by team and red cards
  const filteredPlayers = selectedTeam 
    ? players
        .filter(player => player.team === selectedTeam && player.redCards > 0)
    : players
        .filter(player => player.redCards > 0);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Players with Red Cards</h2>
      
      <div className="bg-white rounded-lg shadow p-6 mb-6">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Team</label>
          <select
            value={selectedTeam}
            onChange={handleTeamChange}
            className="w-full md:w-64 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Teams</option>
            {teams.map(team => (
              <option key={team.id} value={team.name}>{team.name}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Player</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Red Cards</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{player.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.team}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.position}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    {player.redCards}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {filteredPlayers.length === 0 && (
          <div className="px-6 py-4 text-center text-gray-500">
            No players with red cards found for the selected team.
          </div>
        )}
      </div>
    </div>
  );
};

export default RedCards;