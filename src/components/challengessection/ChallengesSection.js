import React from 'react';
import './ChallengesSection.css';
import { FaUser, FaUsers, FaTrophy } from 'react-icons/fa';

const ChallengesSection = () => {
  return (
    <div className='challenges-section'>
      <h1>Challenges</h1>
      <div className="challengess-container">
        <button className="challenge-card" >
          <FaUser className="icon" /> 1-VS-1
        </button>
        <button className="challenge-card">
          <FaUsers className="icon" /> 1-VS-ALL
        </button>
        <button className="challenge-card">
          <FaTrophy className="icon" /> Exam League
        </button>
        <button className="challenge-card">
          <FaUser className="icon" /> Practice
        </button>
      </div>
    
    </div>
  )
}

export default ChallengesSection