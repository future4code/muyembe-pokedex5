import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerEstatisticas = styled.div`
    border: 1px solid black;
    margin: 5px;
    padding: 10px;
    height: 380px;
`

const Estatisticas = () => {
    const [ataque, setAtaque] = useState("")
    const [defesa, setDefesa] = useState("")
    const id = localStorage.getItem("idPokemon")

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/nature/${id}/`)
            .then((resposta) => {
                setAtaque(resposta.data.move_battle_style_preferences.[0].high_hp_preference)
                setDefesa(resposta.data.move_battle_style_preferences.[1].high_hp_preference)
            })
            .catch((erro) => {
                console.log(erro)
            })
    }, [])

    return (
        <ContainerEstatisticas>
            <h3>Estatísticas</h3>
            <p>HP: 46</p>
            <p>Ataque: {ataque}</p>
            <p>Defesa: {defesa}</p>
            <p>Ataque-Especial: 43</p>
            <p>Defesa-Especial: 54</p>
            <p>Velocidade: 54</p>
        </ContainerEstatisticas>
    )
}

export default Estatisticas
