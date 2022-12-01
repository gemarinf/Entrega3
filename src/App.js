import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Menu from "./pages/Menu";
import Buscar from "./pages/Buscar";
import Conocenos from "./pages/Conocenos";
import Formulario from "./pages/Formulario";



function App(){
  return(
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/menu" element={<Menu/>} />
        <Route path="/buscar" element={<Buscar />} />
        <Route path="/conocenos" element={<Conocenos />} />
        <Route path="/formulario" element={<Formulario />} />
        
      

      </Routes>
      
      </BrowserRouter>

    </div>



  );


}

export default App;