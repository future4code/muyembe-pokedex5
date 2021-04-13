import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex/Pokedex'
import Detalhes from '../pages/Detalhes/Detalhes'
import Erro from '../pages/Erro/Erro'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/pokedex">
                    <Pokedex />
                </Route>
                <Route exact path="/detalhes">
                    <Detalhes />
                </Route>
                <Route>
                    <Erro />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router