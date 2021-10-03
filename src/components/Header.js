import React from 'react'
import carrinho from '../img/shopping-cart.png'
import styled from 'styled-components';
import Logo from '../img/logo-semfundo.png'

const Div = styled.div`
    background-color: #fff;
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const BarraHeader = styled.div`
    max-width: 1010px;
    max-height: 30px;
    padding: 26px 20px;
    background-color: white;
    border-bottom: 2px solid rgba(0, 0, 0, 0.0975);
    width: 100%;
    display: flex;
    height: 70px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`;
const BarraEsquerda = styled.div`
    width: 33.333%;
    text-align: left;
    img {
        width: 20vw;
        cursor: pointer;
    }
`;

export const ButtonNav = styled.button`
    display: block;
	width: 150px;
    height: 40px;
    background-color: #7C65AC;
    color: white;
    border-radius: 3px;
    border: none;
    cursor: pointer;
    font-weight: bold;

    :hover{
        background-color: #6C5896;
    }

    :active{
        transform: scale(0.8)
    }
`

const ContainerNav = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 350px;
`

const CartHeader = styled.img`
    width: 40px;
    border: none;
    cursor: pointer;

    :hover{
        transform: scale(1.2)
    }
    `

export default class Header extends React.Component {

    render(){

    return (
            <Div>
                <BarraHeader>
                    <BarraEsquerda>
                        <img src = {Logo} onClick={() => this.props.changePage("paginaHome")}></img>
                    </BarraEsquerda>
                    <ContainerNav>
                        <ButtonNav onClick={() => this.props.changePage("paginaServicos")}>Contratar um Ninja</ButtonNav>
                        <ButtonNav onClick={() => this.props.changePage("paginaCadastro")}>Quero ser um Ninja</ButtonNav>
                    </ContainerNav>
                    <CartHeader onClick={() => this.props.changePage("paginaCarrinho")} src = {carrinho} />
                </BarraHeader>
            </Div>
    );
    }
};

