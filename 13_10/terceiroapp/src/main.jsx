import { createRoot } from 'react-dom/client'

function Teste() {
  return (
    <>
      <h1>Teste em aula dia 15/10</h1>
      <p>Teste de ReactJs com somente main, sem App
        <br />
        Neste tipo, o main.jsx recebe as funções, invés do App. Mantém apenas o import do createRoot e ao renderizar, inclui somente o nome da função a ser exibida.
      </p>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <Teste />
)
