import React from 'react'
import Router from './rotas/Router'
import { ContextoPokemon } from './contexto/ContextoPokemon';
import listaPokemons from './hooks/usePokemons'

export default function App() {
  const dadosPokemons = listaPokemons()
  return (
    <ContextoPokemon.Provider value={dadosPokemons}>
      <Router />
    </ContextoPokemon.Provider>
  )
}