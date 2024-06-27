import React, { useEffect, useState } from 'react'
import { useGameContext } from '../components/resultadoContext'
import { useNavigate } from 'react-router-dom';
import { ModoPersonalizado } from '../components/modoPersonalizado';
export const Ajustes = () => {
    const [estado, setEstado] = useState(false)
 
    const navigate = useNavigate();
    //traigo al componente useGameContext que es el que tiene todos los metodos y las variables con los datos
    const { updateModo, modoPersonalizado, updateModoPersonalizado } = useGameContext();
    //creo un metodo para comprobar el usuario en que modo quiere jugar pero tambien compruebo si los modos de juegos 
    //han sido personalizados si han sido personalizdos se juega con los segundos especificados si no con los segundos por defecto
    const comprobarModo = (modo) => {
        if (modo == 'normal') {
            updateModo(modoPersonalizado.normal || 3)
        } else if (modo == 'veterano') {
            updateModo(modoPersonalizado.veterano || 2)

        } else if (modo == 'dios') {
            updateModo(modoPersonalizado.dios || 1)
        }
        setTimeout(() => {
            navigate('/')
        }, 700);
    }

    //creo un metodo para recetar los valores del juego personalizado y empiece a jugar en el modo por defecto
    const recetarJuego=()=>{
        alert("El juego se a receteado correctamente")
        updateModoPersonalizado({})
    }

    return (
        <article>
            <header className='flex justify-center items-center bg-sky-600 h-40 rounded-b-full w-full mb-10'>
                <h1 className='ml-36 text-white text-6xl text-center font-serif '>
                    PaletteWords
                </h1>
                <img src="src/assets/logoStroop.png" className='w-56 -translate-x-9 translate-y-4' alt="" />
            </header>
            {estado == false ?
                <>
                    <h1 className='text-2xl font-bold mb-5 text-center'>Modo de juego</h1>
                    <section className='text-2xl text-white   flex gap-10   items-center justify-center'>
                        <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                            <p className='text-black text-xl font-semibold'>Modo de juego:</p>
                            <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {modoPersonalizado.dios?modoPersonalizado.dios: '1'}sg</h1>
                            <h1 className='text-black text-xl font-semibold'>Eligir: </h1>
                            <button className='bg-black p-5 rounded-lg pl-10 pr-10 hover:scale-90 ' onClick={() => comprobarModo('dios')}>Modo Dios</button>
                        </div>
                        <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                            <p className='text-black text-xl font-semibold'>Modo de juego:</p>
                            <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {modoPersonalizado.veterano ? modoPersonalizado.veterano: '2'}sg</h1>
                            <h1 className='text-black text-xl font-semibold'>Eligir: </h1>
                            <button className='bg-black p-5 rounded-lg pl-10 pr-10 hover:scale-90' onClick={() => comprobarModo('veterano')}>Modo Veterano</button>
                        </div>
                        <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                            <p className='text-black text-xl font-semibold'>Modo de juego:</p>
                            <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {modoPersonalizado.normal ? modoPersonalizado.normal: '3'}sg</h1>
                            <h1 className='text-black text-xl font-semibold'>Eligir: </h1>
                            <button className='bg-black p-5 rounded-lg pl-10 pr-10 hover:scale-90' onClick={() => comprobarModo('normal')}>Modo Normal</button>
                        </div>
                    </section>
                    <div className='flex justify-center gap-10 '>
                    <h1 
                    className='text-2xl font-semibold cursor-pointer text-red-500 mt-10'
                    onClick={()=>setEstado(true)}>Personalizar el juego</h1>
                    <h1
                    className='text-2xl font-semibold cursor-pointer  text-green-500 mt-10'
                    onClick={()=>recetarJuego()}
                    >Recetear Juego</h1>
                    </div>
                    
                    </>
                :
                <ModoPersonalizado/>
            }

        </article>
    )
}
