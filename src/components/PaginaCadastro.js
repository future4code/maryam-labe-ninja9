import React, { Component } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import { BASE_URL, headers } from "../constantes/urls"
import {ButtonNav} from "./Header"
import ImagemCadastro from "../img/pagina-cadastro.jpg"


const DivCadastro = styled.div`
max-width: 100vw;
font-family: Open-Sans, Helvetica, Sans-Serif;

img{
  width: 98vw;
  max-width: 100vw;
}
`
const ContainerTexto = styled.div`
	position: absolute;
  top: 15vh;
  left: 12vw;
  display: grid;
justify-content: center;
justify-items: center;
align-items: center;
width: 40vw;
height: 90vh;

h2{
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 40px;
}

input{
  border: none;
  height: 4vh;
  box-shadow: 0 2px 4px 0 gray;
  border-radius: 2px;

  :hover{
    background-color: #f1f1f1;
  }
}

select{
  border: none;
  height: 10vh;
  /* box-shadow: 0 2px 4px 0 gray; */
  border-radius: 2px;
}
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
      alert(error.response)
    })
  }

  render() {
    return (
      <DivCadastro>
          <img src={ImagemCadastro}/>
          <ContainerTexto>
            <h2>CADASTRO</h2>
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
            <ButtonNav onClick={this.createJob}>Cadastrar</ButtonNav>
          </ContainerTexto>
      </DivCadastro>
    )
  }
}
