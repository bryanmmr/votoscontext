import { useVoteState } from "../contexts/VotosContext"

const FiltroCandidato = ({candidato}) => {
    const {votos, setVotos} = useVoteState();
    const handleCheck  = () => {        
        setVotos({
            candidatos : votos.candidatos.map(element => element.id === candidato.id ? {...element, show:  candidato.show?false:true} : element)
        })
    }
    return (
        <label key={candidato.id}>
            <input type='checkbox' onChange={handleCheck} checked={candidato.show}></input>
            {candidato.name}
        </label>
    )
}

export default FiltroCandidato