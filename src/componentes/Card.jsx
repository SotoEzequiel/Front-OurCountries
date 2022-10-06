import React from "react"
import { Link } from "react-router-dom"
import estilos from "../style/Card.module.css"

export default function Card({name,id,img,continente}) {




  if(name){
    return(
      <Link className={estilos.cards} to={"/details/"+id}>         
        <img className={estilos.img} src={img} />
        <div className={estilos.div}>
          <h2 className={estilos.h2}>{name}</h2>
          <h3 className={estilos.h3}>{continente}</h3>
        </div>           
      </Link>
  )  
  }else{
    return <p className={estilos.noExiste}>NO EXIST...</p>
  }
     
}   