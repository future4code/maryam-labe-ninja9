import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { BASE_URL, headers } from './constantes/urls'

const DivCadastro = styled.div`
border: black solid 2px;

display: grid;
justify-content: center;
align-items: center;
width: 40vw;
height: 90vh;
`

export default class PaginaCadastro extends Component {
  state = {
    titulo: "",
    descricao: "",
    valorRemuneracao: "",
    pagamento: [],
    prazo: ""
  }

  handleTitulo = (e) => {
    this.setState({titulo: e.target.value})
  }
  
  handleDescricao = (e) => {
    this.setState({descricao: e.target.value})
  }
  
  handleValorRemuneracao = (e) => {
    this.setState({valorRemuneracao: e.target.value})
  }
  
  handlePrazo = (e) => {
    this.setState({prazo: e.target.value})
  }

  handlePagamento = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({pagamento: value})
  }

  createJob = () => {
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.valorRemuneracao),
      paymentMethods: this.state.pagamento,
      dueDate: this.state.prazo
    }

    Axios.post(`${BASE_URL}/jobs`, body, headers)
    .then((response) => {
      this.setState({
        titulo: "",
        descricao: "",
        valorRemuneracao: "",
        pagamento: [],
        prazo: ""
      })
      alert("Serviço adicionado com sucesso!")
    })
    .catch((error) => {
      alert(error.response.data)
    })
  }

  render() {
    return (
      <DivCadastro>
          <h2>Cadastrar</h2>
          <label>Título*</label>
            <input value={this.state.titulo} onChange={this.handleTitulo} />
          <label>Descrição*</label>
            <input value={this.state.descricao} onChange={this.handleDescricao} />
          <label>Valor da Remuneração*</label>
            <input value={this.state.valorRemuneracao} onChange={this.handleValorRemuneracao} />
          <label>Método de Pagamento</label>
            <select multiple={true} value={this.state.pagamento} onChange={this.handlePagamento} >
              <option>Cartão de Débito</option>
              <option>Cartão de Crédito</option>
              <option>PayPal</option>
              <option>Boleto</option>
              <option>Pix</option>
            </select>
          <label>Prazo*</label>
            <input value={this.state.prazo} onChange={this.handlePrazo} type="date" />
          <button onClick={this.createJob}>Cadastrar</button>
      </DivCadastro>
    )
  }
}
