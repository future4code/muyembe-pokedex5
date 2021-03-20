import React from 'react'
import Estatisticas from '../../componentes/Estatisticas/Estatisticas'
import Header from '../../componentes/Header/Header'
import ImagensPokemons from '../../componentes/ImagensPokemons/ImagensPokemons'
import TipoEMovimento from '../../componentes/TipoEMovimento/TipoEMovimento'
import { Container, ContainerCard } from './DetalhesEstilo'

const Detalhes = () => {
    return (
        <Container>
            <Header />
            <ContainerCard>
                <ImagensPokemons />
                <Estatisticas />
                <TipoEMovimento />
            </ContainerCard>
        </Container>
    )
}

export default Detalhes