import React from 'react'
import carrinho from '../img/shopping-cart.png'
import styled from 'styled-components';
import BotoesDeNavegacao from './botoesDeNavegacao';
import Logo from '../img/labeninjas3.png'
import TelaHome from './paginaHome'
import { GlobalStyle } from '../Style/GlobalStyle';

const Div = styled.div`
    background-color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.0975);
    width: 100%;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
`
const ButtonNav = styled.button`
    display: block;
	width: 150px;
    background-color: #7C65AC;
    color: white;
    border-radius: 3px;
`

const ContainerNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 350px;
`

const CartHeader = styled.img`
    width: 40px;
    `

export default class Header extends React.Component {

    render(){

    return (

            <Div>
                    <button  onClick={() => this.props.changePage("paginaHome")}> <img src = {Logo} ></img></button>
                    <ContainerNav>
                        <ButtonNav onClick={() => this.props.changePage("paginaServicos")}>Contratar um Ninja</ButtonNav>
                        <ButtonNav onClick={() => this.props.changePage("paginaCadastro")}>Quero ser um Ninja</ButtonNav>
                    </ContainerNav>
                    <CartHeader onClick={() => this.props.changePage("paginaCarrinho")} src = {carrinho} />

            </Div>
    );
    }
};

