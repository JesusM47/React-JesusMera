import { useState } from "react"
import { Link } from "react-router-dom";
import { ItemCount } from "../ItemCount.jsx/ItemCount";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const ItemDetail = ({id, nombre, precio , foto, author, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0)

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados" + cantidad)
  }

  return (
    <>


    <Card sx={{ maxWidth: 500, margin: 'auto' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={foto}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

        <h2>Nombre: {nombre}</h2>
        <h3>Autor: {author}</h3>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={foto} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem nulla? Modi libero exercitationem delectus voluptatibus est incidunt, in quibusdam consectetur quia corporis cupiditate vero maxime tenetur officiis dolorum corrupti!</p>

      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }

    </>
  )
}
