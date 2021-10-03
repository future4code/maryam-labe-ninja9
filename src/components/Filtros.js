import React from 'react'
import styled from 'styled-components'
import { ButtonNav } from './Header'

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	margin: 10px;
	font-family: Open-Sans, Helvetica, Sans-Serif;
`
const Input = styled.input`
  border: none;
  height: 4vh;
  width: 20vw;
  box-shadow: 0 2px 4px 0 gray;
  border-radius: 2px;

  :hover{
    background-color: #f1f1f1;
  }
`
const ButtonFiltro = styled.button`
    display: block;
	width: 120px;
    height: 25px;
    background-color: #7C65AC;
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-weight: bold;

    :hover{
        background-color: #6C5896;
    }

    :active{
        transform: scale(0.8)
    }
`
const SpanOrdenacao = styled.span`
label {
padding-right: 3px;
}
select {
	border: 1px solid #f1f1f1;
	box-shadow: 0 2px 4px 0 gray;
	width: 6vw;
	height: 25px;
}
`
const SelectOrdem = styled.select`
	border: 1px solid #f1f1f1;
	box-shadow: 0 2px 4px 0 gray;
	width: 8vw;
	height: 25px;
`

export function Filtros (props){
        return (
            <FilterContainer>
					<Input placeholder='Pesquisa'
					value={props.query}
					onChange={props.updateQuery}	
					/>

					<Input placeholder='Preço mínimo'
					type='number'
					value={props.minPrice}
					onChange={props.updateMinPrice}	
					/>

					<Input placeholder='Preço máximo'
					type='number'
					value={props.maxPrice}
					onChange={props.updateMaxPrice}	
					/>

					<SpanOrdenacao>
						<label HtmlFor='sort'>Ordenação</label>

						<select 
						name='sort'
						value={props.sortingParameter}
						onChange={props.updateSortingParameter}>

							<option value='title'>Título</option>
							<option value='price'>Preço</option>
							<option value='dueDate'>Prazo</option>

						</select>
					</SpanOrdenacao>

						<SelectOrdem 
						name='order'
						value={props.order}
						onChange={props.updateOrder}>

							<option value={1}>Crescente</option>
							<option value={-1}>Decrescente</option>

						</SelectOrdem>

						<ButtonFiltro onClick={props.clearFilter}>Limpar filtros</ButtonFiltro>
				</FilterContainer>
        )
    }

export default Filtros