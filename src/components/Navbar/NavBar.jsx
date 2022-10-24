// import { FaBeer } from "@react-icons/all-files/fa/FaBeer";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';



const NavBar = () => {
      return (
            <>
              <Navbar sticky="top" bg="dark" variant="dark" className='pr-5'>
        <Container>
          <Link to='/'><Navbar.Brand >
            <img
              alt="MSGames"
              src="../favicon.ico"
              width="30"
              height="30"
            />
            MSGames
          </Navbar.Brand></Link>
          <Nav className="pr-4">
            <div className='nav-sp'> <Link to='/category/monitor'> Monitores </Link> </div>
            <div className='nav-sp'> <Link to='/category/placa-video'> Placas de video </Link> </div>  
            <div className='nav-sp'> <Link to='/category/disco'> Discos </Link> </div>  
            <div className='nav-sp'> <Link to='/category/motherboard'> Motherboards </Link> </div>  
            <div className='nav-sp'> <Link to='/category/procesadores'> Procesadores </Link> </div>  
            <div className='nav-sp'> <Link to='/category/gabinete'> Gabinetes </Link></div>  
          </Nav>
        </Container>
          <Link to='/cart'><CartWidget/></Link>
      </Navbar>
      </>
          );
}

export default NavBar