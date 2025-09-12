import Spinner from 'react-bootstrap/Spinner';


export const Loader = () => {
  return (
     <Spinner animation="border" variant="danger">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
