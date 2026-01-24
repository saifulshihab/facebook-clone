import React from 'react';
import './App.css';
import MainLayout from './components/layouts/MainLayout';
import Routers from './routes/Router';

const App: React.FC = () => {
  return (
    <MainLayout>
      <Routers />
    </MainLayout>
  );
};

export default App;
