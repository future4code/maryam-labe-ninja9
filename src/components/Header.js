import React from 'react'
import carrinho from '../img/outline_shopping_cart_black_24dp.png'
import styled from 'styled-components';
import BotoesDeNavegacao from './botoesDeNavegacao';



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



export default class Header extends React.Component {

    render(){

    return (
        <Div>
        <BarraHeader>
            <BarraEsquerda>
                {/* <button onClick={() => img src = {Logo} /> */}
            </BarraEsquerda>
            <BarraCentro>  
                <BotoesDeNavegacao/>
            </BarraCentro>
            <BarraDireita>
                <img src = {carrinho} />           
            </BarraDireita>
        </BarraHeader>
        </Div>
    );
    }
};

