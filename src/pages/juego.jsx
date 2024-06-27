import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from "react-router-dom"
import { useGameContext } from '../components/resultadoContext'

export const Juego = () => {
    const [tiempo, setTiempo] = useState(30)
    const [cantidad, setCantidad] = useState(0)
    const [correctas, setCorrectas] = useState(0)
    const [incorrectas, setIncorrectas] = useState(0)
    const [isActive, setIsActive] = useState(true);
    const [palabraRandom, setPalabraRandom] = useState(3)
    const [colorRandom, setcolorRandom] = useState(1)
    const [clik, setClik] = useState(false)
    const { updateGameData, modo } = useGameContext()
    const [tiempoPalabra, setTiempoPalabra] = useState(modo)
    const [juegoActivo, setJuegoActivo] = useState(true)
    const [division, setDivision] = useState(0)
    const [result, setResult] = useState(0)
    let id = 1;
    //creo un array de palabras con los colores permitidos por los requerimientos
    const palabras = ["Azul", "Amarillo", " Rojo", "Negro", "Verde", "Purpura", "Naranja"]
    //creo un array con los colores permitidos por los requerimientos
    const color = [
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-sky-600",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-yellow-600",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-red-600",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-slate-900",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-lime-500",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-indigo-600",
        "border-4 border-zinc-950 w-64 h-64 rounded-full text-center pt-28 text-4xl text-orange-400",
    ]

    //creo un metodo para comprobar si la opcion que el usuario es correcta o incorrecta
    const comprobar = (correcto) => {
        setClik(true)
        //seteo el tiempo que el usuario tiene para responder es decir cada responda el tiempo de contestar se actualiza al que viene en el modo
        setTiempoPalabra(modo)
        // llamo al array de palabras y con math.flor le estoy diciendo que me devuelva un entero 
        // y con el math.random me devuelve un numero aleatorio teniendo en cuenta el tamaño del array
        const PalabraRandom = Math.floor(Math.random() * palabras.length);
        const ColorRandom = Math.floor(Math.random() * color.length)
        setPalabraRandom(PalabraRandom)
        setcolorRandom(ColorRandom)
        if (palabraRandom == colorRandom && correcto == "correcto") {
            setCorrectas(correctas + 1)

        } else if (palabraRandom != colorRandom && correcto == "incorrecto") {
            setCorrectas(correctas + 1)

        } else {
            setIncorrectas(incorrectas + 1)
        } 
        //divido las palabras correctas cantidad de palabras y luego multiplo por 100 
        //para sacar un porcentaje de palabras acertadas
        setCantidad(cantidad + 1)
        setDivision(correctas / cantidad)
        setResult(division * 100)
        
    }
    //creo un useEffect para tomar en cuenta el tiempo que tiene el usuario en elegir una opcion 
    // si el juego esta activo el tiempo de la palabra va a decrementar de uno en uno 
    useEffect(() => {
        if(juegoActivo){
        const interval = setInterval(() => {
          setTiempoPalabra((prevTiempo) => prevTiempo - 1);
        }, 1000);
        // si el tiempo de la palabra de acaba y el usuario no a escogido una opcion se considera incorrecto
        if (tiempoPalabra === 0) {
          // se incrementa el contador de palabras incorrectas, el cantidad luego se hacen las operacion para llevar el porcentaje
          // de palabras acertadas y se genera una nueva palabra y un nuevo color
          setIncorrectas(incorrectas + 1);
          setCantidad(cantidad + 1)
          setDivision(correctas / cantidad)
          setResult(division * 100)
          const nuevaPalabraRandom = Math.floor(Math.random() * palabras.length);
          const nuevoColorRandom = Math.floor(Math.random() * color.length);
          setPalabraRandom(nuevaPalabraRandom);
          setcolorRandom(nuevoColorRandom);
          setTiempoPalabra(modo); // Reiniciar el tiempo
        }
        return () => clearInterval(interval);
      }}, [tiempoPalabra, incorrectas, juegoActivo, cantidad, division, result]);

//se crea un useEffect para decrementar el tiempo de la puebra 
    useEffect(() => {
        let interval = null;
        if (isActive && tiempo > 0) {
            interval = setInterval(() => {
                setTiempo((prevTiempo) => prevTiempo - 1);
            }, 1000);
            //si el tiempo es igual a cero quiere decir que la prueba ya se termino
        } else if (isActive && tiempo === 0) {
            setIsActive(false);// paso el estado del juego a false para que no siga incrementando las palabras incorrectas
            const porcentaje =Math.floor(result).toFixed(2)// guardo en una variable el porcentaje y 
            //en este caso quiero que tome el porentaje entero y dos decimales

            //llamo al metodo para actualizar los datos del resultado y mando todos los datos
            updateGameData({
                id: id,
                correctas: correctas,
                incorrectas: incorrectas,
                cantidadPalabras: cantidad,
                porcentaje: porcentaje
            })
            setJuegoActivo(false)
        }
        return () => {
            clearInterval(interval);
        };
    }, [isActive, tiempo]);

    return (
        <article>
            <section className='flex justify-around p-10 mb-10 bg-sky-600 h-40 rounded-b-full text-white text-3xl'>
                <div className='text-center'>
                    <h1>{cantidad}</h1>
                    <h1 className=''>cantidad de palabras</h1>
                </div>
                <div className='text-center'>
                    <h1>{correctas}</h1>
                    <h1>Correctas</h1>
                </div>
                <div className='text-center'>
                    <h1>{Math.floor(result).toFixed(2)} %</h1>
                    <h1>Porcentaje</h1>
                </div>
                <div className='text-center'>
                    <h1>{tiempo}</h1>
                    <h1>tiempo restante</h1>
                </div>
            </section>

            <section className='flex justify-center mb-12'>
                <div className={color[colorRandom]}>{palabras[palabraRandom]}</div>
            </section>
            {tiempo == 0 ? <button >
                <NavLink className='text-2xl font-bold pl-28' to='/resultado'>Resultado</NavLink>
            </button> :
                <section className='flex items-center justify-center gap-24 mb-32'>
                    <img src="src/assets/correcto.png" alt=""
                        className='w-24 cursor-pointer'
                        onClick={() => comprobar("correcto")} />
                    <img src="src/assets/logoStrooper.png" alt=""
                        className='w-24' />
                    <img src="src/assets/incorrecto.png" alt=""
                        onClick={() => comprobar("incorrecto")}
                        className='w-24 cursor-pointer' />
                </section>
            }
        </article>

    )
}
