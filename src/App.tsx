import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListOfUsers from './Components/ListOfUsers'
import { Toaster } from 'sonner'

import { CreateNewUser } from './Components/CreateNewUser'

function App() {
  

  return (
    <>
    <h1>Nuestro proyecto con redux</h1>
    <ListOfUsers/>
    <CreateNewUser/>
    <Toaster richColors/>
    </>
    
  )
}

export default App
