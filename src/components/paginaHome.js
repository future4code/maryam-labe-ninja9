import React from 'react'
import styled from 'styled-components'
import imagemHome from '../img/yingchou-han-IJrIeCs3D4g-unsplash (1) (1).png'
import { GlobalStyle } from '../Style/GlobalStyle';

const Home = styled.div`
    max-width: 100vw;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0;
    color: black;
`;

const BlocoTexto = styled.div`
display: block
`

const ContainerTexto = styled.div`
	position: absolute;
	top: 180px;
	width: 350px;
	margin-left: 250px;
	height: 30px;
`

const Titulo = styled.p`
	font-family: Helvetica;
	font-size: 40px;
	font-weight: 750;
	margin-bottom: -10px;
	color: #7C65AC;
	line-height: 40px;
`

const Texto = styled.p`
	font-family: Helvetica;
	font-size: 16px;
	line-height: 20px;
`

const ImagemHome = styled.img`
	width: 1345px;
`

const ButtonNav = styled.button`
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

export function PaginaHome (props){
		return (
			<GlobalStyle>
				<Home>
					<BlocoTexto>
						<ContainerTexto>
							<Titulo> O talento certo, no momento certo</Titulo>
								<Texto>Somos uma plataforma online para conectar clientes
								a prestadores de serviços por todo país. 
							</Texto>
							
								<ContainerNav>
								<ButtonNav onClick={() => props.changePage("paginaCadastro")}>Quero ser um Ninja</ButtonNav>
								<ButtonNav onClick={() => props.changePage("paginaServicos")}>Contratar um Ninja</ButtonNav>
								</ContainerNav>
						
						</ContainerTexto>
					</BlocoTexto>
                <ImagemHome src = {imagemHome}/>
				</Home>
            </GlobalStyle>
		)
	}

export default PaginaHome


