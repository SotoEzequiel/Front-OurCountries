import React from "react"
import { useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import estilos from "../style/Details.module.css"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { GetCountries } from "../redux/actions"


export default function Details() {

    const {id} = useParams()
    
    let stateRedux = useSelector(e => e)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetCountries())

    }, [])


    const history = useNavigate()
    return (
        <>
            {stateRedux.allCountry ? stateRedux.allCountry.map(e => {
                if (e.id == id) {
                    return (
                        <div className={estilos.todo}>
                            <button onClick={() => history('/home')} className={estilos.volver}>Home</button>
                            <div className={estilos.pais}>
                                <div className={estilos.flag}>
                                    <img className={estilos.img} src={e.img} alt={"imagen de " + e.name} />
                                    <div className={estilos.flagR}>
                                        <p className={estilos.name}>{e.name}</p>
                                        <p className={estilos.name}>Capital: {e.capital}</p>
                                        <p className={estilos.name}>Population: {e.poblacion}</p>
                                    </div>
                                </div>
                                <div className={estilos.extra}>
                                    <div className={estilos.datost}>
                                        <p className={estilos.datos}>Continent:  { e.continente}</p>
                                        <p className={estilos.datos}>Subregion:  {e.subregion}</p>
                                        <p className={estilos.datos}>Area:  {e.area}km²</p>
                                        <p>{"Car side:    "+e.car}</p>
                                        <p>Main time zone:  {e.timezone}</p>
                                    </div>
                                    <iframe src={e.maps} width="500" height="400" ></iframe>
                                </div>
                            </div>
                            <div>
                                {e.activities.length ?
                                    <div className={estilos.actividades}>
                                        <h1 className={estilos.ATitulo}>Activities</h1>
                                        {e.activities.map(a => {
                                            return (
                                                <div className={estilos.datosActividades}>
                                                    <p className={estilos.p}>Name: {a.name}</p>
                                                    <p className={estilos.p}>Season: {a.temporada}</p>
                                                    <p className={estilos.p}>Difficulty level: {a.dificultad == 1 && "(1) very easy"} {a.dificultad == 2 && "(2) easy"}{a.dificultad == 3 && "(3) normal"}{a.dificultad == 4 && "(4) hard"}{a.dificultad == 5 && "(5) very hard"}</p>
                                                    <p className={estilos.p}>Duration: {a.duracion}:00 hours</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    : <h1>no activities</h1>}
                            </div>

                        </div>
                    )
                }
            }) : <h1>Cargando...</h1>
            }
        </>
    )



}