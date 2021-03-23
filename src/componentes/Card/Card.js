import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { goToDetalhes } from '../../rotas/Coordenadas'
import fundo from '../../img/layoutFundo.jpg'
import { ContextoPokemon } from '../../contexto/ContextoPokemon'
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
    const dadosPokemons = useContext(ContextoPokemon)
    const history = useHistory()
    const [imgFrontal, setImgFrontal] = useState([])

    const pegaId = (imagemPokemon) => {
        
        const numerodecaracteres = imagemPokemon.length
        if(numerodecaracteres === 79)
        {   
            const numeroId = imagemPokemon.substring(imagemPokemon.lastIndexOf("/")+1).substring(2,0)
            dadosPokemons.setId(numeroId)
        }else{
            const numeroId = imagemPokemon.substring(imagemPokemon.lastIndexOf("/")+1).substring(1,0) 
            dadosPokemons.setId(numeroId)
        }
        
        goToDetalhes(history)
    }

    const addPokemon = (pokemonAddPokedex) => {
        const novaPokedex = [...dadosPokemons.meusPokemons, pokemonAddPokedex]
        dadosPokemons.setMeusPokemons(novaPokedex)
    }
    console.log(dadosPokemons.meusPokemons)

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