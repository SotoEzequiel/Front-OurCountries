import React, { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useEffect, } from "react";
import { GetCountries} from "../redux/actions";
import Card from "./Card.jsx";
import SearchBar from "./SearchBar.jsx"
import OrdenamientoYFiltrado from "./OrdenamientoYFiltrado";
import Paginado from "./Paginado";
import estilos from "../style/home.module.css"



export default function Home() {

    let stateRedux=useSelector(e=>e)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetCountries())
        
    },[])
    //////////////////////PAGINADO//////////////////
    const [currentPage,setCurrentPage]=useState(1)
    const indexOfLastCountry=currentPage*22;
    const indexOfFirstCountry=indexOfLastCountry - 22;
    const currentCountry=stateRedux&&stateRedux.country.slice(indexOfFirstCountry,indexOfLastCountry)
    const paginado=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    
    return(
        <div className={estilos.divPrincipal}>
            <OrdenamientoYFiltrado setCurrentPage={setCurrentPage}/>
            <div  className={estilos.SearchBar}>
                        <SearchBar />
            </div>

            <div>
                <div>
                    <Paginado  paginado={paginado} 
                    allCountries={stateRedux&&stateRedux.country.length}
                    currentPage={currentPage}
                    />
                    
                   
                    
                    
                    <div className={estilos.cards}>{
                    currentCountry&&currentCountry.length?currentCountry.map(c=>{
                        return(
                            <div  key={c.id}>
                                    <Card  name={c.name} img={c.img} continente={c.continente} id={c.id}/>
                            </div>
                        )}):<p>cargando</p>
                }
                
                </div>
                {!currentCountry.length && <div className={estilos.eror}>charging...</div> }
                </div>
            </div>
            <div >
                <a style={{color:"aqua",fontSize:30}}href="https://www.linkedin.com/in/ezequiel-soto/">
                Developed by Ezequiel Soto
                    </a>
                
            </div>
            
            
            
        </div>
    )
}