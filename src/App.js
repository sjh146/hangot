import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Bulletinboard from './Bulletinboard';
import Information from'./Information';
import Main from './Main.js';
import Sightseeing from './Sightseeing';
import Waytohangot from './WayToHangot';
import Header from './Header';
import Makingprocess from './Makingprocess';
const App = () => {
	return (
    
<>  
    <div className="hangot"><h1>한갓</h1></div>
    <Main />
    
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Header />}></Route>
      <Route path="/Sightseeing/" element={<Sightseeing />}></Route>
      <Route path="/Waytohangot/" element={<Waytohangot />}></Route>
      <Route path="/Information/" element={<Information />}></Route>
      <Route path="/Bulletinboard/" element={<Bulletinboard />}></Route>
      <Route path="/Makingprocess/" element={<Makingprocess />}></Route>
    </Routes>
   </BrowserRouter>
   </>
	);
}

export default App;

