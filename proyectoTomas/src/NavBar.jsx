import './cartWidget.jsx'
import './NavBar.css'
import CartWidget from './cartWidget.jsx'

export default function NavBar() {
    return (
        <>
            <div className='divTitulo'>
                <img className='iconoPrincipal' src="./src/assets/Iconotyt.jpeg"  />
                <h1>TyT-Shirts</h1> 
            </div>
            <nav>
                <button>Home</button>
                <button>Productos</button>
                <button>Contacto</button>
            </nav>
             <CartWidget/>
        </>
    )
}