import React from 'react'
import styled from 'styled-components'
import TelaHome from './components/paginaHome'
import TelaCarrinho from './components/carrinhoDeCompras'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'


const Home = styled.div`
    max-width: 1010px;
    padding: 5px 15px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: black;
`;


export default class App extends React.Component {
	state = {
		currentPage: 'TelaHome',
    	telaAtual:"TelaHome"
	}
  	
	escolheTela = () => {
		switch (this.state.telaAtual) {
			case "TelaHome":
				return <TelaHome />;
			case "TelaServicos":
				return <PaginaServicos />;
			case "TelaCadastro":
				return <PaginaCadastro />;
			case "TelaCarrinho":
				return <TelaCarrinho />;
			default:
				return <TelaHome />;
		}
	}

	mudaTela = (nomeTela) =>{
		this.setState({telaAtual: nomeTela})
	}

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage });
	};

	render() {
		const renderCurrentPage = () => {
			if (this.state.currentPage === "PaginaCadastro") {
			return <PaginaCadastro />;
			} else if (this.state.currentPage === "PaginaServicos") {
			return <PaginaServicos />;
			}
		};
		return (
			<div>
        <Home>
				{/* <button onClick={()=> this.mudaTela("TelaHome")}>Home</button>  */}
				<button onClick={()=> this.mudaTela("TelaServicos")}>Contrate um LabeNinja</button>
				<button onClick={()=> this.mudaTela("TelaCadastro")}>Seja um LabeNinja</button>
				{/* <button onClick={()=> this.mudaTela("TelaCarrinho")}>Carrinho de compras</button> */}
				{this.escolheTela()}
				</Home>
				<button onClick={() => this.changePage("PaginaServicos")}>Servicos</button>
				<button onClick={() => this.changePage("PaginaCadastro")}>Cadastro</button>
			{renderCurrentPage()}
			</div>
		)
	}
}

