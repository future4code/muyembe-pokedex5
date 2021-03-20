import React from 'react'
import Router from './rotas/Router'
import { ContextoPokemon } from './contexto/ContextoPokemon';
import detalhesPokemons from './hooks/usePokemons'

export default function App() {
  const dadosPokemons = detalhesPokemons()
  return (
    <ContextoPokemon.Provider value={dadosPokemons}>
      <Router />
    </ContextoPokemon.Provider>
  )
}