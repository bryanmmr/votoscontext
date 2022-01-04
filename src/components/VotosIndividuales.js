import { useVoteState } from "../contexts/VotosContext";

function VotosIndividuales ({candidato}) {
    const {percentage, votos} =useVoteState()
    const reducer = (r, candidato) => r + candidato.votos;
    const total = votos.candidatos.reduce(reducer,0)
    const getVotos = percentage?
    `${total!==0?(100*candidato.votos/total).toFixed(2):0} %`:
    `${candidato.votos} votos`;

    return (
        <div className="voto__individual--candidato ">
            {candidato.name} = {getVotos}
        </div>
    )
}

export default VotosIndividuales;