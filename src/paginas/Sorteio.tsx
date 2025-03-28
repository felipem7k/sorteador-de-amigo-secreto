import { useState } from "react";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";
import { useResultadoSorteio } from "../state/hooks/useResultadoSorteio";
import styled from "styled-components";

const SectionPrincipal = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const SectionSecundaria = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const H2 = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 2rem;
    font-weight: 600;
    color: #4B69FD;

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }
`;

const Form = styled.form`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
`;

const P = styled.p`
    font-size: 1.3rem;
`

const Select = styled.select`
    background-color: white;
    padding: 1.5rem;
    border: 2px solid black;
    border-radius: 32px;
    box-shadow: 0px 2px 0px 1px #000000;
    outline: none;
    width: 100%;

    &::placeholder {
        color: #0000004D;
    }
`;

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

const Footer = styled.footer`
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 2rem;
`;

const Img = styled.img`
    width: 150px;
`;

const AmigoSecreto = styled.h3`
    font-size: 1.6rem;
    color: #FE652BFC;
`

export default function Sorteio({children}: {children?: never[]}) {
    const participantes = useListaDeParticipantes();
    const [participanteDaVez, setParticipanteDaVez] = useState('');
    const [amigoSecreto, setAmigoSecreto] = useState('');
    const resultado = useResultadoSorteio();

    function sortear(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();

        if (resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!);
        }
    }

    return (
        <SectionPrincipal>
            <H2>Vamos começar!</H2>
            <SectionSecundaria>
                <Form onSubmit={sortear}>
                    <Select name="participanteDaVez" id="participanteDaVez" value={participanteDaVez} onChange={(evento: React.ChangeEvent<HTMLSelectElement>) => setParticipanteDaVez(evento.target.value)} placeholder="Selecione o seu nome">
                        <option selected>Selecione seu nome</option>
                        {participantes.map(participante => <option key={participante}>{participante}</option>)}
                    </Select>
                    <P>Clique em em sortear para ver quem é seu amigo secreto!</P>
                    <Button>Sortear</Button>
                </Form>
                <Footer>
                    {amigoSecreto && <AmigoSecreto role="alert">{amigoSecreto}</AmigoSecreto>}
                    <Img src="./imagens/aviao.png" alt="Imagem de aviãozinho de papel" />
                </Footer>
            </SectionSecundaria>
        </SectionPrincipal>
    );
}