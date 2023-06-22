import { useState, useEffect } from "react";
import { useNavigate, Navigate, useParams } from "react-router-dom";
import { PersonajesCard } from "../components/PersonajesCard/PersonajesCard.jsx";
import "./BuscarPersonaje.css";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  where,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig/firebase";

export const BuscarPersonaje = () => {
  const navigate = useNavigate();

  const [miTexto, setMiTexto] = useState();

  const [personajes, setPersonajes] = useState([]);

  const personajesCollection = collection(db, "RaM");

  const { textoBuscar } = useParams();

  const personajeCollection = collection(db, "RaM");

  console.log("El texto buscado es: " + textoBuscar);

  async function buscarDocumentos() {
    //const miFiltro = query(personajeCollection, where('name', '==', textoBuscar))

    const miColeccion = await getDocs(personajeCollection);

   
    const miColeccionFiltrada = miColeccion.docs.filter(personajeFiltrado =>
      personajeFiltrado
      .data()
      .name.toString()
      .toLowerCase()
      .includes(textoBuscar.toString().toLowerCase())
    );

    setPersonajes(
      miColeccionFiltrada.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  }

  function filtrarDocumentos(miTexto) {
    console.log(
      "Lei coleccion filtrada en buscador. El Largo es: " + personajes.length
    );

  }

  useEffect(() => {
    buscarDocumentos();
    setTimeout(() => {
      filtrarDocumentos(textoBuscar);
    }, 3000);
  }, [textoBuscar]);

  return (
    <ul className="personajesGrid">
      {personajes.map((personaje) => (
        <PersonajesCard key={personaje.id} personaje={personaje} />
      ))}
    </ul>
  );
};
