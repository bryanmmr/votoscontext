import { useVoteState } from "../contexts/VotosContext"
import FiltroCandidato from "./FiltroCandidato";

const Filtro = () => {
    const {votos, setVotos, percentage, setPercentage} = useVoteState();
    const handleTodos = (event) => {
      setVotos({candidatos: votos.candidatos.map(element => 
        event.target.checked?
        {...element, show : true}:
        {...element, show : false})}
        )
    }
    const handleFiltro = () => {
      percentage?setPercentage(false):setPercentage(true)
    }
    return (
    <aside className='voto'>
        <h2 className='voto--title'>Filtros</h2>
        <div className='voto--porcentaje'>
            <label>
                <input type='radio' name='porcentaje' onChange={handleFiltro}/>
                % - Porcentual
            </label>
            <label>
              <input type='radio' name='porcentaje' onChange={handleFiltro} checked={!percentage}/>
                # - Total
            </label>
        </div>
        <div className='voto--todos'>
          <h3>Votos Individuales</h3>
          <label>
            <input type='checkbox' onChange={handleTodos} checked={votos.candidatos.every((candidato)=>candidato.show === true)}/>
              todos
            </label>
          {votos.candidatos.map(candidato=>(
            <FiltroCandidato candidato={candidato} key={candidato.id}/>
        ))}
        </div>
      </aside>
)}

export default Filtro