import React from 'react'
import { BASE_URL, headers } from './constantes/urls'
import axios from 'axios'
import CardServicos from './CardDeServicos'

export default class PaginaServicos extends React.Component {

	state = {
		jobs: []
	}

	componentDidMount = () => {
		this.getAllJobs()
	}

	getAllJobs = () => {
		axios.get(`${BASE_URL}/jobs`, headers)
		.then((res) => {
			this.setState({jobs: res.data.jobs})
		}).catch((err) => {
			console.log(err)
		})
	}

	render() {
		const servicos = this.state.jobs.map((servico) => {
			return <CardServicos
					titulo={servico.title}
					preco={servico.price}
					prazo={servico.dueDate}
				/>
		})
		return (
			<div>
				{servicos}
			</div>
		)
	}

}


