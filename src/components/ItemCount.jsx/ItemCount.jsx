
import { useState } from 'react'

import './ItemCount.css'

export const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const decrementar = () => {
        if(contador > inicial) {
            setContador(contador - 1)
        }
    }

    // console.log(contador)

  return (

    <>

    <div className='counter'>
        <h2>Piezas</h2>
        <button onClick={decrementar}>-</button>
        <p>{contador}</p>
        <button onClick={incrementar}>+</button>
    </div>

    <div className='add-to-cart'>
        <button onClick={() => funcionAgregar(contador)}>Agregar al carrito</button>
    </div>
    
    </>

    
  )
}
