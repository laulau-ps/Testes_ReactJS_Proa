import {createRoot} from 'react-dom/client'
import Aplicativo from './App.jsx'
import React from 'react' 

createRoot(document.getElementById('raiz')).render (
    <React.StrictMode>
        <Aplicativo />
    </React.StrictMode>
)