import './App.css';
import Candidato from './components/Candidato';
import Filtro from './components/Filtro';
import TotalVotos from './components/TotalVotos';
import VotosIndividuales from './components/VotosIndividuales';
import { useVoteState } from "./contexts/VotosContext"

function App() {
  const { votos } = useVoteState()
  return (
    <div className="container">
      <h1 className='container--title'>VOTACIONES</h1>
      <div className='candidatos__container'>
        { votos.candidatos.map((candidate)=>(
          <Candidato candidato={candidate} key={candidate.id} />
        )) }
      </div>
      <Filtro />
      <TotalVotos />
      <div className='voto__individual'>
        { votos.candidatos.map((candidate)=>(
          candidate.show?
          <VotosIndividuales candidato={candidate} key={candidate.id}/>:
          <></>
        )) }
      </div>
    </div>
  );
}

export default App;
