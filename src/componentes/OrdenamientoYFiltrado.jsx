import React from "react";
import { Filtrar_Continente, Ordenamiento_Poblacion, Ordenamiento_Nombre, Filtrar_Estacion } from "../redux/actions";
import { useDispatch } from "react-redux";
import estilos from "../style/home.module.css"


export default function OrdenamientoYFiltrado({ setCurrentPage }) {


    const dispatch = useDispatch()

    // /////////////FUNCIONES////////////////////

    ////FILTRADO
    function filtrado_continente(e) {
        dispatch(Filtrar_Continente(e.target.value))
        setCurrentPage(1)
    }
    function Filtrar_estacion(e) {
        dispatch(Filtrar_Estacion(e.target.value))
        setCurrentPage(1)
    }

    ////ORDENAMIENTO
    const Ordenamiento_personas = (e) => {
        dispatch(Ordenamiento_Poblacion(e.target.value))
        setCurrentPage(1)
    }
    const ordenamineto_name = (e) => {
        dispatch(Ordenamiento_Nombre(e.target.value))
        setCurrentPage(1)
    }


    return (
        <div className={estilos.filtro}>
            <div>
                <h4 className={estilos.hPrincipal}>Filters</h4>
                <div>
                    <h5 className={estilos.hSecundario}>Continents</h5>
                    <select className={estilos.select} onChange={(e) => filtrado_continente(e)}>
                        {/* <select className={estilos.select}> */}
                        <option value="all">All</option>
                        <option value="Asia">Asia</option>
                        <option value="Africa">África</option>
                        <option value="Oceania">Oceanía</option>
                        <option value="Europe">Europe</option>
                        <option value="Americas">Americas</option>
                        <option value="Antarctic">Antarctic</option>
                    </select>
                </div>
                <div>
                    <h5 className={estilos.hSecundario}>Activity Seasons</h5>
                    <select className={estilos.select} onChange={e => Filtrar_estacion(e)}>
                        {/* <select className={estilos.select}> */}
                        <option value="all">All</option>
                        <option value="Spring">Spring</option>
                        <option value="Summer">Summer</option>
                        <option value="Autumn">Autumn</option>
                        <option value="Winter">Winter</option>
                    </select>
                </div>
            </div>
            <div>
                <h4 className={estilos.hPrincipal}>Ordering</h4>
                <div>
                    <h5 className={estilos.hSecundario}>Countries</h5>
                    <select className={estilos.select} onChange={(e) => ordenamineto_name(e)} >
                        {/* <select className={estilos.select}> */}

                        <option value="a-b">A-Z</option>
                        <option value="b-a">Z-A</option>

                    </select>
                </div>
                <div>
                    <h5 className={estilos.hSecundario}>Population</h5>
                    <select className={estilos.select} onChange={(e) => Ordenamiento_personas(e)}>

                        {/* <select className={estilos.select}> */}

                        <option value="mayor" >Major</option>
                        <option value="menor">Minor</option>
                    </select>
                </div>
            </div>
        </div>
    )
}