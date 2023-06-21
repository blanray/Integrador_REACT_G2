import "./Buscador.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
export const Buscador = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    navigate(`/buscar/${searchText}`); 
console.log("El texto a buscar es: " + searchText)  
};

  return (
    <form className="buscadorContainer" onSubmit={handleSubmit}>
      {" "}
      <div className="buscadorBox">
        <span>Texto a buscar en Nombre: </span>
        <input
          value={searchText} 
          onChange={(e) =>
            setSearchText(e.target.value)
          } 
          type="text"
          className="buscadorInput"
        />
        <button type="submit" className="buscadorButton">
        <i className="fa-solid fa-binoculars"></i>
        </button>
      </div>
    </form>
  );
};