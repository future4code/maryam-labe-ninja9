import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ContainerCadastro = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
    padding: 8px;
    width: 200px;
    border: 1px solid black
`

export default class Servicos extends React.Component {

    state = {
        // jobs: [
        //     {
        //         title:"Cortar a grama",
        //         description:"Manutenção em áreas verdes de até 1000 metros quadrados.",
        //         price:40,
        //         paymentMethods:["PayPal", "boleto"],
        //         dueDate:"2021-12-30"
        //     },
        //     {
        //         title:"PetSitter",
        //         description:"Cuido de animais de pequeno porte.",
        //         price:80,
        //         paymentMethods:["PayPal", "boleto"],
        //         dueDate:"2021-12-30"
        //     },
        //     {
        //         title:"Babá",
        //         description:"Cuido de crianças de até 4 anos no período noturno.",
        //         price:120,
        //         paymentMethods:["PayPal", "boleto"],
        //         dueDate:"2021-12-30"
        //     },
        //     {
        //         title:"Mecânico",
        //         description:"Especialista na marca Fiat. Conserto em casa.",
        //         price:200,
        //         paymentMethods:["PayPal", "boleto"],
        //         dueDate:"2021-12-30"
        //     },
            
        // ]
    }

    filtrarServicos = () => {
        return this.state.jobs
        .filter((job) => {
            return (
                job.title
                .toLowerCase()
                .includes(this.props.state.filterName.toLowerCase()
                )
            )
        })
        .filter((job) => {
            return (
            this.props.state.filterMin === '' || job.price >= this.props.state.filterMin
        )
        })
    }

    render() {

        // const infoJobs = this.state.jobs.map((job) => {
        //     return (
        //         <ContainerCadastro>
        //             <p>{job.title}</p>
        //             <p>R${job.price},00</p>
        //             <p>{job.dueDate}</p>
        //         </ContainerCadastro>
        //     )
        //     })
        return (
                <div>
                {/* {infoJobs} */}
                </div>
        )
    }
}