import React from 'react'
import styled from 'styled-components'


const ConjuntoDeItens = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
`


export default class Itens extends React.Component {

	render(){
		return (
		
		<ConjuntoDeItens>
			{/* receber a quantidade dos itens através de props */}
			
			<div>{this.props.quantidade}x </div>
			<p>{this.props.nome}</p>
			<button onClick = {() => this.props.removerItem(this.props.id)} >Remover</button>
					
		</ConjuntoDeItens>
		
		)
	}
}