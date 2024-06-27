import React, { useState } from 'react'
import { useGameContext } from './resultadoContext'
import { useNavigate } from 'react-router-dom';
export const ModoPersonalizado = () => {
    // traigo el metodo psra personalizar el modo de juego del contex 
    const { updateModoPersonalizado } = useGameContext()
    const navigate = useNavigate();
    const [dios, setDios] = useState(1)
    const [veterano, setVeterano] = useState(2)
    const [normal, setNormal] = useState(3)

    //creo una funcion para modificar el modo de juego
    const modificarModo = (normal, veterano, dios) => {
        //hago una validacion para que se respete la gerarquia del juego es decir 
        //que el modo normal no tenga menos segundos que el modo veterano y dios
       if(normal > veterano && normal > dios && veterano > dios){
    //si se cumple con la condicion muestro un alert para indicar que se ha cambiado el modo de jeugo
    //y llamo al metodo updateModoPersonalizar para mandar los segundos con los que se ha configurado el juego
        alert(`El modo de juego a sido modificado correctamente \n
                para modo normal ${normal}sg \n
                para modo veterano ${veterano} sg \n
                para modo dios ${dios} sg`)

        updateModoPersonalizado({
            normal: normal,
            veterano: veterano,
            dios: dios
        })
        setTimeout(() => {
            navigate('/')
        }, 700);
       }else{
        //si no se cumple muestro un alert de que se debe de respetar la jerarquia
        alert("recuerda que debes de respetar la gerarquia de los modos")
       }
    }
    return (
        <>

            <h1 className='text-2xl font-bold text-center'>Modo Personalizado</h1>
            <h1 className='text-center text-lg mb-5 font-serif'>Para Personalizar los modos ten en cuenta que se debe de respetar la jerarquiar con respeto a los tiempos</h1>
            <section className='text-2xl text-white font-bold  flex gap-10  justify-center items-center '>
                <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                    <p className='text-black text-xl font-semibold'>Modo de juego Normal:</p>
                    <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {normal}sg</h1>

                    <div className='flex gap-5 justify-center' >
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setNormal(normal + 1)}
                        >➕</button>
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setNormal(normal - 1)}
                        >➖</button>
                    </div>
                   
                </div>
                <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                    <p className='text-black text-xl font-semibold'>Modo de juego Veterano:</p>
                    <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {veterano}sg</h1>
                    <div className='flex gap-5 justify-center' >
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setVeterano(veterano + 1)}
                        >➕</button>
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setVeterano(veterano - 1)}
                        >➖</button>
                    </div>
                   
                </div>
                <div className='border-2 border-gray-400 w-72 p-3 flex flex-col justify-center'>
                    <p className='text-black text-xl font-semibold'>Modo de juego Dios:</p>
                    <h1 className='text-black text-xl text-justify'>El tiempo que tienes para elegir una opcion es de {dios}sg</h1>
                    <div className='flex gap-5 justify-center' >
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setDios(dios + 1)}
                        >➕</button>
                        <button
                            className='w-16 h-10 border-2'
                            onClick={() => setDios(dios - 1)}
                        >➖</button>
                    </div>
                </div>
            </section>
               <h1 
               className='text-center font-bold text-2xl mt-5 cursor-pointer'
               onClick={()=>modificarModo(normal, veterano, dios)}>Guardar</h1>
        </>
    )
}
