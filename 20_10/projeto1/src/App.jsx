import React from 'react';
import BoasVindas from './components/BoasVindas';
import './App.css'; // Um CSS básico para o App

function App() {
  return (
    <div>
      <BoasVindas nome = "Laura" cargo = "Dev juninho"/>
    <BoasVindas nome = "Danilo" cargo = "UI/UX"/>
    </div>
  )
}

export default App;