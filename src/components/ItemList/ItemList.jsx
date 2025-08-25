
import { Item } from '../Item/Item'

import ImageList from '@mui/material/ImageList';
import Grid from '@mui/material/Grid';

export const ItemList = ({libros}) => {
  return (
    
    <>

    <ImageList sx={{ width: '100%', height: '100%' }} cols={6}>
          {libros.map(item => <Item key={item.id} {...item} />)}
    </ImageList>
   

    </>
    
  )
}
