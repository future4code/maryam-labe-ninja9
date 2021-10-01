
import React from 'react'
import styled from 'styled-components'


const FooterClass = styled.div`


display: flex;
alin-items: center;
justify-content: space-between;
`


const TextFooter = styled.text`
    font-size: 15px;
`



export default class Footer extends React.Component {

	render(){
		return (


            <FooterClass>
            <h3>
               Somos uma plataforma online para conectar clientes a prestadores de serviços por todo país.
            </h3>


            <h3> Labeninjas Copyright© </h3>
            <h3> - Desenvolvido por: <br/> Enzo Emiliano, Élida Nunes, Júlia Cortez, Mariana Trevisane e Rafael Flores -  </h3>

        </FooterClass>

		)
	}
}