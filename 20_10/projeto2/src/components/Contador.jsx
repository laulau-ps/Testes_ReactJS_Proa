import React, {useState} from 'react'
import './Contador.css'

function Contador(){
    const [numero, setNumero] = useState(0)

    
    const incrementar = () => {
        setNumero(numero + 1)
    }

    const decrementar = () => {
        if (numero >0){
            setNumero(numero - 1)
        }
        
    }


    return (
        <div>
            <h2>Contador de Cliques</h2>
            <p>Voce clicou {numero} vezes</p>
            <button onClick={incrementar}>Incrementar</button>

            <button onClick={decrementar} className='decremento' >Decrementar</button>
        </div>
    )
}

export default Contador