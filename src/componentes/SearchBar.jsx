import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {Buscar_PorNombre} from "../redux/actions.js"
import estilos from "../style/SearchBar.module.css"


export default function SearchBar({paginado}) {

    const [state,setState]=useState("")
    const dispatch=useDispatch()
    const imputChange=(e)=>{
        setState(e.target.value)
        
    }
    const Buscar_nombre=(e)=>{
        e.preventDefault()
        dispatch(Buscar_PorNombre(state))
        setState("");
        paginado(1)
    }
    console.log(paginado)
    return(
        <div className={estilos.div}> 
            
                <input className={estilos.bar} type="text" value={state} placeholder="Search..." onChange={e=>imputChange(e)} />
                <button className={estilos.button} type="submit" onClick={e=>Buscar_nombre(e)}>Search</button>
           
        </div>
    )
}