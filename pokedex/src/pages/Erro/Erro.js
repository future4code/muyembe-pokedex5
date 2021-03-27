import React from 'react'
import charmander from '../../img/charmanderErro.gif'
import styled from 'styled-components'

const ImgErro = styled.img`
    width: 100%;
    position: relative;
    top: 0;
    right: 0;
`
const MsgErro = styled.h1`
    position: absolute;
    top: 100px;
    right: 30%;
    z-index: 1;
    color: white;
`

const Erro = () => {
    return(
        <div>
            <MsgErro>Esta página não existe</MsgErro>
            <ImgErro src={charmander} />
        </div>
    )
}

export default Erro