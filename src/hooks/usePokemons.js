import React, { useState } from 'react'
import axios from 'axios'

const usePokemons = () => {
    const [nomePokemons, setNomePokemons] = useState("")
    const [imgFrontal, setImgFrontal] = useState("")
    const [imgTras, setImgTras] = useState("")

    axios
    .get("https://pokeapi.co/api/v2/pokemon-form/1/")
    .then((resposta) => {
        setNomePokemons(resposta.data.name)
        setImgFrontal(resposta.data.sprites.front_default)
        setImgTras(resposta.data.sprites.back_default)
       
    })
    .catch((erro) => {
        console.log(erro)
    })

    const detalhesPokemons = {
        nome: nomePokemons,
        imagemFrontal: imgFrontal,
        imagemTrazeira: imgTras
    }


    return detalhesPokemons
}

export default usePokemons