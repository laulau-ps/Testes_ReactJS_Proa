import React, {useState} from 'react'

function Perfil() {
    const [usuario, setUsuario] = useState (
        {
            nome: 'Laura',
            idade: 20,
            cidade: 'Sao Paulo'
        }
    )

const mudarCidade = () => {
    setUsuario(
        {
            ...usuario,
            cidade: 'Rio de Janeiro'
        }
    )
}

return (
    <div>
        <p>Nome: {usuario.nome}</p>
        <p>Idade: {usuario.idade}</p>
        <p>Cidade: {usuario.cidade}</p>
        <button onClick={mudarCidade}>Mudar Cidade</button>
    </div>
)

}

export default Perfil