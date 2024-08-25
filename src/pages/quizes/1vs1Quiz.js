import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaCoins } from 'react-icons/fa';
import { questions } from './questions';
import './1vs1Quiz.css';

const QuizPage = () => {
  const location = useLocation();
  const { subject, numQuestions, difficulty } = location.state || {};

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for the timer
  const [opponentScore, setOpponentScore] = useState(0);
  const [showOpponentScore, setShowOpponentScore] = useState(false);

  const selectedQuestions = questions[subject][difficulty].slice(0, numQuestions);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    const opponentTimer = setInterval(() => {
      if (opponentScore < numQuestions) {
        setOpponentScore(prevScore => prevScore + (Math.random() < 0.6 ? 1 : 0)); // 60% chance of increment
      }
      setShowOpponentScore(true);
      const opponentTimeout = setTimeout(() => setShowOpponentScore(false), 3000);
      return () => clearTimeout(opponentTimeout); // Cleanup function to clear the timeout
    }, 5000);

    return () => {
      clearInterval(timer);
      clearInterval(opponentTimer);
    };
  }, [opponentScore, numQuestions]);

  const handleAnswerSubmit = () => {
    if (selectedOption === selectedQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  if (timeLeft === 0 || currentQuestionIndex >= selectedQuestions.length) {
    const coins = score * 10;
    const previousCoins = parseInt(localStorage.getItem('coins')) || 0;
    const totalCoins = previousCoins + coins;
    localStorage.setItem('coins', totalCoins);

    return (
      <div className="quiz-container">
        <div className="quiz-content">
          <h1>Quiz Over</h1>
          <p>Your Score: {score}</p>
          <p>Opponent's Score: {opponentScore}</p>
          <p>
            You have earned: <span className="coins">{coins} <FaCoins /></span>
          </p>
          
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-content">
        <h1>1-VS-1 {subject} Quiz</h1>
        <div className="scores">
          <div>Your Score: {score}</div>
          <div>Opponent's Score: {opponentScore}</div>
        </div>
        {showOpponentScore && <div className="opponent-popup">Opponent scored the question already</div>}
        <div className="timer">Time Left: {timeLeft}s</div>
        <div className="question-container">
          <h2>{selectedQuestions[currentQuestionIndex].question}</h2>
          <div className="options">
            {selectedQuestions[currentQuestionIndex].options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />
                {option}
              </label>
            ))}
          </div>
          <button onClick={handleAnswerSubmit}>Submit Answer</button>
        </div>
        <div className="score">Your Score: {score}</div>
      </div>
    </div>
  );
};

export default QuizPage;
