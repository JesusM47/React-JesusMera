import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({libros}) => {
  return (
    
    <div>

        {libros.map(item => <Item key={item.id} {...item} />)}

    </div>
    
  )
}
