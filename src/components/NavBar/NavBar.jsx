import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css'
import {Link, NavLink} from "react-router-dom"

export const NavBar = () => {
  return (

    
    <header>
      <Link to="/">
        <h1>BookShop</h1>
      </Link>
        <nav>
            <ul>
                <li><NavLink to="categoria/cienciaficcion">Ciencia Ficcion</NavLink></li>
                <li><NavLink to="categoria/novela">Novela</NavLink></li>
                <li><NavLink to="categoria/fantasia">Fantasia</NavLink></li>
            </ul>
        </nav>

<CartWidget />

    </header>

    
  )
}
