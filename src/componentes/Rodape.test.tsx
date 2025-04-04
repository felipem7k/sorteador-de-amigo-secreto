import { fireEvent, render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import Rodape from "./Rodape";
import { useListaDeParticipantes } from "../state/hooks/useListaDeParticipantes";

jest.mock('../state/hooks/useListaDeParticipantes', () => {
    return {
        useListaDeParticipantes: jest.fn()
    };
});

const mockNavegacao = jest.fn();
const mockSorteio = jest.fn();
jest.mock('../state/hooks/useSorteador', () => {
    return {
        useSorteador: () => mockSorteio
    }
});
jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
});

describe('onde não existem participantes suficiente', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue([]);
    });
    test('a brincadeira não pode ser iniciada', () => {
        render(
            <RecoilRoot>
                <Rodape>
                </Rodape>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).toBeDisabled();
    });
});

describe('quando existem participantes suficiente', () => {
    beforeEach(() => {
        (useListaDeParticipantes as jest.Mock).mockReturnValue(['Ana', 'Catarina', 'Pedro']);
    });
    test('a brincadeira pode ser inicada', () => {
        render(
            <RecoilRoot>
                <Rodape>
                </Rodape>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        expect(botao).not.toBeDisabled();
    });
    test('a brincadeira foi inicada', () => {
        render(
            <RecoilRoot>
                <Rodape>
                </Rodape>
            </RecoilRoot>
        );

        const botao = screen.getByRole('button');
        fireEvent.click(botao);

        expect(mockNavegacao).toHaveBeenCalledTimes(1);
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio');
        expect(mockSorteio).toHaveBeenCalledTimes(1);
    });
});