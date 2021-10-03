import React from 'react'
import styled from 'styled-components'
import Itens from './ItensCarrinho'

const ConjuntoDoCarrinho = styled.div`
border: 3px solid black;
display: flex;
flex-direction: column;
padding: 10px;
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
			
				<button onClick={() => this.props.changePage("paginaServicos")}> Adicionar + serviços </button>
				<hr/>
				<button onClick={() => this.props.changePage("paginaServicos")}> Voltar para lista de serviços </button>
				<hr/>
				<button onClick={() => this.props.limparCarrinho()}> Finalizar Compras </button>
            </ConjuntoDoCarrinho>
		)
	}
}