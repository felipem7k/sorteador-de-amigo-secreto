import React from "react";
import styled from "styled-components";

const CabecalhoDiv = styled.div`
    display: flex;
    justify-content: space-around;
    padding-top: 120px;

    @media screen and (max-width: 800px) {
        align-items: center;
        flex-direction: column;
    }
`;

const ImagemLogo = styled.div`
    background-image: url("imagens/logo.png");
    width: 351px;
    height: 117px;

    @media screen and (max-width: 800px) {
        background-image: url("imagens/logo-pequeno.png");
        width: 235px;
        height: 199px;
    }
`;

const Personagem = styled.img`
    z-index: 1;

    @media screen and (max-width: 800px) {
        display: flex;
        width: 70vw;
        padding-top: 60px;
        align-items: center;
    }
`;

export default function Cabecalho() {
    return (
        <CabecalhoDiv>
            <ImagemLogo role="img" aria-label="Logo do Sorteador"></ImagemLogo>
            <Personagem src="imagens/participante.png" alt="Personagem com um presente na mão"></Personagem>
        </CabecalhoDiv>
    );
}