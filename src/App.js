import { LandingPage } from "./paginas/LandingPage";
import { DetallePersonaje } from "./paginas/DetallePersonaje";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import "./App.css";

function App() {
  return (
   <BrowserRouter>
      <header>
        <Link to="/">
          <h1 className="title">Personajes</h1>
        </Link> 
        </header>

        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/personaje/:personajeId" element={<DetallePersonaje/>}/>
        </Routes>
 
      </BrowserRouter>
  );
}

export default App;
