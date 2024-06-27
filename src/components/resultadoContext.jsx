import React, { createContext, useContext, useState } from 'react';
//creo un contexto que se va a llamar resultadoContext
const ResultadoContext = createContext();
// creo una funcion que se llama useGameContext y esta va ser la encarga de tener todas las funciones y todos los datos que necesitamos guardar
export function useGameContext() {
  return useContext(ResultadoContext);
}
// creo otra funcion para llamarla en el app.jsx se llema este componente y vamos a envolver a todas las rutas para que los datos 
// y las funciones tengan acceso a todas las funciones y datos
// se utiliza el children para decirle que todo los componentes hijos van a heredar los metodos
export function GameProvider({ children }) {
  //creo un objeto para guardar el resultado 
  const [gameData, setGameData] = useState({ });
  //creo un array de objetos para guardar todos los resultados
  const [resultData, setResultData] = useState([])
  //creo una variable modo que va ser el modo de juego por defecto
  const [modo, setModo] = useState(3)
  // creo un objeto que va a tener los segundos de cada modo modificado
  const [modoPersonalizado, setModoPersonalizado] = useState({})

  //creo un metodo para poder actualizar todos los datos 
  const updateModoPersonalizado = (updateModo)=>{
    setModoPersonalizado(updateModo)
  }
  const updateModo = (modo)=>{
    setModo(modo)
  }
  const updateResultData = (newData)=>{
      setResultData(prev=> [...prev, newData])
  }
  const updateGameData = (newData) => {
    setGameData(newData);
  };

  return (
    //llamo al componente resultContext y en value le mando todos los metodos y las variables que tienen la informacion
    <ResultadoContext.Provider value={{ gameData, updateGameData, resultData, updateResultData, modo, updateModo, modoPersonalizado, updateModoPersonalizado }}>
      {children}
    </ResultadoContext.Provider>
  );
}
