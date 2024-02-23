import { Link } from 'react-router-dom';
import './style.css';

function Erro(){
  return(
    <div className="erro">
      <h1>404</h1>
      <h2>Pagina não encontrada!</h2>
      <Link to="/">Veja todas as recitas!</Link>
    </div>
  )
}

export default Erro;