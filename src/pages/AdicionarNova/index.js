//Hooks React
import "./style.css"; //estilo

function AdicionarNova(){ 
  return(
    <div className='container'>
      <header>
        <nav>
          <ul>
            <li><a href="">Receitas</a></li>
            <li><a href="">Adicionar Nova Receita</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
//exportar
export default AdicionarNova;
