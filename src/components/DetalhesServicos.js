import Axios from "axios"
import React from "react"
import { BASE_URL, headers } from "../constantes/urls"
import styled from 'styled-components'


const ContainerDetalhes = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #7867BF;
    border-radius: 10px;
    width: 550px;
    padding: 14px;
`
const TextosDetalhes = styled.div`
    font-family: Helvetica;
    line-height: 25px;
` 

const ContainerPriceDate = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
` 

export default class DetalhesServicos extends React.Component {
    state = {
        servico: []
    }

    componentDidMount() {
        this.getJob()
    }

    getJob = (id) => {
        Axios.get(`${BASE_URL}/jobs/${this.props.servicoId}`, headers)
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
            <ContainerDetalhes>
                <TextosDetalhes>
                <h1>{this.state.servico.title}</h1>
                <hr />
                <p>Descrição do serviço:</p>
                <p>{this.state.servico.description}</p>
                <ContainerPriceDate>
                <p>Preço: R${this.state.servico.price},00</p>
                <p>Prazo: {dataFormatada}</p>
                </ContainerPriceDate>
                <ul>Formas de pagamento:
                    {pagamentos}
                </ul>
                <button onClick={()=> this.props.changePage("paginaServicos")}>Voltar para Lista</button>
                {/* <button onClick={()=> this.mudaTela("DetalhesServicos")}>Jobs detalhes</button> */}
                </TextosDetalhes>
            </ContainerDetalhes>
        )
    }
}