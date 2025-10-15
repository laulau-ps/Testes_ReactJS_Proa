import { createRoot } from 'react-dom/client'

const variavelTeste = (
<table>
  <tr>
    <th>Nome</th>
  </tr>
  <tr>
    <th>Jão</th>
  </tr>
  <tr>
    <th>Eugenia</th>
  </tr>
</table>
)

createRoot(document.getElementById('root')).render(
  variavelTeste
)
