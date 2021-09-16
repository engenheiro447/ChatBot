import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import PrimeiroAcesso1 from './Components/PrimeiroAcesso1';
import PrimeiroAcesso2 from './Components/PrimeiroAcesso2';
import PrimeiroAcesso3 from './Components/PrimeiroAcesso3';

export default ()=>{

    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/boasvindas">
                <PrimeiroAcesso1/>
            </Route>
            <Route exact path="/boasvindas2">
                <PrimeiroAcesso2/>
            </Route>
            <Route exact path="/boasvindas3">
                <PrimeiroAcesso3/>
            </Route>


        </Switch>
    );
}