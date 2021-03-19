import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToDetalhes } from '../../rotas/Coordenadas'
import fundo from '../../img/layoutFundo.jpg'
import { ContainerCard, DesignCard, ImgFundoCard, ImgPokemon, Buttons, BotaoAdd, BotaoDetalhes } from './CardEstilizacao'

const Card = () => {
    const history = useHistory()
    const [imgFrontal, setImgFrontal] = useState([])

    const pegaId = (id) => {
        localStorage.setItem("idPokemon", id)
        goToDetalhes(history)
    }

    const pegaImgs = () => {
        let i = 1
        for (i = 1; i <= 20; i++) {
            axios
                .get(`https://pokeapi.co/api/v2/pokemon-form/${i}/`)
                .then((resposta) => {
                    const novaimg = (resposta.data.sprites.front_default)
                    setImgFrontal(imgFrontal => [...imgFrontal, novaimg])
                })
                .catch((erro) => {
                    console.log(erro)
                })
        }
        const imagensPokemons = [...new Set(imgFrontal)]
        return imagensPokemons

    }

    useEffect(() => {
        pegaImgs()
    }, [])


    return (
        <ContainerCard>
            {imgFrontal.map((imagemPokemon) => {
                var id = (imagemPokemon.substring(imagemPokemon.lastIndexOf("/")+1).substr(0,1))
                return (
                    <DesignCard>
                        <ImgFundoCard src={fundo} />
                        <ImgPokemon src={imagemPokemon} />

                        <Buttons>
                            <BotaoAdd>Adicionar</BotaoAdd>
                            <BotaoDetalhes onClick={() => pegaId(id)}>Ver Detalhes</BotaoDetalhes>
                        </Buttons>
                    </DesignCard>
                )
            })}

        </ContainerCard>
    )
}

export default Card