impo//Hooks React
import React, {useEffect, useState} from "react";
import "./App.css"; //estilo
import logo from './';

function App(){ 
  const [movie, setMovie] = useState([]);  // controlar o estado

  useEffect( () => { //função para consumir a api
    function carregaDados(){
      let url = '';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setMovie(json);
      })
    }
    carregaDados();
  },[]);

  return(
    <div className='container'>
      <header>
        <img src={logo} className="App-logo" alt="logo"/>
        <nav>
          <ul>
            <li><a href="">Receitas</a></li>
            <li><a href="">Adicionar Nova Receita</a></li>
          </ul>
        </nav>
      </header>

      {movie.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="titulo">{item.receita}</strong>
            <p className='ingredientes'>{item.ingredientes}</p>        
            <a className="botao" href="">Detalhes</a>
          </article>
        );
      })}
      <footer>
        <p>₢Todos os Direitos Reservados</p>
      </footer>
    </div>
  );
}
//exportar
export default App;
