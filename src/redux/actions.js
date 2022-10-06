import axios from "axios"


export function GetCountries() {
    return async function (distpatch) {
        try {
            let api = await axios.get("/country")

            return distpatch({
                type: "GET_COUNTRIES",
                payload: api.data
            })

        } catch (error) {
            return
        }

    }
}
//filtradooooooooooo
export function Filtrar_Continente(continente) {
    // console.log(continente);
    return function (dispatch) {
        return dispatch({
            type: "FILTRAR_CONTINENTE",
            payload: continente,
        })
    }

}
export function Filtrar_Estacion(payload) {
    return function (dispatch) {
        return dispatch({
            type: "FILTRAR_ESTACION",
            payload
        })
    }
}
//ordenamientoooooo
export function Ordenamiento_Poblacion(payload) {
    return function (dispatch) {
        return dispatch({
            type: "ORDENAR_POBLACION",
            payload
        })
    }
}
export function Ordenamiento_Nombre(payload) {
    return function (dispatch) {
        return dispatch({
            type: "ORDENAR_NOMBRE",
            payload
        })
    }
}

///////////busquedaaaaaaa/////////
export function Buscar_PorNombre(name) {
    return async function (dispatch) {
        try {
            let api = await axios.get("/country?name=" + name)
            return dispatch({
                type: "GET_NOMBRE",
                payload: api.data
            })  
        } catch (error) {
            console.log(error)
        }
        
    }

}
export function CrearActividad(actividad) {
    return async function (dispatch) {
        try {
            let json = await axios.post("/activity", actividad)
            console.log(json)
            return json
        } catch (error) {
            console.log(error)
        }
    }
}