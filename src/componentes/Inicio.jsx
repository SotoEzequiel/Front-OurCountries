import React from "react"
import {Link, Redirect} from "react-router-dom"
import stilos from  "../style/Inicio.module.css"
function Inicio(params) {
  
    return(
        <div className={stilos.fondo}>
            <h1 className={stilos.letra}>Our Countries</h1>
            <Link className={stilos.link} to="/home">
                <h1 className={stilos.link}>Start</h1>
            </Link>
            <div className={stilos.footer}>Developed by <a className={stilos.a} href="https://www.linkedin.com/in/ezequiel-soto/">Ezequiel Soto</a></div>
        </div>
    )
}
export default Inicio;