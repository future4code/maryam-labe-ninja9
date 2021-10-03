import React from 'react'
import { BASE_URL, headers } from '../constantes/urls'
import axios from 'axios'
import CardServicos from './CardDeServicos'
import Filtros from './Filtros'
import styled from 'styled-components'
import DetalhesServicos from './DetalhesServicos'

const ContainerServicos = styled.div`
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	align-itens: center;
	columns-gap: 10px;
	row-gap: 10px;
`

export default class PaginaServicos extends React.Component {

	state = {
		jobs: [],
		query: '',
		minPrice: '',
		maxPrice: '',
		sortingParameter: 'title',
		order: 1,
		currentPage: 'paginaServicos',
		jobId: ''
	}

	componentDidMount = () => {
		this.getAllJobs()
	}

	getAllJobs = () => {
		axios.get(`${BASE_URL}/jobs`, headers)
		.then((res) => {
			this.setState({jobs: res.data.jobs})
		}).catch((err) => {
		})
	}

	updateQuery = (ev) => {
		this.setState({query: ev.target.value})
	}

	updateMinPrice = (ev) => {
		this.setState({minPrice: ev.target.value})
	}

	updateMaxPrice = (ev) => {
		this.setState({maxPrice: ev.target.value})
	}

	updateSortingParameter = (ev) => {
		this.setState({sortingParameter: ev.target.value})
	}

	updateOrder = (ev) => {
		this.setState({order: ev.target.value})
	}

	clearFilter = () => {
		this.setState({query: '', minPrice: '', maxPrice: '' })
	}

	render() {

		const servicos = this.state.jobs
		.filter((job) => {
			return job.title.toLowerCase().includes(this.state.query.toLowerCase()) ||
				job.description.toLowerCase().includes(this.state.query.toLowerCase())
		})
		.filter((job) => {
			return this.state.minPrice === '' || job.price >= this.state.minPrice
		})
		.filter((job) => {
			return this.state.maxPrice === '' || job.price <= this.state.maxPrice
		})
		.sort((currentJob, nextJob) => {
			switch (this.state.sortingParameter) {
				case 'title':
					return this.state.order * currentJob.title.localeCompare(nextJob.title)
				case 'dueDate':
					return this.state.order * (new Date(currentJob.dueDate).getTime() - new Date(nextJob.dueDate).getTime())
				default:
					return this.state.order * (currentJob.price - nextJob.price)
			}
		})
		.map((servico) => {
			return <CardServicos
					key={servico.id}
					id={servico.id}
					titulo={servico.title}
					descricao={servico.description}
					preco={servico.price}
					prazo={servico.dueDate}
					paginaDetalhes={this.props.paginaDetalhes}

					adicionarItem={this.props.adicionarItem} 

				/>
		})
		return (
			<div>
				<Filtros 
					query={this.state.query}
					updateQuery={this.updateQuery}
					minPrice={this.state.minPrice}
					updateMinPrice={this.updateMinPrice}
					maxPrice={this.state.maxPrice}
					updateMaxPrice={this.updateMaxPrice}
					sortingParameter={this.state.sortingParameter}
					updateSortingParameter={this.updateSortingParameter}
					order={this.state.order}
					updateOrder={this.updateOrder}
					clearFilter={this.clearFilter}
				/>
				Ninjas disponíveis: {servicos.length}

				<ContainerServicos>
				{servicos}
				</ContainerServicos>
			</div>
		)
	}

}


