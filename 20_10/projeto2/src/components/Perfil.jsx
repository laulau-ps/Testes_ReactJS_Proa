import React, {useState} from 'react'

function Perfil() {
    const [usuario, setUsuario] = useState (
        {
            nome: 'Laura',
            idade: 20,
            cidade: 'Sao Paulo'
        }
    )

const mudarPerfil = () => {
    setUsuario(
        {
            ...usuario,
            nome: 'jao',
            cidade: 'Rio de Janeiro'
        }
    )
}

return (
    <div>
        <p>Nome: {usuario.nome}</p>
        <p>Idade: {usuario.idade}</p>
        <p>Cidade: {usuario.cidade}</p>
        <button onClick={mudarPerfil}>Mudar Perfil</button>
    </div>
)

}

export default Perfil