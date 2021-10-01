// import React from 'react'
// import PaginaCadastro from './PaginaCadastro'
// import PaginaServicos from './PaginaServicos'
// import PaginaHome from './PaginaHome'

// export default class BotoesDeNav extends React.Component {

// 	state = {
// 		currentPage: 'PaginaHome'
// 	}

// 	changePage = (currentPage) => {
// 		this.setState({currentPage: currentPage})
// 	}

// 	render() {
// 		const renderCurrentPage = () => {
// 			if (this.state.currentPage === 'PaginaHome') {
// 			  return <PaginaHome />;
// 			} else if (this.state.currentPage === 'PaginaCadastro') {
// 			  return <PaginaCadastro />;
// 			} else if (this.state.currentPage === 'PaginaServicos') {
// 				return <PaginaServicos />
// 			}
// 		  };
// 		return (
// 			<div>
// 				<button onClick={() => this.changePage('PaginaCadastro')}>Cadastro</button>
// 				<button onClick={() => this.changePage('PaginaServicos')}>Servicos</button>
// 			</div>
// 		)
// 	}
// }





































 // escolheTela = () => {
	// 	switch (this.state.telaAtual) {
	// 		case "TelaHome":
	// 			return <TelaHome />;
	// 		case "TelaServicos":
	// 			return <PaginaServicos />;
	// 		case "TelaCadastro":
	// 			return <PaginaCadastro />;
	// 		case "TelaCarrinho":
	// 			return <TelaCarrinho />;
	// 		default:
	// 			return <App />;
	// 	}
	// }

	// mudaTela = (nomeTela) =>{
	// 	this.setState({telaAtual: nomeTela})
	// }