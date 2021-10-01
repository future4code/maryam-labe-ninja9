import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import styled from 'styled-components'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import Footer from './footer'
import PagFinal from './paginaFinal'
import DetalhesServicos from './components/DetalhesServicos'
import PaginaHome from './components/PaginaHome'


export default class App extends React.Component {
	state = {
		currentPage: "paginaHome",
		valorTotal: 550,
		detalhesServicosId: "",
		

		}	
			
	


	removerItem = (item) => {
		console.log("serviço" , item)
	}

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage });
	}

	condicionalPaginas = () => {
		switch (this.state.currentPage) {
		  case "paginaHome":
			return <PaginaHome changePage={this.changePage} />;
		  case "paginaServicos":
			return <PaginaServicos changePage={this.changePage} />;
		  case "paginaCadastro":
			return <PaginaCadastro changePage={this.changePage} />;
			case "paginaCarrinho":
				return <TelaCarrinho changePage={this.changePage} />
		  default:
			return <PaginaHome />;
		}
	  };

	  paginaDetalhes = (servicoId) => {
		this.setState({detalhesServicosId: servicoId, telaAtual: "DetalhesServicos"})
	}

	
	render() {
		
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
