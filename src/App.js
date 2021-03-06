import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import PaginaHome from './components/paginaHome'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import DetalhesServicos from './components/DetalhesServicos'
import Footer from './components/footer'
import { GlobalStyle } from './Style/GlobalStyle'

export default class App extends React.Component {
	state = {
		currentPage: "paginaHome",
		detalhesServicosId: "",
		jobs: [],
		carrinho: []	
	}

	adicionarItem = (job) => {
		const novoCarrinho = [...this.state.carrinho, job]
		this.setState({carrinho: novoCarrinho})
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
				carrinho={this.state.carrinho}
				/>;
			case "paginaCadastro":
				return <PaginaCadastro changePage={this.changePage} />;
			case "paginaCarrinho":
				return <TelaCarrinho 
				carrinho={this.state.carrinho}
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


