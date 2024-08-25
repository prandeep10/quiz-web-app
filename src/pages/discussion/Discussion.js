import React, { useState } from 'react';
import './Discussion.css';

const groups = ['Math', 'Science', 'History', 'Geography', 'General Knowledge'];

const Discussion = () => {
  const [selectedGroup, setSelectedGroup] = useState(groups[0]);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleGroupChange = (group) => {
    setSelectedGroup(group);
    setMessages([]); // Reset messages when changing groups
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      setMessages([...messages, { group: selectedGroup, text: newMessage, sender: 'You' }]);
      setNewMessage('');
    }
  };

  return (
    <div className="discussion-container">
      <h1>Discussion Room</h1>
      <div className="discussion-content">
        <div className="group-list">
          <h2>Study Groups</h2>
          <ul>
            {groups.map(group => (
              <li
                key={group}
                className={group === selectedGroup ? 'active' : ''}
                onClick={() => handleGroupChange(group)}
              >
                {group}
              </li>
            ))}
          </ul>
        </div>
        <div className="chat-section">
          <h2>{selectedGroup} Group</h2>
          <div className="messages">
            {messages.length > 0 ? (
              messages.map((msg, index) => (
                <div key={index} className="message">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))
            ) : (
              <div className="no-messages">No messages yet. Start the discussion!</div>
            )}
          </div>
          <div className="message-input">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discussion;
