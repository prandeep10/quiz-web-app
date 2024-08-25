import React, { useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './PopupOverlay.css';

const PopupOverlay = ({ isOpen, onRequestClose }) => {
  const [subject, setSubject] = useState('Physics');
  const [numQuestions, setNumQuestions] = useState(10);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/1vs1', { state: { subject, numQuestions, difficulty } });
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Challenge Settings"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Select Challenge Settings</h2>
      <label>
        Subject:
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Biology">Biology</option>
        </select>
      </label>
      <label>
        Number of Questions:
        <select value={numQuestions} onChange={(e) => setNumQuestions(parseInt(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </label>
      <label>
        Difficulty Level:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>
      <button onClick={handleSubmit}>Start Challenge</button>
      <button onClick={onRequestClose}>Cancel</button>
    </Modal>
  );
};

export default PopupOverlay;
