import { useState } from 'react'
import Card from './components/Card'
import Contador from './components/Contador'
import Perfil from './components/Perfil'
import './App.css'

function App() {

  return (
    <>
      <h1>Livros de Terror</h1>
      <Card
        titulo="A Longa Marcha"
        descricao="Universo distopico pos guerra"
        autor="Stephen King"
      />
      <Contador />
      <Perfil />
    </>
  )
}

export default App
