import React from 'react'
import TelaCarrinho from './components/ItensPasta/CarrinhoDeCompras'
import Filtros from './components/Filtros'
import { PacoteServico } from './components/ItensPasta/PacoteServicos'
import styled from 'styled-components'
import PaginaHome from './components/PaginaHome'
import Header from './components/Header'
import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'
import Footer from './footer'
import PagFinal from './paginaFinal'
import DetalhesServicos from './components/DetalhesServicos'

const Home = styled.div`
    padding: 5px 15px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: black;
`;



export default class App extends React.Component {
	state = {
		currentPage: "paginaHome",
		valorTotal: 550,
		detalhesServicosId: "",
		carrinho: []	
	}

	adicionarItem = (item) => {
		console.log(item)
	}

	removerItem = (item) => {
		console.log("serviço" , item)
	}

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage });
	}

	paginaDetalhes = (servicoId) => {
		this.setState({detalhesServicosId: servicoId, telaAtual: "DetalhesServicos"})
	}

	// escolheTela = () => {
	// 	switch (this.state.telaAtual) {
	// 		case "TelaHome":
	// 			return <TelaHome />;
	// 		case "TelaServicos":
	// 			return <PaginaServicos 
	// 			paginaDetalhes={this.paginaDetalhes}
	// 			/>;
	// 		case "DetalhesServicos":
	// 			return <DetalhesServicos 
	// 			mudaTela={this.mudaTela}
	// 			servicoId={this.state.detalhesServicosId}
	// 			/>;
	// 		case "TelaCadastro":
	// 			return <PaginaCadastro />;
	// 		case "TelaCarrinho":
	// 			return <TelaCarrinho 
	// 			carrinho ={this.state.carrinho}
	// 			valorTotal ={this.state.valorTotal}
	// 			removerItem={this.removerItem}
	// 			/>;
	// 		default:
	// 			return <TelaHome />;
	// 	}
	// }

	mudaTela = (nomeTela) =>{
		this.setState({telaAtual: nomeTela})
	}

	changePage = (currentPage) => {
		this.setState({ currentPage: currentPage });
	};


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
			case "detalhesServicos":
				return <DetalhesServicos 
					mudaTela={this.mudaTela}
					servicoId={this.state.detalhesServicosId}
					/>;
		  default:
			return <PaginaHome />;
		}
	  };

	render() {
	

		return (
			<div>
				<Header changePage={this.changePage}/>
        		{this.condicionalPaginas()}

        		<Home />
				
				<TelaHome/>
				<Footer/>
				{renderCurrentPage()}

				{/* <button onClick={()=> this.mudaTela("TelaHome")}>Home</button>  */}
				{/* <button onClick={()=> this.mudaTela("TelaServicos")}>Contrate um LabeNinja</button>
				<button onClick={()=> this.mudaTela("TelaCadastro")}>Seja um LabeNinja</button>
				{/* <button onClick={()=> this.mudaTela("TelaCarrinho")}>Carrinho de compras</button> */}
				{/* {this.escolheTela()}
				</Home>

				<button onClick={() => this.changePage("PaginaServicos")}>Servicos</button>
				<button onClick={() => this.changePage("PaginaCadastro")}>Cadastro</button> */} */}
				 */}
				
			
				{/* {renderCurrentPage()} */}
					{/* <PagFinal></PagFinal>
					<Footer></Footer> */}
	
				
	
				{/* <Footer></Footer> */}
			</div>
		)
	}
}


