import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGameContext } from '../components/resultadoContext'
export const Resultados = () => {
    const { resultData } = useGameContext()
    const resultFiltrados= [];
    resultData.forEach((element, indice) => {
        if( indice % 2 == 0){
            resultFiltrados.push(element)
        }
    }); 

    //primero ordeno los resultados del mayor porcentajen de palabras acetadas al menos luego con el metodo slice obtengo los 5 mayores 
    // y esos son los que muestro en la tabla 
    const topResult = resultFiltrados.sort((a, b) => b.puntaje - a.puntaje).slice(0,5)
    console.log(topResult)
    return (
        <article>
            <header className='flex justify-center items-center bg-sky-600 h-36 rounded-b-full mb-14 '>
                <h1 className='ml-36 text-white text-6xl text-center font-serif'>
                    PaletteWords
                </h1>
                <img src="src/assets/logoStroop.png"  className='w-56 -translate-x-9 translate-y-4' alt="" />
            </header>
            <div className="relative overflow-x-auto mb-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Cantidad Palabras
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Correctas
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Incorrectas
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Puntaje
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {topResult ? topResult.map((resultado, indice)=>(
                        <tr key={indice} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {resultado.cantidadPalabras}
                            </th>
                            <td className="px-6 py-4">
                                {resultado.correctas}
                            </td>
                            <td className="px-6 py-4">
                                {resultado.incorrectas}
                            </td>
                            <td className="px-6 py-4">
                                {resultado.puntaje}
                            </td>
                        </tr>
                        )):
                         <h1>No tienes resultados todavia</h1>}
                    </tbody>
                </table>
            </div>
                <Link className='w-32 text-center p-3 bg-black text-white rounded-lg ' to={'/'}>Regresar</Link>
        </article>
    )
}
