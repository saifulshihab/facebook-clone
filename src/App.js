import React from 'react';
import './App.css';
import './assets/styles/Home.css';

import { BrowserRouter as Router } from 'react-router-dom';
import Main from './Components/MainComponent';

function App() {
  return (
    <div>
      <Router>
        <Main />
      </Router>
    </div>
  );
}

export default App;
