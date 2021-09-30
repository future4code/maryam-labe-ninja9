import React from 'react'

export default class Filtros extends React.Component{
    render() {
        return (
            <div>
                <p>Valor Mínimo:</p>
                <input
                    type="number"
                    name={"valor mínimo"}
                    onChange={this.props.onChangeFilterMin}
                    value={this.props.filterMin}
                />
                <p>Valor Máximo:</p>
                <input
                    type="number"
                    name={"valor máximo"}
                    onChange={this.props.onChangeFilterMin}
                    value={this.props.filterMax}
                />
                <p>Busca por nome:</p>
                <input
                    type="name"
                    name={"busca por nome"}
                    onChange={this.props.onChangeFilterName}
                    value={this.props.filterName}
                />
            </div>
        )
    }
} 