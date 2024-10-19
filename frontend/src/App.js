import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Page3 from './components/Page3';
import EntryDescription from './components/EntryDescription';
import ChefChat from './components/ChefChat';
import CallPage from './components/CallPage'; // Import the CallPage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/camera" element={<Page3 />} />
        <Route path="/entry-description" element={<EntryDescription />} />
        <Route path="/chef-chat" element={<ChefChat />} />
        <Route path="/call" element={<CallPage />} /> {/* Add route for CallPage */}
      </Routes>
    </Router>
  );
};

export default App;
