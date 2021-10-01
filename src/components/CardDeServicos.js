import React from 'react'
import styled from 'styled-components'

const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 4px;
    width: 250px;
    padding: 8px;
    font-family: Arial;
`

const TituloCards = styled.div`
    font-size: 18px;
`

const PrecoCards = styled.div`
    
`

const ButtonDetails = styled.button`
`

const CardServicos = (props) => {
    
    let dueDate = new Date(props.prazo);
    let dataFormatada = ((dueDate.getDate() )) + "/" + ((dueDate.getMonth() + 1)) + "/" + dueDate.getFullYear();

    return (
        <ContainerCards>
            <TituloCards>{props.titulo}</TituloCards>
            <PrecoCards>R${props.preco}</PrecoCards>
            {dataFormatada}
            <button>Ver detalhes</button>
            <button>Carrinho</button>
            </ContainerCards>
    )
}

export default CardServicos