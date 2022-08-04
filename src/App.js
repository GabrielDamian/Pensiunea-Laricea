import './App.css';
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import Template_1 from './Template_1/Components/Home';


import React from 'react';

import axios from 'axios';

import AboutUs from './Template_1/Components/AboutUs';
import CamerePage from './Template_1/Components/CamerePage';
import ContactPage from './Template_1/Components/Contact';
import AgrementComponent from './Template_1/Components/AgrementComponent';

function App() {
  return(
    <BrowserRouter>
      <Routes>
         
          <Route path="/" element={<Template_1/>}/>
          <Route path="/despre" element={<AboutUs/>}/>
          <Route path="/camere" element={<CamerePage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          
          <Route path="/parcul-calimani" element={<AgrementComponent indexPointer={0}/>}/>
          <Route path="/partia-dealul-negru" element={<AgrementComponent indexPointer={1}/>}/>
          <Route path="/agrement" element={<AgrementComponent indexPointer={2}/>}/>
          
          {/*Statistici*/}
          {/* <Route path="/x" element={<Visitors />}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
