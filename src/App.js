import { useEffect, useState } from 'react';
import './App.css';
import Bebida from './Componentes/Bebida/Bebida';
import FormularioBebida from './Componentes/FormularioBebida/FormularioBebida';
import axios from 'axios';

function App() {
  const [nombreBebida, setNombreBebida] = useState( '' );
  const [listaBebidas, setListaBebidas] = useState( [] );

  const buscarBebida = ( event ) => {
    event.preventDefault();
    setNombreBebida( (nombrePrev) => event.target.nombreBebida.value );
  }

  /*
  useEffect( () => {
    async function request(){
      try{
        let respuesta = await axios.get( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}` );
        setListaBebidas( (listaPrev) => respuesta.data.drinks );
      }
      catch( err ){
        console.log( err );
      }
    }
    request();
  }, [nombreBebida] ); 
  */

  useEffect( () => {
    axios.get( `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nombreBebida}` )
      .then( respuesta => {
        setListaBebidas( (listaPrev) => respuesta.data.drinks );
      })
      .catch( err => {
        console.log( err );
      });

  }, [nombreBebida] );

  return (
    <div className="App">
      <FormularioBebida buscarBebida={buscarBebida}/>
      {
        listaBebidas.map( (bebida, indice) => {
          return (
            <Bebida key={`bebida_`+indice} bebida={bebida} />
          );
        })
      }
    </div>
  );

}

export default App;
