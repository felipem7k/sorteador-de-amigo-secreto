import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSorteador } from "../state/hooks/useSorteador";

const Footer = styled.footer`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        gap: 2rem;
    }
`

const Button = styled.button`
    border: none;
    outline: none;
    background-color: #FE652B;
    font-size: 1.3rem;
    padding: 1rem 3rem;
    border: 2px solid black;
    border-radius: 37.5px;
    box-shadow: 0px 2px 0px 1px #000000;
    color: white;

    &:hover {
        background-color: #4B69FD;
    }

    &:disabled {
        background-color: #808080;
        cursor: not-allowed;
    }

    @media screen and (max-width: 800px) {
        padding: 1rem 1rem;
    }
`;

const Img = styled.img`
    width: 237px;

    @media screen and (max-width: 800px) {
        width: 127px;
    }
`

export default function Rodape({children}: {children?: never[]}) {
    const participantes = useListaDeParticipantes();
    const navegarPara = useNavigate();

    const sortear = useSorteador();

    function iniciar() {
        sortear();
        navegarPara('/sorteio');
    }

    return (
        <Footer>
            <Button onClick={iniciar} disabled={participantes.length < 3}>Iniciar brincadeira!</Button>
            <Img src="./imagens/sacolas.png" alt="" />
        </Footer>
    );
}