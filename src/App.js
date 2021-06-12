import React from 'react';
import './styles/main.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='w-screen h-screen bg-gray-100'>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
