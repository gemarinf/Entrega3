import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Outlet, Link } from "react-router-dom";
import '../css/Menu.css';


const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('id', {path: "/"});
        cookies.remove('apellido_paterno', {path: "/"});
        cookies.remove('apellido_materno', {path: "/"});
        cookies.remove('nombre', {path: "/"});
        cookies.remove('username', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('username')){
            window.location.href="./";
        }
    }

    render() {
        console.log('id: '+ cookies.get('id'));
        console.log('apellido_paterno: '+cookies.get('apellido_paterno'));
        console.log('apellido_materno: '+cookies.get('apellido_materno'));
        console.log('nombre: '+cookies.get('nombre'));
        console.log('username: '+cookies.get('username'));
        return (
            <div>
                 <>
      <nav>
        <ul>
          <li>
            <Link to="/Buscar">Buscador</Link>
          </li>
          <li>
            <Link to="/formulario">Formulario cotizacion</Link>
          </li>
          <li>
            <Link to="/conocenos">Conocenos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>







                <br />
                <button onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
            </div>





        );
    }
}

export default Menu;