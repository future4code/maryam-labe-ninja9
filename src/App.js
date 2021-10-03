import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import styled from 'styled-components'
import PaginaHome from './components/paginaHome'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import axios from 'axios'
import { BASE_URL, headers } from './constantes/urls'
import DetalhesServicos from './components/DetalhesServicos'
import Footer from './footer'
import { GlobalStyle } from './Style/GlobalStyle'

export default class App extends React.Component {
	state = {
		currentPage: "paginaHome",
		detalhesServicosId: "",
		jobs: [],
		carrinho: []	
	}

	// valorTotal: 550,
	// 	detalhesServicosId: '',
	// 	carrinho: [
	// 		{
	// 		id: 1,
	// 		nome: 'Serviço 1',
	// 		price: 123,
			
	// 	},
	// 	{
	// 		id: 2,
	// 		nome: 'Serviço 2',
	// 		price: 321
			
	// 	},
	// 	{
	// 		id: 3,
	// 		nome: 'Serviço 3',
	// 		price: 3321
	// 	}	
	// 	]	

	// }


	adicionarItem = (job) => {
		const novoCarrinho = [...this.state.jobs, job]
		this.setState({jobs: novoCarrinho})
		alert('O serviço foi adicionado ao carrinho.')
	}

	removerItem = (id) => {
		const podeDeletar = window.confirm("Tem certeza que deseja remover este produto?")
		if (podeDeletar){
			const novoCarrinho = this.state.carrinho.filter((itemCarrinho) => {
				return itemCarrinho.id !== id
			})
			this.setState({carrinho: novoCarrinho})
		}
	}

	limparCarrinho = () => {
		this.setState({carrinho: []})
		alert('Obrigado por comprar com a gente! :)')
	}

	paginaDetalhes = (servicoId) => {
		this.setState({detalhesServicosId: servicoId, currentPage: "paginaDetalhes"})
	}

	changePage = (currentPage) => {
		this.setState({currentPage: currentPage});
	}

	condicionalPaginas = () => {
		switch (this.state.currentPage) {
			case "paginaHome":
				return <PaginaHome changePage={this.changePage} />;
			case "paginaServicos":
				return <PaginaServicos 
				adicionarItem={this.adicionarItem} 
				changePage={this.changePage} 
				paginaDetalhes={this.paginaDetalhes}
				/>;
			case "paginaCadastro":
				return <PaginaCadastro changePage={this.changePage} />;
			case "paginaCarrinho":
				return <TelaCarrinho 
				jobs={this.state.jobs}
				changePage={this.changePage}
				removerItem={this.removerItem}
				limparCarrinho={this.limparCarrinho}
				/>
			case "paginaDetalhes":
				return <DetalhesServicos 
				changePage={this.changePage} 
				servicoId={this.state.detalhesServicosId}
				/>
			default:
			return <PaginaHome />;
		}
};

	render() {
		return (
			<GlobalStyle>
				<Header 
				changePage={this.changePage}
				/>
				{this.condicionalPaginas()}
				<Footer/>
			</GlobalStyle>
		)
	}
}


