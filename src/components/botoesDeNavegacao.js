import React from 'react'
import TelaCarrinho from './ItensPasta/CarrinhoDeCompras'
import TelaHome from './paginaHome'
import PaginaCadastro from './PaginaCadastro'
import PaginaServicos from './PaginaServicos'
import styled from 'styled-components'
import App from '../App'



const Div = styled.div`

    display: flex;
    align-items: center;
    margin: 0 auto;
    width: 33.333%;
    text-align: center;
`;


export default class botoesDeNavegacao extends React.Component {

	state = {
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
				return <App />;
		}
	}

	mudaTela = (nomeTela) =>{
		this.setState({telaAtual: nomeTela})
	}

    render() {
						
		return (
			<div>
				<button onClick={()=> this.mudaTela("TelaServicos")}>Contrate um LabeNinja</button>
				<button onClick={()=> this.mudaTela("TelaCadastro")}>Seja um LabeNinja</button>
				{/* {this.escolheTela()} */}
			</div>		
		)
	}
}
