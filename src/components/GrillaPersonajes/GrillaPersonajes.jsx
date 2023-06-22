import { get } from "../../utilidades/clienteAPI";
import { useState, useEffect } from "react";
import { PersonajesCard } from "../PersonajesCard/PersonajesCard.jsx";
import "./GrillaPersonajes.css";
//import { Pagination } from "../components/Pagination.js";
import {
  collection,
  getDocs,
  // deleteDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebaseConfig/firebase";
import { Spin } from "../../componentes/spinner";

export const GrillaPersonajes = () => {
  const [loading, setLoading] = useState(true);
  const [personajes, setPersonajes] = useState([]);
  // const [cabecera, setCabecera] = useState([]);
  const [personajesAPI, setPersonajesAPI] = useState([]);
  // const [cargar, setCargar] = useState(true);

  const personajesCollection = collection(db, "RaM");

  const llenarColeccion = async () => {
    const data = await getDocs(personajesCollection);
    if (data.length !== 0) {
      setLoading(false);

      setPersonajes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log("Lei coleccion en principal");
      console.log("El largo de la coleccion leida es: " + personajes.length);
    } else {
      setLoading(true);
      console.log('Loading en true')
    }
  };

  const crearDato = async () => {
    await get("").then((data) => {
      setPersonajesAPI(data.results);
      // setCabecera(data.info);

      console.log(data.results);
      console.log(data.info);
    });
  };

  useEffect(() => {
    //Primero veo la coleccion a ver si tiene algo
    //  setCargar(false);
    setTimeout(() => {
      llenarColeccion();
    }, 1000);

    if (personajes.length === 0) {
      console.log("La coleccion estaba vacia");
      //setCargar(true);
      crearDato();

      console.log("Lei la API con: " + personajesAPI.length + " personajes");

      personajesAPI.forEach((misPersonas) => {
        subirPersonaje(misPersonas);
      });

      //      llenarColeccion();
    }

    //llenarPersonajes();
  }, []);


  const subirPersonaje = async (misPersonas) => {

    await setDoc(doc(db, "RaM", String(misPersonas.id)), {
      name: misPersonas.name,
      origin: misPersonas.origin.name,
      location: misPersonas.location.name,
      image: misPersonas.image,
      gender: misPersonas.gender,
    })
      .then(() => {
        console.log("Guarde en Firestore el ID:" + misPersonas.id);
      })
      .catch((error) => {
        console.log("Error guardando: " + error);
      });
    //setCargar(false);
  };

  // async function vaciarColeccion() {}

  // async function llenarPersonajes() {

  //   setTimeout(() => {
  //     console.log("Espere 3 segundo")
  // }, 3000)

  //   const data = await getDocs(personajesCollection);
  //   setPersonajes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

  //   setTimeout(() => {
  //     console.log("Espere 3 segundos")
  // }, 3000)

  //   console.log("Lei coleccion en principal");
  //   console.log("El largo de la coleccion leida es: " + personajes.length);

  //   if (personajes.length == 0) {
  //     console.log("La coleccion estaba vacia");

  //     await get("").then((data) => {
  //       setPersonajesAPI(data.results);
  //       setCabecera(data.info);

  //       setTimeout(() => {
  //         console.log("Espere 3 segundo")
  //     }, 3000)

  //       console.log(data.results);
  //       console.log(data.info);

  //       setTimeout(() => {
  //         console.log("Espere 3 segundos")
  //     }, 3000)

  //       personajesAPI.forEach((misPersonas) => {
  //       console.log("Voy a guardar el ID: " + misPersonas.id)
  //         setDoc(doc(db, "RaM", String(misPersonas.id)), {
  //           name: misPersonas.name,
  //           origin: misPersonas.origin.name,
  //           location: misPersonas.location.name,
  //           image: misPersonas.image,
  //           gender: misPersonas.gender,
  //         })
  //           .then(() => {
  //             console.log("Guarde en Firestore el ID:" + misPersonas.id);
  //           })
  //           .catch((error) => {
  //             console.log("Error guardando: " + error);
  //           });
  //       });
  //     });
  //   }
  // }

  if (loading) {
    return (
      <>
        <Spin />
      </>
    )
  } else {
    return (
      <ul className="personajesGrid">
        {personajes.map((personaje) => (
          <PersonajesCard key={personaje.id} personaje={personaje} />
        ))}
      </ul>
    );
  }
};
