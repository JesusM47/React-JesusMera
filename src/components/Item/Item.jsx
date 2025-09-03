
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Typography from '@mui/material/Typography';

import './Item.css'

export const Item = ({id, nombre, precio, foto, stock}) => {
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
            title={ <Typography sx={{fontSize:"19px", fontWeight: "bold"}}> {nombre} </Typography>}
            
            subtitle={
              <span>
                { <Typography 
                    sx={{ fontSize: "15px", fontWeight: "bold", color:"rgb(255, 255, 255)" }} component="span">
                    Precio: ${precio} <br/>
                  </Typography>}
                
                {stock && <><strong>Stock:</strong> {stock}</>} <br/>
                {<Link to={`/item/${id}`}>
        <Button size="small" sx={{ color:"rgb(68, 211, 255)" }}>
          Ver detalles
        </Button>
        </Link>}
              </span>
            }
          />
        </ImageListItem>
        
      
    </>
  )
}
