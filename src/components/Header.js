import React from 'react'
import carrinho from '../img/shopping-cart.png'
import styled from 'styled-components';
import BotoesDeNavegacao from './botoesDeNavegacao';
import Logo from '../img/labeninjas3.png'
import TelaHome from './PaginaHome'



const Div = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const BarraHeader = styled.div`
    max-width: 1010px;
    padding: 26px 20px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
`;
const BarraEsquerda = styled.div`
    width: 33.333%;
    text-align: left;
`;
const BarraCentro = styled.div`
    width: 33.333%;
    text-align: center;
`;

const BarraDireita = styled.div`
    width: 33.333%;
    text-align: right;
    svg {
    margin-right: 20px;
    }
`;

const CartHeader = styled.img`
    width: 40px;
`


export default class Header extends React.Component {

    render(){

    return (
        <Div>
        <BarraHeader>
            <BarraEsquerda>
            <button onClick={()=> TelaHome}> <img src = {Logo} ></img></button>
            </BarraEsquerda>
            <BarraCentro>  
            <button onClick={() => this.props.changePage("paginaHome")}>Home</button>
            <button onClick={() => this.props.changePage("paginaServicos")}>Servicos</button>
            <button onClick={() => this.props.changePage("paginaCadastro")}>Cadastro</button>
            </BarraCentro>
            <BarraDireita>

                <CartHeader onClick={() => this.props.changePage("paginaCarrinho")} src = {carrinho} />           

          
            </BarraDireita>
        </BarraHeader>
        </Div>
    );
    }
};

