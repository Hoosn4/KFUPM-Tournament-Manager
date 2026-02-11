// src/pages/guest/MatchResults.jsx
import React from 'react';

const MatchResults = () => {
  // Sample match data 
  const matches = [
    { id: 1, date: '2023-04-15', homeTeam: 'Team Alpha', awayTeam: 'Team Beta', homeScore: 3, awayScore: 1 },
    { id: 2, date: '2023-04-16', homeTeam: 'Team Gamma', awayTeam: 'Team Delta', homeScore: 2, awayScore: 2 },
    { id: 3, date: '2023-04-17', homeTeam: 'Team Epsilon', awayTeam: 'Team Zeta', homeScore: 0, awayScore: 1 },
    { id: 4, date: '2023-04-18', homeTeam: 'Team Eta', awayTeam: 'Team Theta', homeScore: 4, awayScore: 0 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Match Results</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Home Team</th>
              <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Away Team</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {matches.map((match) => (
              <tr key={match.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{match.date}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{match.homeTeam}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-center font-bold">
                  {match.homeScore} - {match.awayScore}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{match.awayTeam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MatchResults;