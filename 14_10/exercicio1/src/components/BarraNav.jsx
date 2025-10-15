//Componente da barra de navegação (nav)

//1ª parte import
import './BarraNav.css'

//2ª parte - function
function BarraNav() {
    return (
            <nav aria-label="Navegação Principal">
                <ul>
                    <li><a href="#lancamentos">Lançamentos</a></li>
                    <li><a href="#categorias">Gêneros</a></li>
                    <li><a href="#">Minha Conta</a></li>
                </ul>
            </nav>
    )
}

export default BarraNav