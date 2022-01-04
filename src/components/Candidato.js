import { useVoteState } from '../contexts/VotosContext';

function Candidato ({candidato}) {
    const { votos, setVotos } = useVoteState();
    const handleVoto = () => {
        //const cand = votos.candidatos.find(element => element.id === candidato.id)
        setVotos({
            candidatos : votos.candidatos.map(element => element.id === candidato.id ? {...element, votos: element.votos+1} : element)
        })
    }
    return (
        <div className="candidatos--candidato">
            <h2>{candidato.name}</h2>
            <button onClick={ handleVoto } className='candidatos--button'>Votar</button>
        </div>
    )
}

export default Candidato;