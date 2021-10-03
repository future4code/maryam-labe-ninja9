import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import styled from 'styled-components'
import PaginaHome from './components/paginaHome'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import PagFinal from './paginaFinal'
import DetalhesServicos from './components/DetalhesServicos'
import Footer from './footer'


// const Home = styled.div`
//     padding: 5px 15px;
//     width: 100%;
//     display: flex;
//     align-items: center;
//     margin: 0 auto;
//     color: black;
// `;


export default class App extends React.Component {
	state = {
		currentPage: "paginaHome",
		valorTotal: 550,
		servicosId: '',
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

	changePage = (currentPage, servicosId) => {
		this.setState({ 
			currentPage: currentPage,
			servicosId: servicosId
		});
	}

	condicionalPaginas = () => {
		switch (this.state.currentPage) {
			case "paginaHome":
				return <PaginaHome changePage={this.changePage} />;
			case "paginaServicos":
				return <PaginaServicos 
				changePage={this.changePage} />;
			case "paginaCadastro":
				return <PaginaCadastro changePage={this.changePage} />;
			case "paginaCarrinho":
				return <TelaCarrinho changePage={this.changePage} />
			case "paginaDetalhes":
				return <DetalhesServicos 
				changePage={this.changePage} />
			default:
			return <PaginaHome />;
		}
};



	render() {
	console.log(this.state.servicosId)

		return (
			<div>
				<Header 
				changePage={this.changePage}
				/>
				{this.condicionalPaginas()}
				<Footer/>

			</div>
		)
	}
}


