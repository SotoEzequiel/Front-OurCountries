import React from "react"
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import {CrearActividad, GetCountries} from "../redux/actions"
import { useHistory } from "react-router-dom";
import estilo from "../style/ActivityCreate.module.css"
import { useEffect } from "react";

export default function ActivityCreate() {

    const dispatch=useDispatch()
    const stateRedux=useSelector(e=>e)
    const history=useHistory()

    useEffect(()=>{
        dispatch(GetCountries())
        
    },[])

    const [state,setState]=useState({
            name:"",
            dificultad:3,
            duracion:1,
            temporada:"Winter",
            paisID:[]
        })
    let array=[]
    const [errorPais,setErrorPais]=useState("")
    const [error,setError] = useState("")
    

   
////////////////////////////////////////////////////


        //validacionaes
    function hadledName(e) {
        let name=e.target.value
        if( name.length>3 && name.length<20 && /([a-z])\w+/.test(name) ) {
        setError("")
        setState({
            ...state,
              name
        })
        }else setError("Name must have more than three letters and less than twenty, also numbers are not allowed.")
    }
    function handledDificultad(e) { 
       
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }
    function hadledDuracion(e) {
        let duracion=e.target.value
        setState({
            ...state,
            duracion
        })
    }
    function agregarPaises(e){
    e.preventDefault()
    if (e.target.value==="Select a country ID") return
    let array=state.paisID;
    array.push(e.target.value)
    setState({
        ...state,
        paisID:array
    })
    setErrorPais("")
    console.log(state)
    }
    //////////////////////////boton de enviar 
     async function OnClickEnviar(e) {
        e.preventDefault()
        if (!state.name) {
            setError("you must add an activity name")
            return
        }
        if (!state.paisID.length) {
            setErrorPais("you must add an country id")
            return
        }
        
        console.log(state)
        dispatch(CrearActividad(state))
        history.push('/created')
    }
    


    return(
        <div className={estilo.todo}>
            <h1 className={estilo.tituloCreate}>Create</h1>
            <div className={estilo.name}>
                <label className={estilo.nameName}>Name : </label>
                <input className={estilo.nameInput} type="text" name="name" id="" onChange={e=>hadledName(e)}/>
                {
                    error.length?<p className={estilo.error}>{error}</p>:null
                }
            </div>
            <div className={estilo.dificultad}>
                <label className={estilo.dificultadTitulo} htmlFor="">dificult</label>
                <div >
                    <input className={estilo.dificultadName} type="radio" name="dificultad" id="" value={1} onClick={e=>handledDificultad(e)}/>very easy
                    <input className={estilo.dificultadName} type="radio" name="dificultad" id="" value={2} onClick={e=>handledDificultad(e)}/>easy
                    <input className={estilo.dificultadName} type="radio" name="dificultad" id="" value={3} defaultChecked onClick={e=>handledDificultad(e)}/>normal
                    <input className={estilo.dificultadName} type="radio" name="dificultad" id="" value={4} onClick={e=>handledDificultad(e)}/>hard
                    <input className={estilo.dificultadName} type="radio" name="dificultad" id="" value={5} onClick={e=>handledDificultad(e)}/>very hard
                </div>
            </div>
            <div className={estilo.duracion}>
                <label className={estilo.duracionTitulo} htmlFor="">Duration aprox :</label>
                <select className={estilo.duracionSelect} name="duracion" id="" onChange={e=>handledDificultad(e)}>
                    <option value="1" defaultChecked>1:00 hour</option>
                    <option value="2">2:00 hours</option>
                    <option value="3">3:00 hours</option>
                    <option value="4">4:00 hours</option>
                    <option value="5">5:00 hours</option>
                    <option value="6">6:00 hours</option>
                    <option value="7">7:00 hours</option>
                    <option value="8">8:00 hours</option>
                    <option value="9">9:00 hours</option>
                    <option value="10">10:00 hours</option>
                    <option value="11">11:00 hours</option>
                    <option value="12">12:00 hours</option>
                </select>
            </div>
            <div className={estilo.temporada}>
                <label className={estilo.temporadaTitulo} htmlFor="">season</label>
                <div>
                    <input className={estilo.temporadaName} type="radio" name="temporada" id="Autumn" value="Autumn" onClick={e=>handledDificultad(e)} />Autumn
                    <input className={estilo.temporadaName} type="radio" name="temporada" id="Summer" value="Summer" onClick={e=>handledDificultad(e)}/>Summer
                    <input className={estilo.temporadaName} type="radio" name="temporada" id="Winter" value="Winter" defaultChecked onClick={e=>handledDificultad(e)}/>Winter
                    <input className={estilo.temporadaName} type="radio" name="temporada" id="Spring" value="Spring" onClick={e=>handledDificultad(e)}/>Spring

                </div>
            </div>
            <div className={estilo.pais}>
                
                    <label className={estilo.paisTitulo} htmlFor="">Country ID:</label>
                    <select className={estilo.paisName} name="pais" id="pais" onChange={e=>agregarPaises(e)}>
                        <option>Select a country ID</option>
                        {stateRedux.allCountry?.map(p=>{
                            return <option key={p.id} value={p.id} >{p.name+"("+p.id+")"}</option>
                        })}
                    </select>
                    {state.paisID&&state.paisID.map(e=>{
                       return(<div className={estilo.paisID} key={e}>
                           <p>{e}</p>
                           </div>
                       )}
                    )}
                    {errorPais&&<p className={estilo.error}>{errorPais}</p>}
                
            </div>
            <div className={estilo.crear}>
                <input className={estilo.crearBoton} type="button" onClick={e=>OnClickEnviar(e)} value="Crate Activity"/>
            </div>
        </div>
    )
}