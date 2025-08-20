import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'

export const NavBar = () => {
  return (

    <>
    <header>
        <h1>BookShop</h1>

        <nav>
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
        </nav>

<CartWidget />

    </header>

    
    </>
  )
}
