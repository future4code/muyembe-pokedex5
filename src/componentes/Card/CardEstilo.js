import styled from 'styled-components'

export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    width: 900px;
`

export const DesignCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    border: 2px solid black;
    border-radius: 5px;

    width: 200px;
    margin: 10px;

    background-color: #49D0B0;
`

export const ImgFundoCard = styled.img`
    position: relative;
    width: 200px;
`

export const ImgPokemon = styled.img`
    z-index: 1;
    width: 200px;
    margin-top: -200px;
    margin-bottom: 20px;
    padding: 20px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -50px;
`

export const BotaoAdd = styled.button`
    z-index: 1;
    width: 100px;
    height: 30px;
`

export const BotaoDetalhes = styled.button`
    z-index: 1;
    width: 100px;
    height: 30px;
`