import React from "react"
import {Link} from "react-router-dom"
import stilos from  "../style/Inicio.module.css"
function Inicio(params) {
  
    return(
        <>
        <div className={stilos.fondo}>
            <h1 className={stilos.letra}>Our Countries</h1>
            <div className={stilos.footer}>Developed by <a className={stilos.a} href="https://www.linkedin.com/in/ezequiel-soto/">Ezequiel Soto</a></div>
        </div>
        <div className={stilos.counterLink}>
            <Link className={stilos.link} to="/home">
                Start
            </Link>
        </div>
        </>
    )
}
export default Inicio;