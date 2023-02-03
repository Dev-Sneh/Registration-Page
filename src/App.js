import './App.css';
import React from 'react';
import Login from './Authentication/Login'
import Register from './Authentication/Register'
import Error from './Authentication/Error';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Empty from './Authentication/Empty';
export const LogedIn = React.createContext();

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Empty" element={<Empty />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
