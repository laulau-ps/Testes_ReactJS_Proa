import React from 'react'
import ReactDOM from 'react-dom/client'

const meuArray = ['apple', 'banana', 'orange']

const minhaLista = meuArray.map((item) => <p>{item}</p>)

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(minhaLista)
