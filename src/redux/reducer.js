
const initialState={
    allCountry:[],
    country:[]
}

function rootReducer(state=initialState,action) {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                allCountry:action.payload,
                country:action.payload
            }
        case "FILTRAR_CONTINENTE": 

            let todas=state.allCountry;
            let retorno=[];
            console.log(action.payload)
            retorno=todas.filter(e=>e.continente==action.payload)
            if(action.payload==="all"){
                return {
                    ...state,
                    country:state.allCountry
                }
            }else{
                return{
                    ...state,
                    country:retorno
                }
            }
            
        case "FILTRAR_ESTACION":

            if(action.payload==="all") return{...state,country:state.allCountry}
            let pais=state.allCountry;
            let array=[]
            for (let i = 0; i < pais.length; i++) {
               for (let j = 0; j < pais[i].activities.length; j++) {
                    if(pais[i].activities[j].temporada===action.payload){
                        array.push(pais[i]);
                        break;
                    }
               }
            }
            return{
                ...state,
                country:array
            }


        case "ORDENAR_POBLACION":
            console.log(action.payload);
            let paises=state.allCountry
            if(action.payload=="all") return{
                ...state,
                country:paises
            }
                if(action.payload==="mayor"){
                    paises=paises.sort((a,b)=>{
                        if(a.poblacion>b.poblacion) return -1
                        if(a.poblacion<b.poblacion) return 1
                        return 0
                    })
                    return{
                        ...state,
                        country:paises
                    }
                }if(action.paylaod==="menor"){
                    paises=paises.sort((a,b)=>{
                        if(a.poblacion>b.poblacion) return 1
                        if(a.poblacion<b.poblacion) return -1
                        return 0
                    })
                    return{
                        ...state,
                        country:paises
                    }

                }

        case "ORDENAR_NOMBRE":
            console.log(action.payload);
            let paisAB=state.allCountry
            if(action.payload==="all") return {
                ...state,
                country:paisAB
            }


            if(action.payload==="a-b"){
                paisAB=paisAB.sort((a,b)=>{
                    if(a.name>b.name) return 1
                    if(a.name<b.name) return -1
                    return 0
                })
                return{
                    ...state,
                    country:paisAB
                }
            }else{
                paisAB=paisAB.sort((a,b)=>{
                    if(a.name>b.name) return -1
                    if(a.name<b.name) return 1
                    return 0
                })
                return{
                    ...state,
                    country:paisAB
                }

            }

        case "GET_NOMBRE":
            

            return{
                ...state,
                country:action.payload
            }
        case "error":

            return{
                ...state,
                country: [{img :null}]
            }
        default:
            return{
                ...state
            }
    }
}


export default rootReducer