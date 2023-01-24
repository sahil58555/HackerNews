import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';

import React, { useEffect, useState } from 'react'
import Search from './Components/Search';
import {Route, Routes} from 'react-router-dom';
import Home from './Components/Home';

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
      </Routes>
    </div>
  );
}

export default App;
