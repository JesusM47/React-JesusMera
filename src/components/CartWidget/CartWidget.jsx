import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../../context/CarritoContext';


export const CartWidget = () => {

  const {cantidadTotal} = useContext(CarritoContext)

  return (

    <div >
        
        <Link to="/cart">
        <ShoppingCartIcon style={{ color: 'black', fontSize: '2rem'  }} />
        {
          cantidadTotal > 0 && <strong>{cantidadTotal}</strong>
        }
        </Link>
        
    </div>
      
    
  )
}
