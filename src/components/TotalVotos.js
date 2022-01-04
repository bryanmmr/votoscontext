import { useVoteState } from "../contexts/VotosContext"

function TotalVotos () {
    const { votos } = useVoteState();
    const reducer = (r, candidato) => r + candidato.votos;
    const total = votos.candidatos.reduce(reducer,0)
    return (
        <div className='voto__total'>
            <h1>Total Votos</h1>
            <h2>{total}</h2>
        </div>
    )
}
export default TotalVotos