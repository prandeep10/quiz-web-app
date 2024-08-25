import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaUsers, FaTrophy } from 'react-icons/fa';
import PopupOverlay from './PopupOverlay';
import './Challenges.css';

const Challenges = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('loggedin');
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [navigate]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='challenges-section'>
      <h1>Challenges</h1>
      <div className="challenges-container">
        <button className="challenge-card" onClick={openModal}>
          <FaUser className="icon" /> 1-VS-1
        </button>
        <button className="challenge-card" onClick={openModal}>
          <FaUsers className="icon" /> 1-VS-ALL
        </button>
        <button className="challenge-card" onClick={openModal}>
          <FaTrophy className="icon" /> Exam League
        </button>
        <button className="challenge-card" onClick={openModal}>
          <FaUser className="icon" /> Practice
        </button>
      </div>
      <PopupOverlay isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default Challenges;
