import { useState } from 'react'
import axios from 'axios'

const usePokemons = () => {
    const [id, setId] = useState("")
    const [nome, setNome] = useState("")
    const [imagemFrontal, setImagemFrontal] = useState("")
    const [imagemTrazeira, setImagemTrazeira] = useState("")
    const [hp, setHP] = useState("")
    const [ataque, setAtaque] = useState("")
    const [defesa, setDefesa] = useState("")
    const [ataqueEspecial, setAtaqueEspecial] = useState("")
    const [defesaEspecial, setDefesaEspecial] = useState("")
    const [velocidade, setVelocidade] = useState("")
    const [tipo1, setTipo1] = useState("")
    const [tipo2, setTipo2] = useState("")
    const [movimento1, setMovimento1] = useState("")
    const [movimento2, setMovimento2] = useState("")
    const [movimento3, setMovimento3] = useState("")

    const [meusPokemons, setMeusPokemons] = useState([])
    const [listaPokemons, setListaPokemons] = useState("")

    axios
        .get(`https://pokeapi.co/api/v2/pokemon`)
        .then((resposta) => {
            const array = resposta.data.results
            const tamanhoArray = array.length
            for (let id = 1; id <= tamanhoArray; id++) {

                axios
                    .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
                    .then((resposta) => {
                        setNome(resposta.data.forms.[0].name)
                        setTipo1(resposta.data.types.[0].type.name)
                        setTipo2(resposta.data.types.[1].type.name)
                        setHP(resposta.data.stats.[0].base_stat)
                        setAtaque(resposta.data.stats.[1].base_stat)
                        setDefesa(resposta.data.stats.[2].base_stat)
                        setAtaqueEspecial(resposta.data.stats.[3].base_stat)
                        setDefesaEspecial(resposta.data.stats.[4].base_stat)
                        setVelocidade(resposta.data.stats.[5].base_stat)
                        setMovimento1(resposta.data.moves.[0].move.name)
                        setMovimento2(resposta.data.moves.[1].move.name)
                        setMovimento3(resposta.data.moves.[2].move.name)
                        setImagemFrontal(resposta.data.sprites.front_default)
                        setImagemTrazeira(resposta.data.sprites.back_default)

                        const detalhesPokemons = {
                            id,
                            setId,
                            nome,
                            imagemFrontal,
                            imagemTrazeira,
                            hp,
                            ataque,
                            defesa,
                            ataqueEspecial,
                            defesaEspecial,
                            velocidade,
                            tipo1,
                            tipo2,
                            movimento1,
                            movimento2,
                            movimento3,
                            meusPokemons,
                            setMeusPokemons
                        }

                        setListaPokemons(listaPokemons => [...listaPokemons, detalhesPokemons])

                    })
                    .catch((erro) => {
                        console.log(erro.response)
                    })
            }
        })
        .catch((erro) => {
            console.log(erro.response)
        })







    return listaPokemons
}

export default usePokemons