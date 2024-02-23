//Hooks React
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from "react";
import "./style.css"; //estilo

function Detalhes(){ 
  const [receitas, setReceita] = useState([]);  // controlar o estado

  useEffect( () => { //função para consumir a api    
    function carregaDados(){
      let url = 'http://localhost:3000/receitas';

      fetch(url)
      .then((r) => r.json())
      .then((json) => {
        setReceita(json);
      })
    }
    carregaDados();
  },[]);

  return(
    <div className='container'>
      {receitas.map((item) => { //percorrendo a api
        return(
          <article className='post' key={item.id}>
            <strong className="titulo">{item.receita}</strong>
            <img className='foto' src={item.link_imagem}/>      
            <a className="botao" href="">Detalhes</a>
          </article>
        );
      })}
    </div>
  );
}
//exportar
export default Detalhes;
