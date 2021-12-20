import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import PrimeiroAcesso1 from './Components/PrimeiroAcesso1';
import PrimeiroAcesso2 from './Components/PrimeiroAcesso2';
import PrimeiroAcesso3 from './Components/PrimeiroAcesso3';
import AlterarSenhaAcesso1 from './Components/AlterarSenhaAcesso1';
import Dashboard from './Components/Dashboard';
import ProdutosServicos from './Components/ProdutosServicos';
import PerguntaseRespostas from './Components/PerguntaseRespostas';

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
            <Route exact path="/alterarsenha">
                <AlterarSenhaAcesso1/>
            </Route>
            <Route exact path="/dashboard">
                <Dashboard/>
            </Route>
            <Route exact path="/produtosservicos">
                <ProdutosServicos/>
            </Route>
            <Route exact path="/perguntaserespostas">
                <PerguntaseRespostas/>
            </Route>



        </Switch>
    );
}