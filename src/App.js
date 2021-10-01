import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import Filtros from './components/Filtros'
import { PacoteServico } from './components/ItensPasta/PacoteServicos'
import styled from 'styled-components'
import TelaHome from './components/paginaHome'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import Footer from './footer'


// export default class App extends React.Component {

// 	state = {
// 		valorTotal: 550,
// 		carrinho: [
// 			{
// 			id: 1,
// 			nome: 'Serviço 1',
// 			price: 123,
			
// 		},
// 		{
// 			id: 2,
// 			nome: 'Serviço 2',
// 			price: 321
			
// 		},
// 		{
// 			id: 3,
// 			nome: 'Serviço 3',
// 			price: 3321
// 		}	
// 		]		
// 	}

// 	adicionarItem = (item) => {
// 		console.log(item)

// 	}

	
// 	removerItem = (item) => {
// 		console.log("serviço" , item)
// 	}

// 	render(){
// 		return (

// 			<div>
				
// 				<TelaCarrinho
// 				carrinho ={this.state.carrinho}
// 				valorTotal ={this.state.valorTotal}
// 				removerItem={this.removerItem}
// 				/>
				
// 			</div>
			
// 		)
// 	}
// }
// import styled from 'styled-components'
// import TelaHome from './components/paginaHome'
// import TelaCarrinho from './components/carrinhoDeCompras'
// import PaginaCadastro from './components/PaginaCadastro'
// import PaginaServicos from './components/PaginaServicos'


// const Home = styled.div`
//     max-width: 1010px;
//     padding: 5px 15px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     margin: 0 auto;
//     color: black;
// `;



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
  	
	render() {
		
		return (
			<div>

        <Home>
				{/* <button onClick={()=> this.mudaTela("TelaHome")}>Home</button>  */}
				<button onClick={()=> this.mudaTela("TelaServicos")}>Contrate um LabeNinja</button>
				<button onClick={()=> this.mudaTela("TelaCadastro")}>Seja um LabeNinja</button>
				{/* <button onClick={()=> this.mudaTela("TelaCarrinho")}>Carrinho de compras</button> */}
				{this.escolheTela()}
				</Home>
			{renderCurrentPage()}

			<Footer></Footer>
				<Header />
				<TelaHome/>
				<Footer/>				
			</div>
		
		
		)
	}
}


