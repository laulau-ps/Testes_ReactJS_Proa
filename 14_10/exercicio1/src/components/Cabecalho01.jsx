//Componente do cabeçalho da página

//1ª parte import
import FormPesquisa from "./FormPesquisa"
import BarraNav from "./BarraNav"
import './Cabecalho01.css'

//2ª parte function
function Cabecalho01(){
    return(
        <header class="site-header">
            <div class="container header-content">
                <h1 class="logo">Abismo Flix</h1>
                <BarraNav />
                <FormPesquisa />
            </div>
        </header>
    )
}

export default Cabecalho01