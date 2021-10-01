import React from "react"

export default class DetalhesServicos extends React.Component {
    render () {
        return (
            <div>
                <h1>Título Serviço</h1>
                <p>Preço</p>
                <p>Prazo:</p>
                <p>( Descrição )</p>
                <ul>Formas de pagamento</ul>
                    <li>Dinheiro</li>
                <button onClick={()=> this.props.mudaTela("TelaServicos")}>Voltar para Lista</button>
            </div>
        )
    }
}