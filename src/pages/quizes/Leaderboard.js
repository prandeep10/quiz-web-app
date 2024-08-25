// Leaderboard.js
import React from 'react';

const Leaderboard = ({ score }) => {
  // Array of random Indian names for leaderboard
  const indianNames = [
    'Ramesh Kumar',
    'Sunita Patel',
    'Amit Singh',
    'Priya Sharma',
    'Vikas Yadav',
    'Pooja Gupta',
    'Rajesh Tiwari',
    'Anjali Mishra',
    'Sunil Kumar',
    'Divya Singh',
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <ol>
        {indianNames.map((name, index) => (
          <li key={index}>
            {name} - {score}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Leaderboard;
