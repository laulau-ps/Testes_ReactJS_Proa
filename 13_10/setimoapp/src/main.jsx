import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const veiculos = ['mustang', 'f-150', 'expedition']

const [carro, caminhao, suv] = veiculos

document.getElementById('root').innerHTML = "Desestruturação de matrizes: " + carro + caminhao + suv
