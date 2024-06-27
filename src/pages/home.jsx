import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <article className='flex justify-center items-center flex-col'>
      <header className='flex justify-center items-center bg-sky-600 h-40 rounded-b-full w-full mb-20'>
        <h1 className='ml-36 text-white text-6xl text-center font-serif '>
          PaletteWords
        </h1>
      <img src="src/assets/logoStroop.png"  className='w-56 -translate-x-9 translate-y-4' alt="" />
      </header>

      <main className=''>
        <section className='flex gap-8'>
          <div className='border-2 w-56 h-40 flex flex-col justify-center items-center '>
            <img src="src/assets/play.png " className='w-20' alt="" />

            <Link to='/juego' className='text-lg font-bold'>Play</Link>
          </div>
          <div className='border-2 w-56 h-40 flex flex-col justify-center items-center'>
            <img src="src/assets/ajustes.png" className='w-16' alt="" />
            <Link to='/ajustes' className='text-lg font-bold'>Ajustes</Link>
          </div>

        </section>
        <section className='flex gap-8 mt-5'>
          <div className='border-2 w-56 h-40 flex flex-col justify-center items-center '>
            <img src="src/assets/puntaje.png" className='w-16' alt="" />
            <Link to='/resultados' className='text-lg font-bold'>Puntaje</Link>
          </div>
          <div className='border-2 w-56 h-40 flex flex-col justify-center items-center '>
            <img src="src/assets/pregunta.png" className='w-20' alt="" />
            <h1 className='text-lg font-bold'>Ayuda</h1>
          </div>
        </section>
      </main>

    </article>
  )
}
