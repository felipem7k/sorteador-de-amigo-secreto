import { realizarSorteio } from "./realizarSorteio";

describe('dado um sorteio pro amigo secreto', () => {
    test('cada participante não sorteie o próprio nome', () => {
        const participantes = [
            'Ana',
            'Pedro',
            'Henrique'
        ];

        const sorteio = realizarSorteio(participantes);
        participantes.forEach(participante => {
            const amigoSecreto = sorteio.get(participante);
            expect(amigoSecreto).not.toEqual(participante);
        });
    });
});