import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import NumberDetector from './Components/NumberDetector';
import PrivateRoute from './PrivateRoute';
import { signOut } from './Auth';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const clear = () => setCount(0);

  const handleLogout = () => {
    signOut();
    window.location.href = '/login'; 
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<PrivateRoute><NumberDetector count={count} setCount={setCount} increment={increment} decrement={decrement} clear={clear} handleLogout={handleLogout} /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
