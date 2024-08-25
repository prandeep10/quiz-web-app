import React from 'react'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/Home';
import Challenges from './pages/challenges/Challenges';
import Quizes from './pages/quizes/Quizes';
import QuizPage from './pages/quizes/1vs1Quiz';
import Discussion from './pages/discussion/Discussion';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Reward from './pages/reward/Reward';
import Login from './pages/login/Login';

const App = () => {
  const isLoggedIn = localStorage.getItem('loggedin') === 'true';
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/challenges" element={<Challenges/>} />
      <Route path="/quizes" element={<Quizes/>} />
      <Route path="/1vs1" element={<QuizPage/>} />
      <Route path="/discussion" element={<Discussion/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/rewards" element={<Reward/>} />
      <Route path="/login" element={<Login/>} />

      <Route path="/" render={() => (isLoggedIn ? <Home /> : <Link to="/login" />)} />
    </Routes>
  </Router>
  )
}

export default App