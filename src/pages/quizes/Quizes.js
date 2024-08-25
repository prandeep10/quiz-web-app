import React from 'react';
import './Quizes.css';
import { Link } from 'react-router-dom';

const Quizes = () => {
  const quizzes = [
    { name: 'Maths Quiz' },
    { name: 'General Knowledge Quiz' },
    { name: 'Science Quiz' },
    { name: 'History Quiz' },
    { name: 'Geography Quiz' },
  ];

  return (
    <div className="quizes-container">
      <h1>Solve on your own</h1>
      <ul className="quizes-list">
        {quizzes.map((quiz, index) => (
          <li key={index} className="quiz-item">
            <span className="quiz-name">{quiz.name}</span>
            <div className="quiz-buttons">
              <button className="start-button"> <Link to="/1vs1">Start Now</Link></button>
              <button className="details-button">View Details</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Quizes;
