import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Routes  from './Routes';
import Home from './Components/Home.js';

const App = () =>{
   return(
    <BrowserRouter>

     <Routes/>

    </BrowserRouter>
   )
}

export default App;