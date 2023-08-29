import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Missions from './pages/missions';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
