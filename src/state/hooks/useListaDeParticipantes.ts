import { useRecoilValue } from "recoil";
import { listaDeParticipantesState } from "../atom";

export function useListaDeParticipantes() {
    return useRecoilValue(listaDeParticipantesState);
}