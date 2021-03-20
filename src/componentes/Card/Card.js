import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { goToDetalhes } from '../../rotas/Coordenadas'
import fundo from '../../img/layoutFundo.jpg'
import { 
    ContainerCard, 
    DesignCard, 
    ImgFundoCard, 
    ImgPokemon, 
    Buttons, 
    BotaoAdd, 
    BotaoDetalhes 
} from './CardEstilo'

const Card = () => {
    const history = useHistory()
    const [imgFrontal, setImgFrontal] = useState([])
    const [pokedex, setPokedex] = useState([])
    // const [estouNaPokedex, setEstouNaPokedex] = useState(false)
    // setEstouNaPokedex(localStorage.getItem("estouNaPokedex"))

    const pegaId = (imagemPokemon) => {
        const numerodecaracteres = imagemPokemon.length
        if(numerodecaracteres === 79)
        {   
            const numeroId = imagemPokemon.substring(imagemPokemon.lastIndexOf("/")+1).substring(2,0)
            localStorage.setItem("idPokemon", numeroId)
        }else{
            const numeroId = imagemPokemon.substring(imagemPokemon.lastIndexOf("/")+1).substring(1,0) 
            localStorage.setItem("idPokemon", numeroId) 
        }
        
        goToDetalhes(history)
    }

    const addPokemon = (pokemon) => {
        const novoPokemon = pokemon
        setPokedex(pokedex => [...pokedex, novoPokemon])
        localStorage.setItem("Pokedex", pokedex)
    }

    const pegaImgs = () => {
        let i = 1
        for (i = 1; i <= 20; i++) {
            const novaimg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
            setImgFrontal(imgFrontal => [...imgFrontal, novaimg])
        }
    }

    useEffect(() => {
        pegaImgs()
    }, [])


    return (
        <ContainerCard>
            {/* {estouNaPokedex ? (
                imgFrontal.map((imagemPokemon) => {
                
                    return (
                        <DesignCard>
                            <ImgFundoCard src={fundo} />
                            <ImgPokemon src={imagemPokemon} />
                            <Buttons>
                                <BotaoAdd onClick={() => addPokemon(imagemPokemon)}>Adicionar</BotaoAdd>
                                <BotaoDetalhes onClick={() => pegaId(imagemPokemon)}>Ver Detalhes</BotaoDetalhes>
                            </Buttons>
                        </DesignCard>
                    )
                })
            ):(
                pokedex.map((pokemon) => {
                
                    return (
                        <DesignCard>
                            <ImgFundoCard src={fundo} />
                            <ImgPokemon src={pokemon} />
                            <Buttons>
                                <BotaoAdd onClick={() => addPokemon(pokemon)}>Adicionar</BotaoAdd>
                                <BotaoDetalhes onClick={() => pegaId(pokemon)}>Ver Detalhes</BotaoDetalhes>
                            </Buttons>
                        </DesignCard>
                    )
                })
            )} */}
            {imgFrontal.map((imagemPokemon) => {
                
                return (
                    <DesignCard>
                        <ImgFundoCard src={fundo} />
                        <ImgPokemon src={imagemPokemon} />
                        <Buttons>
                            <BotaoAdd onClick={() => addPokemon(imagemPokemon)}>Adicionar</BotaoAdd>
                            <BotaoDetalhes onClick={() => pegaId(imagemPokemon)}>Ver Detalhes</BotaoDetalhes>
                        </Buttons>
                    </DesignCard>
                )
            })
        }
        </ContainerCard>
    )
}

export default Card