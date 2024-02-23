import { Link } from 'react-router-dom';
import "./style.css"; //estilo
import logo from './logo.chef.png';

function Header(){ 
  return(
    <div className='container'>
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
        <nav>
          <ul>
            <li><a><Link to = '/'>Receitas</Link></a></li>
            <li><a><Link to = '/adicionar'>Adicionar Nova Receita</Link></a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
//exportar
export default Header;
