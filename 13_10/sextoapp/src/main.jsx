
import { createRoot } from 'react-dom/client'

const numeros = [1, 2, 3, 4]
const double = numeros.map(x => x * 2 + " ")

createRoot(document.getElementById('root')).render(
  double
)
