import React from 'react'
import styled from 'styled-components'

const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	margin: 10px;
`


export function Filtros (props){
        return (
            <FilterContainer>
					<input placeholder='Pesquisa'
					value={props.query}
					onChange={props.updateQuery}	
					/>

					<input placeholder='Preço mínimo'
					type='number'
					value={props.minPrice}
					onChange={props.updateMinPrice}	
					/>

					<input placeholder='Preço máximo'
					type='number'
					value={props.maxPrice}
					onChange={props.updateMaxPrice}	
					/>

					<span>
						<label HtmlFor='sort'>Ordenação</label>

						<select 
						name='sort'
						value={props.sortingParameter}
						onChange={props.updateSortingParameter}>

							<option value='title'>Título</option>
							<option value='price'>Preço</option>
							<option value='dueDate'>Prazo</option>

						</select>
					</span>

						<select 
						name='order'
						value={props.order}
						onChange={props.updateOrder}>

							<option value={1}>Crescente</option>
							<option value={-1}>Decrescente</option>

						</select>

						<button onClick={props.clearFilter}>Limpar filtros</button>
				</FilterContainer>
        )
    }

export default Filtros