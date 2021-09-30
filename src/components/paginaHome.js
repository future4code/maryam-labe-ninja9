import React from 'react'
import styled from 'styled-components'
import imagemHome from '../img/imagemHome.jpg'



const Home = styled.div`
    max-width: 1010px;
    padding: 5px 15px;
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    color: black;
`;

const Texto = styled.div`
display: block

`



const TelaHome = () => {

		return (
			<div>
				<Home>
					<Texto>
				<h3> Tenho uma habilidade especial e gostaria de oferecer meus serviços!</h3>
				<h3> Preciso de alguém pra fazer um trabalho pra mim!</h3>
					</Texto>
                <img src = {imagemHome}/>
				</Home>
            </div>
		)
}

export default TelaHome;
