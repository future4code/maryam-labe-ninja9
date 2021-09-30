import React from 'react'








import PaginaCadastro from './components/PaginaCadastro'
import PaginaServicos from './components/PaginaServicos'


export default class App extends React.Component {
	state = {
		currentPage: 'PaginaCadastro'
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
				<button onClick={() => this.changePage("PaginaServicos")}>Servicos</button>
				<button onClick={() => this.changePage("PaginaCadastro")}>Cadastro</button>
			{renderCurrentPage()}
			</div>
		)
	}
}


