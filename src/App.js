import React from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Summary from './pages/Summary/Summary';
import Goal from "./pages/table/Goal";
 import Home from './pages/Home';
import Balance from './pages/table/left/Balance';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home/>} />
        <Route path="Goal" element={<Goal/> } />
        <Route path="Balance" element={<Balance/>} />
        <Route path="Summary" element={<Summary/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
