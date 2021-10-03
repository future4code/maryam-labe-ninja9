import React from 'react'
import styled from 'styled-components'
import Itens from './ItensCarrinho'

const ConjuntoDoCarrinho = styled.div`
	border: 3px solid black;
	display: flex;
	flex-direction: column;
	padding: 10px;
    border: 1px solid #7867BF;
    border-radius: 10px;
    width: 97vw;
    margin-bottom: 8px;
	font-family: Open-Sans, Helvetica, Sans-Serif;
`
const Botao = styled.button`
	color: #494949;
    height: 30px;
    background-color: transparent;
    border-radius: 3px;
    border: 2px solid #7C65AC;
    cursor: pointer;
    font-weight: bold;

    :hover{
        background-color: #7C65AC;
		color:white
    }

    :active{
        transform: scale(0.8)
    }
`

export default class TelaCarrinho extends React.Component {

	render(){
		const ItensDoCarrinho = this.props.carrinho && this.props.carrinho.map(item => {
			return <Itens 
				quantidade={item.quantidade}
				nome={item.title}
				id={item.id}
				onClick={() => console.log("adicionar serviço")}
				onClick={() => this.props.removerItem(item)}
				removerItem={this.props.removerItem}
			/>
		})
		return (
			<ConjuntoDoCarrinho>
				<h2>carrinho:</h2>
				<div> {ItensDoCarrinho} </div>			 	
				<p> Valor Total: R$ {this.props.valorTotal},00 </p>
			
				<Botao onClick={() => this.props.changePage("paginaServicos")}> Adicionar + serviços </Botao>
				<hr/>
				<Botao onClick={() => this.props.changePage("paginaServicos")}> Voltar para lista de serviços </Botao>
				<hr/>
				<Botao onClick={() => this.props.limparCarrinho()}> Finalizar Compras </Botao>
            </ConjuntoDoCarrinho>
		)
	}
}