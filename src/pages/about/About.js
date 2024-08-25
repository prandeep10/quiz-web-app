import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <h1>About Our Quiz App</h1>
      <div className="about-content">
        <p>
          Welcome to our Quiz App, a fun and interactive platform designed to challenge your knowledge across various subjects. Whether you're a student looking to test your skills, a teacher seeking a resource for your classroom, or just someone who loves trivia, our app has something for you.
        </p>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Multiple Subjects:</strong> Choose from a wide range of subjects including Math, Science, History, Geography, and General Knowledge.
          </li>
          <li>
            <strong>1-VS-1 Challenges:</strong> Compete against friends or random opponents in real-time to see who can answer more questions correctly.
          </li>
          <li>
            <strong>Discussion Rooms:</strong> Join study groups to discuss topics, share knowledge, and prepare for quizzes together.
          </li>
          <li>
            <strong>Progress Tracking:</strong> Keep track of your scores and progress over time to see how much you've improved.
          </li>
        </ul>
        <h2>Our Mission</h2>
        <p>
          Our mission is to make learning fun and engaging for everyone. We believe that education should be accessible and enjoyable, and our quiz app is designed to provide a dynamic learning experience that adapts to the needs of each user.
        </p>
        <h2>Get Started</h2>
        <p>
          Ready to start quizzing? Sign up today and join a community of learners who are passionate about expanding their knowledge and challenging themselves.
        </p>
      </div>
    </div>
  );
};

export default About;
