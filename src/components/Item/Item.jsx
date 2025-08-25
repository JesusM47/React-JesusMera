
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

import './Item.css'

export const Item = ({id, nombre, precio, foto}) => {
  return (
    <>
    
        <ImageListItem key={id}>
          <img
            src={foto}
            alt={nombre}
            loading="lazy"
          />
          <ImageListItemBar 
            className="title"
            title={nombre}
            subtitle=
            {<Typography sx={{ fontSize: "17px", fontWeight: "bold", color:"rgb(32, 137, 91)" }} component="span">
            Precio: ${precio}
            </Typography>}
            position="below"
          />
           <Link to={`/item/${id}`}>
        <Button size="small" color="primary">
          Ver detalles
        </Button>
        </Link>
        </ImageListItem>
        
      
    </>
  )
}
