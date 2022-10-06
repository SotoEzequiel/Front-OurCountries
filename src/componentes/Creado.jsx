import React from "react";
import {Link} from "react-router-dom"
import estilo from "../style/creado.module.css"
export default function Creado() {
    return(
        <div className={estilo.todo}>
            <p className={estilo.titulo}>Activity Created</p>
            <Link className={estilo.home} to="/home">
               Home
            </Link>
            <Link className={estilo.more} to="/creation">
                Create more
            </Link>
        </div>
    )
}