import React from 'react'

const CardServicos = (props) => {
    return (
        <div>
            <div>
            {props.titulo}
            R${props.preco}
            {props.prazo}
            </div>
        </div>
    )
}

export default CardServicos