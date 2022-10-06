import axios from "axios";

export default async function CrearActividadEnBD(actividad){
    let json = await axios.post("http://localhost:3001/country",actividad)

    console.log(json)
}


CrearActividadEnBD({
    name:"chuch",
    dificultad:4,
    duracion:3,
    temporada:"summer",
    idPais:["ARG","COL"]
})