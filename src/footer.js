
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
            <TextFooter>
               Somos uma plataforma online para conectar clientes a prestadores de serviços por todo país.
            </TextFooter>

            
            <TextFooter> Labeninjas Copyright© </TextFooter>
            <TextFooter> - Desenvolvido por: <TextFooter/> 
            Enzo Emiliano, Élida Nunes, Júlia Cortez, Mariana Trevisane e Rafael Flores -  </TextFooter>
            
        </FooterClass>
		
		)
	}
}

