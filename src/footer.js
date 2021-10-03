import React from 'react'
import styled from 'styled-components'


const FooterClass = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #7C65AC
`

const Chamadas = styled.h3`
	font-family: Helvetica;
    font-size: 14px;
    color: white;
    padding: 14px;
    text-align: center;
    line-height: 20px;
`

export default class Footer extends React.Component {

	render(){
		return (

            <FooterClass>
            <Chamadas> LabeNinjas Copyright©2021 <br />Labenu - Turma Maryam</Chamadas>
            <Chamadas> Desenvolvido por: <br/> Enzo Emiliano, Élida Nunes, 
            Julia Cortez, Mariana Trevisane e Rafael Flores </Chamadas>
        </FooterClass>

		)
	}
}



