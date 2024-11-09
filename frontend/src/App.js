import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfileForm from './pages/ProfileForm';
import ProfileDisplay from './pages/ProfileDisplay';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<ProfileForm />} />
            <Route path="/profile" element={<ProfileDisplay />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
