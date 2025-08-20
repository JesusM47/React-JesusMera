
export const ItemDetail = ({id, nombre, precio , foto}) => {
  return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>Id: {id}</h3>
        <img src={foto} alt={nombre} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, rem nulla? Modi libero exercitationem delectus voluptatibus est incidunt, in quibusdam consectetur quia corporis cupiditate vero maxime tenetur officiis dolorum corrupti!</p>
    </div>
  )
}
