import React from 'react'
import Router from './rotas/Router'
import { ContextoPokemon } from './contexto/ContextoPokemon';
import listaTotalPokemons from './hooks/usePokemons'

export default function App() {
  const dadosPokemons = listaTotalPokemons()
  return (
    <ContextoPokemon.Provider value={dadosPokemons}>
      <Router />
    </ContextoPokemon.Provider>
  )
}