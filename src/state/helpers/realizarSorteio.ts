import shuffle from "just-shuffle";

export function realizarSorteio(participantes: string[]) {
    const totalDeParticipantes = participantes.length;
    const embaralhado = shuffle(participantes);
    const resultado = new Map<string, string>();
    embaralhado.forEach((_, indice) => {
        const proximoIndice = indice === totalDeParticipantes - 1 ? 0 : indice + 1;
        resultado.set(embaralhado[indice], embaralhado[proximoIndice]);
    });
    return resultado;
}