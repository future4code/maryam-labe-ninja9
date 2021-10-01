import Axios from "axios"
import React from "react"
import { BASE_URL, headers } from "../constantes/urls"

export default class DetalhesServicos extends React.Component {
    state = {
        servico: []
    }

    componentDidMount() {
        this.getJob()
    }

    getJob = (id) => {
        Axios.get(`${BASE_URL}/jobs/${this.state.servico.id}`, headers)
        .then((res) => {
            this.setState({servico: res.data})
        })
        .catch((err) => {
            console.log(err)
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
                <button onClick={()=> this.props.changePage("PaginaServicos, ''")}>Voltar para Lista</button>
                {/* <button onClick={()=> this.mudaTela("DetalhesServicos")}>Jobs detalhes</button> */}
            </div>
        )
    }
}