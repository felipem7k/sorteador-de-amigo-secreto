import { useRef, useState } from "react";
import styled from "styled-components"
import { useAdicionarParticipante } from "../state/hooks/useAdcionarParticipante";
import { useMensagemDeErro } from "../state/hooks/useMensagemDeErro";

const Form = styled.form`
    justify-content: center;
    display: flex;
`;

const InputContainer = styled.div`
    display: flex;
    width: 80vw;
    max-width: 800px;
    border: 2px solid black;
    border-radius: 37.5px;
    box-shadow: 0px 2px 0px 1px #000000;
    background-color: white;

    @media screen and (max-width: 800px) {
        flex-direction: column;
        box-shadow: none;
        border: none;
        background-color: transparent;
        gap: 1rem;
        width: 90vw;
        align-items: center;
    }
`;

const Input = styled.input`
    background-image: url('imagens/person_add.png');
    background-repeat: no-repeat;
    background-position: left;
    background-position-x: -(2%);
    background-color: transparent;
    padding: 1.5rem;
    padding-left: 6%;
    margin-left: 3%;
    flex-grow: 1;
    border: none;
    outline: none;

    border-right: 2px solid #000000;
    
    &::placeholder {
        color: #0000004D;
    }

    @media screen and (max-width: 800px) {
        border: 2px solid black;
        box-shadow: 0px 2px 0px 1px #000000;
        border-radius: 37.5px;
        background-color: white;

        background-position-x: -(20%);
        padding-left: 10%;
        margin-left: 5%;
        width: 70%;
    }
`;

const Button = styled.button`
    background-color: #C4C4C4;
    border-radius: 0 37.5px 37.5px 0;
    padding: 0 3rem;
    border: none;
    outline: none;
    color: #444444;
    cursor: pointer;

    &:hover {
        opacity: 0.8;
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media screen and (max-width: 800px) {
        box-shadow: 0px 2px 0px 1px #000000;
        border-radius: 37.5px;
        padding: 1rem 3rem;
    }
`;

const MensagemErro = styled.p`
    color: #842029;
    background-color: #f8d7da;
    padding: 16px;
    border: 1px solid #f5c2c7;
    border-radius: 8px;

    @media screen and (max-width: 800px) {
        margin: 48px 0;
    }
`;

export default function Formulario() {

    const [nome, setNome] = useState('');
    const adicionarNomeNaLista = useAdicionarParticipante();

    const mensagemDeErro = useMensagemDeErro();

    const inputRef = useRef<HTMLInputElement>(null);

    function adicionarParticipante(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        adicionarNomeNaLista(nome);
        setNome('');
        inputRef.current?.focus();
    }

    return (
        <Form
            onSubmit={adicionarParticipante}
        >
            <InputContainer>
                <Input
                    ref={inputRef}
                    value={nome}
                    onChange={(evento: any) => setNome(evento.target.value)}
                    type="text"
                    placeholder="Insira os nomes dos participantes" 
                />
                <Button disabled={!nome}>Adicionar</Button>
            </InputContainer>
            {mensagemDeErro && <MensagemErro role="alert">{mensagemDeErro}</MensagemErro>}
        </Form>
    )
}