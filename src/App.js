import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import Filtros from './components/Filtros/filtros'
import { PacoteServico } from './components/ItensPasta/PacoteServicos'


export default class App extends React.Component {

	state = {
		valorTotal: 550,
		carrinho: [
			{
			id: 1,
			nome: 'Serviço 1',
			price: 123,
			
		},
		{
			id: 2,
			nome: 'Serviço 2',
			price: 321
			
		},
		{
			id: 3,
			nome: 'Serviço 3',
			price: 3321
		}	
		]		
	}

	adicionarItem = (item) => {
		console.log(item)

	}

	
	removerItem = (item) => {
		console.log("serviço" , item)
	}

	render(){
		return (

			<div>
				
				<TelaCarrinho
				carrinho ={this.state.carrinho}
				valorTotal ={this.state.valorTotal}
				removerItem={this.removerItem}
				/>
				
			</div>
			
		)
	}
}
