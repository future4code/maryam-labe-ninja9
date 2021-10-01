import Axios from "axios"
import React from "react"
import { BASE_URL, headers } from "../constantes/urls"

export default class DetalhesServicos extends React.Component {
    state = {
        servico: {}
    }

    componentDidMount() {
        this.getJob()
    }

    getJob = () => {
        Axios.get(`${BASE_URL}/jobs/${this.props.servicoId}`, headers)
        .then((res) => {
            this.setState({servico: res.data})
        })
        .catch((err) => {
            alert("erro", err.response)
        })
    }

    render () {
        
        let dueDate = new Date(this.state.servico.dueDate);
        let dataFormatada = ((dueDate.getDate() )) + "/" + ((dueDate.getMonth() + 1)) + "/" + dueDate.getFullYear();

        const pagamentos = this.state.servico.paymentMethods && this.state.servico.paymentMethods.map((pagamento) => {
            return <li key={pagamento}>{pagamento}</li>
        })
        return (
            <div>
                <h1>{this.state.servico.title}</h1>
                <p>Preço: R${this.state.servico.price},00</p>
                <p>Prazo: {dataFormatada}</p>
                <p>{this.state.servico.description}</p>
                <ul>Formas de pagamento:
                    {pagamentos}
                </ul>
                <button onClick={()=> this.props.mudaTela("TelaServicos")}>Voltar para Lista</button>
                {/* <button onClick={()=> this.mudaTela("DetalhesServicos")}>Jobs detalhes</button> */}
            </div>
        )
    }
}