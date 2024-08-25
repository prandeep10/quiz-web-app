import React from 'react';
import './Reward.css';
import { FaCoins } from 'react-icons/fa';
import { GiTrophy } from 'react-icons/gi';
import { MdRedeem } from 'react-icons/md';

const rewardsData = [
  { id: 1, activity: 'Math Quiz', coins: 50, icon: <FaCoins /> },
  { id: 2, activity: 'Science Quiz', coins: 70, icon: <GiTrophy /> },
  { id: 3, activity: 'Daily Login Bonus', coins: 20, icon: <FaCoins /> },
  { id: 4, activity: 'Challenge Win', coins: 100, icon: <GiTrophy /> },
];

const Reward = () => {
  const totalCoins = parseInt(localStorage.getItem('coins')) || 0;

  return (
    <div className="reward-container">
      <h1>Your Rewards</h1>
      <div className="total-coins">
        <h2>Total Coins: {totalCoins} <FaCoins /></h2>
      </div>
      <div className="rewards-list">
        {rewardsData.map((reward) => (
          <div key={reward.id} className="reward-item">
            <div className="reward-icon">{reward.icon}</div>
            <div className="reward-details">
              <h2>{reward.activity}</h2>
              <p>{reward.coins} coins</p>
            </div>
          </div>
        ))}
      </div>
      <button className="redeem-button">
        <MdRedeem /> Redeem Coins
      </button>
    </div>
  );
};

export default Reward;
