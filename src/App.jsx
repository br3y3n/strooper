
import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home'
import { Juego } from './pages/juego'
import { Resultado } from './pages/resultado'
import { GameProvider } from './components/resultadoContext'
import { Resultados } from './pages/resultados'
import { Ajustes } from './pages/ajustes'

function App() {
  
const AppRouter =()=>{
  let router = useRoutes([
    {path: "/", element: <Home/>},
    {path: "/juego", element: <Juego/>},
    {path: "/resultado", element: <Resultado/>},
    {path: "/resultados", element: <Resultados/>},
    {path: "/ajustes", element:<Ajustes/>}
  ])

  return router
}
  return (
  <BrowserRouter>
  <GameProvider>
  <AppRouter/>
  </GameProvider>
  </BrowserRouter>
  )
}

export default App
