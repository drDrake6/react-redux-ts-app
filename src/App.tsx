import React from 'react';
import './styles/App.css'
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';

const App: React.FC = () => {
  return (
    <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
  );
};

export default App;