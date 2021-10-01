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
		const ItensDoCarrinho = this.props.carrinho && this.props.carrinho.map(job => {
			return <Itens 
			  quantidade={job.quantidade}
			  nome={job.nome}
			  onClick={() => this.props.removerItem(job)}			  
			/>
		})
		return (
			<ConjuntoDoCarrinho>
				<h2>carrinho:</h2>
				<div> {ItensDoCarrinho} </div>			 	
			  <p> Valor Total: R$ {this.props.valorTotal},00 </p>
			  
			  <button> Adicionar + serviços </button>
			<hr/>
			<button> Voltar para lista de serviços </button>
			<hr/>
			<button> Finalizar Compras </button>
            </ConjuntoDoCarrinho>

		
		)
	}
}