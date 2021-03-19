import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pokedex from '../pages/Pokedex/Pokedex'
import Detalhes from '../pages/Detalhes/Detalhes'
import Erro from '../pages/Erro/Erro'
import ContextoPokemon from '../contexto/ContextoPokemon'

const Router = () => {
    return (
        <BrowserRouter>
            <ContextoPokemon.Provider>
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
            </ContextoPokemon.Provider>
        </BrowserRouter>
    )
}

export default Router