import './App.css';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Portfolio_1_bg  from './media/portfolio/1_bg.png';
import PortfolioProject from './PortfolioProject';
import Template_1 from './Template_1/Components/Home';


import Demo_5_car from './media/portfolio/5_bg.png';
import React from 'react';

import axios from 'axios';

import AboutUs from './Template_1/Components/AboutUs';
import CamerePage from './Template_1/Components/CamerePage';
import ContactPage from './Template_1/Components/Contact';
import AgrementComponent from './Template_1/Components/AgrementComponent';

function App() {
 
  React.useEffect(()=>{
    console.log("entry useEffect")
    let magnusLink = 'https://api.countapi.xyz/hit/magnus-team.com/awesomeclick'
    if(window.localStorage.getItem('oldVisitor') === null)
    {
      console.log("case 1")
      axios.get(magnusLink)
      .then((resp)=>{
        window.localStorage.setItem('oldVisitor',true)
      })
      .catch((err)=>{
        console.log("err")
      })
    }
    else 
    {
      console.log("case 2:",window.localStorage.getItem('oldVisitor'))
    }
  })
  return(
    <BrowserRouter>
      <Routes>
         
          <Route path="/" element={<Template_1/>}/>
          <Route path="/despre" element={<AboutUs/>}/>
          <Route path="/camere" element={<CamerePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          
          <Route path="/parcul-calimani" element={<AgrementComponent indexPointer={0}/>}/>
          <Route path="/partia-dealul-negru" element={<AgrementComponent indexPointer={1}/>}/>
          
          {/*Statistici*/}
          {/* <Route path="/x" element={<Visitors />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
