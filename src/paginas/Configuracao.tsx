import React from "react";
import Formulario from "../componentes/Formulario";
import ListaParticipantes from "../componentes/ListaParticipantes";
import Rodape from "../componentes/Rodape";
import styled from "styled-components";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

const H2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #4B69FD;

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`

export function Configuracao() {
    return (
        <Section>
            <H2>Vamos começar!</H2>
            <Formulario></Formulario>
            <ListaParticipantes></ListaParticipantes>
            <Rodape></Rodape>
        </Section>
    );
}