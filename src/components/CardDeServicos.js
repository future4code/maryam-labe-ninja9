import React from 'react'
import styled from 'styled-components'
import carrinho from '../img/shopping-cart.png'

const ContainerCards = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #7867BF;
    border-radius: 10px;
    width: 280px;
    padding: 14px;
    font-family: Helvetica;
    margin-top: 16px;
    line-height: 25px;
`

const TituloCards = styled.text`
    font-size: 22px;
    font-weight: 600;
`

const PrecoCards = styled.text`
    display: block;
    font-size: 16px;
    font-weight: bold;
`

const DueDateCards = styled.text`
    display: block;
    font-size: 15px;
` 

const LineName = styled.hr`
    width: 280px;
`

const ButtonDetails = styled.button`
    width: 100px;
    display: block;
    height: 25px;
    background-color: #7C65AC;
    color: white;
    border-radius: 3px;
`
const ButtonCart = styled.img`
    width: 25px;
    display: block;
`

const ContainerDetailsCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 

const ContainerPriceDate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
` 

const DescriptionJob = styled.text`
    font-size: 14px;
` 
const CardServicos = (props) => {
    
    let dueDate = new Date(props.prazo);
    let dataFormatada = ((dueDate.getDate() )) + "/" + ((dueDate.getMonth() + 1)) + "/" + dueDate.getFullYear();

    return (
        <ContainerCards>
            <TituloCards>{props.titulo}</TituloCards>

            <DescriptionJob>{props.descricao}</DescriptionJob>
            <LineName />
            <ContainerPriceDate>
                <PrecoCards>R${props.preco}</PrecoCards>
                <DueDateCards>{dataFormatada}</DueDateCards>
            </ContainerPriceDate>
            <ContainerDetailsCart>
                <ButtonDetails >Ver detalhes</ButtonDetails>
                <ButtonCart src = {carrinho} /> 
            </ContainerDetailsCart>

            <PrecoCards>R${props.preco}</PrecoCards>
            {dataFormatada}
            <button onClick={()=> props.paginaDetalhes(props.id)}>Ver detalhes</button>
            <button>Carrinho</button>

            </ContainerCards>
    )
}

export default CardServicos