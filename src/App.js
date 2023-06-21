import React, {useEffect, useState} from "react";
import Navbar from "./components/NavBar/Navbar"
//import Characters from "./components/Characters";
//import { Pagination } from "./components/Pagination";
import { LandingPage } from "./paginas/LandingPage";
import { DetallePersonaje } from "./paginas/DetallePersonaje";
import { EditarPersonaje } from "./paginas/EditarPersonaje";
import { BuscarPersonaje } from "./paginas/BuscarPersonaje";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";


function App() {

//   const [characters, setCharacters] = useState([]);

//   const [info,setInfo] = useState({});

//   const initialUrl = "https://rickandmortyapi.com/api/character";

//   const fetchCharacters = (url) =>{
//     fetch(url)
//       .then(response => response.json())   //viene en json y transformo en js//
//       .then(data=>{
//         setCharacters(data.results);
//         setInfo(data.info);
//       }) //guardamos los datos en data y hacemos que haga un console.log de data//
//       .catch(error => console.log(error))
//   };

// const onPrevious = () => {
// fetchCharacters(info.prev);
// }

// const onNext = () => {
//   fetchCharacters(info.next);
// }

//   useEffect(()=> {
//     fetchCharacters(initialUrl);
//   },[])
  return (
   <>
   

   <BrowserRouter>
   <Navbar brand="Rick and Morty"/>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/personaje/:personajeId" element={<DetallePersonaje/>}/>
          <Route path="/editar/:personajeId" element={<EditarPersonaje/>}/>
          <Route path="/buscar/:textoBuscar" element={<BuscarPersonaje/>}/>
        </Routes>
      </BrowserRouter>
{/* 
  <div className="container mt-5">
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    <Characters characters={characters}/>
    <Pagination prev={info.prev} next={info.next} onPrevious={onPrevious} onNext={onNext}/>
    </div>    */}
   </>
  );
}

export default App;
