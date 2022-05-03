import React from "react";
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from "./home";
import DayPic from "./dayPic";



const App = () => {
  return (
    < BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/daypic' element={<DayPic />} />
      </ Routes>
    </ BrowserRouter>
  );
}

export default App;
