//importação dos componentes e reinderização dos componentes

//1ª parte: import

import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import React from 'react'

//2ª parte: root

createRoot(document.getElementById('laura')).render(
  //modo restrito, literal
  <React.StrictMode>
    <App />
  </React.StrictMode>
)