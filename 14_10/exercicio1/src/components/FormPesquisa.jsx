//Componente form para pesquisa na barra de navegação

//1ª parte import
import './FormPesquisa.css'

//2ª parte function
function FormPesquisa(){
    return (
        
        <form class="search-form" role="search">
                <input type="search" placeholder="Busque o seu medo..." />
                <button type="submit"><i class="fas fa-search"></i></button>
            </form>
       
    )
}

export default FormPesquisa