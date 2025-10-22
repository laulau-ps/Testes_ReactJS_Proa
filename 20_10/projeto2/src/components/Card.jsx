import React from "react";

function Card(props){
    return (
        <div>
           <h2> {props.titulo} </h2> 
           <p>{props.descricao}</p>
           <footer>Autor: {props.autor}</footer>
        </div>
    )
}

export default Card