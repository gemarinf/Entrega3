import React,{ Component } from 'react';
import Buscador  from '../componentes/Buscador';
import Resultado from '../componentes/Resultado';

class Buscar extends Component{

  state={
    termino: '',
    imagenes : [],
    pagina: ''
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotrom');
    elemento.scrollIntoView('smooth', 'start');
  }


pagAnterior = () => {
  let pagina = this.state.pagina;

  if (pagina === 1) return null;
  pagina -= 1;

  //cambios en el state
  this.setState({
    pagina
  },() => {
    this.consultarApi();
    this.scroll();

  });
  
  //console.log('anterior ...');

} 

pagSiguiente = () => {
  let pagina = this.state.pagina;
  pagina += 1;

  //cambios en el state
  this.setState({
    pagina
  }, () => {
    this.consultarApi();
    this.scroll();

  });
}
consultarApi = () =>{
  const termino = this.state.termino;
  const pagina = this.state.pagina;
  const url =`https://pixabay.com/api/?key=31707652-6b339d9ae5733956cae762cf3&q=${termino}&per_page=30&page=${pagina}`;
  //console.log(url);

fetch(url)
.then(respuesta => respuesta.json())
.then(resultado => this.setState({ imagenes : resultado.hits}) )
}


  datosBusqueda = (termino) =>{
    this.setState({
      termino: termino,
      pagina: 1
    }, () => {
      this.consultarApi();
    })
  }
  
  render(){
    return(


      
      <div className='app container'>
        <div className='jumbotrom'>
          <p className='lead text.center'>Buscador de imagenes</p>
          <Buscador
          datosBusqueda={this.datosBusqueda}/>

        </div>
       <div className='row justify-content-center'>
        <Resultado 
        imagenes={this.state.imagenes}
        pagAnterior={this.pagAnterior}
        pagSiguiente={this.pagSiguiente}
        />


       </div>

       
      </div>

    );

  }
}
export default Buscar;



