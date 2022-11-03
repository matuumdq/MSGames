import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './PageNotFound.css'

const PageNotFound = () => {
  return (
      <div className='error'>
      <p >La pagina que buscas, no existe!</p>
      <Link to={'/'}> <Button>Volver al Inicio</Button></Link>
      </div>
  )
}

export default PageNotFound