import React from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import styled from "styled-components";

export default function ListaParticipantes() {
    const participantes: string[] = useListaDeParticipantes();
    const Li = styled.li`
        margin-bottom: .5rem;
    `;
    return (
        <ul>
            {participantes.map(participante => <Li key={participante}>{participante}</Li>)}
        </ul>
    );
}