import React from 'react'
import styled from 'styled-components'
import TelaCadastro from './components/paginaDeCadastro'
import TelaDeServicos from './components/paginaDeServicos'
import TelaHome from './components/paginaHome'
import TelaCarrinho from './components/carrinhoDeCompras'



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
		telaAtual:"TelaHome"
	}

	escolheTela = () => {
		switch (this.state.telaAtual) {
			case "TelaHome":
				return <TelaHome />;
			case "TelaServicos":
				return <TelaDeServicos />;
			case "TelaCadastro":
				return <TelaCadastro />;
			case "TelaCarrinho":
				return <TelaCarrinho />;
			default:
				return <TelaHome />;
		}
	}

	mudaTela = (nomeTela) =>{
		this.setState({telaAtual: nomeTela})
	}

	render(){
		return (
			<div>
				<Home>
				{/* <button onClick={()=> this.mudaTela("TelaHome")}>Home</button>  */}
				<button onClick={()=> this.mudaTela("TelaServicos")}>Contrate um LabeNinja</button>
				<button onClick={()=> this.mudaTela("TelaCadastro")}>Seja um LabeNinja</button>
				{/* <button onClick={()=> this.mudaTela("TelaCarrinho")}>Carrinho de compras</button> */}
				{this.escolheTela()}
				</Home>
			</div>
			
		)
	}
}


