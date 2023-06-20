import React from "react";
import Swal from "sweetalert2";

const Navbar = ({ brand }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand text-uppercase" href="/">
          {brand}
        </a>
        <button
        className="btn btn-info"
        onClick={() =>
          Swal.fire("Info del Grupo 2", "Integrantes XXXXXXX", "success")
        }
      >
        <i className="fa-solid fa-info"> - Grupo 2</i>
      </button>
      </div>
    </nav>
  );
};

export default Navbar;
