function BoasVindas(props) {
    return (
        <div>
            <h2>Bem-vindo, {props.nome}</h2>
            <p>Seu cargo e: {props.cargo}</p>
        </div>
    )
}

export default BoasVindas