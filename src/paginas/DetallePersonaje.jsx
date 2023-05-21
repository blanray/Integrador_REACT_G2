import {get} from "../utilidades/clienteAPI.js"
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"

import "./DetallePersonaje.css"

export const DetallePersonaje=()=>{
    const [personaje,setPersonaje] = useState(null)

    const {personajeId} = useParams()

    useEffect(()=>{
       get(`/${personajeId}`).then((data)=>{
            setPersonaje(data);
        }) 
        },[personajeId])

        if(!personaje){
            return null;
        }
        const imgURL= `${personaje.image}`
        return(
<div className="contenedorDetalle">
 <img className="col" src={imgURL} alt={personaje.name} />
<div className="personajeDetalle col">
<p className="item">
    <strong>Nombre: </strong>
    {personaje.name}
</p>
<p >
    <strong>Origen: </strong>
    {personaje.origin.name}
</p>

<p >
    <strong>Genero: </strong>
    {personaje.gender}
</p>

<p >
    <strong>Ubicacion: </strong>
    {personaje.location.name}
</p>


</div>
</div>

    

        )

}