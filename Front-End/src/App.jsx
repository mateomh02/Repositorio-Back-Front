import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {NavBar} from './components/NavBar'
import {SideNav} from './components/SideNav'
import {Login} from './components/Login'
import {Registro} from './components/Registro'
import { ListadoOrdenes } from './components/ListadoOrdenes'



function App() {

  const user = true

  return (
    <div className="App">
      
      {/* {user ? <SideNav/> : <Login/> } */}
      <ListadoOrdenes/>

        
    </div>
  )
}

export default App
