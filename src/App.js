import React from 'react'
import TelaCadastro from './components/paginaDeCadastro'
import TelaDeServicos from './components/paginaDeServicos'
import TelaHome from './components/paginaHome'
import TelaCarrinho from './components/carrinhoDeCompras'




export default class App extends React.Component {

	state = {
		telaAtual:"TelaHome"
	}

	mudarTela = () => {
		switch (this.state.telaAtual) {
			case "TelaHome":
				
				break;
		
			default:
				break;
		}
	}



	render(){
		return (
			<div>
				<TelaCadastro />
				<TelaDeServicos />
				<TelaHome />
				<TelaCarrinho />

			</div>
			
		)
	}
}


