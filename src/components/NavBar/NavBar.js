import "./NavBar.css"
import {Navbar, Nav, Container, NavDropdown} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand> 
                    <Link to="/" className="text-decoration-none text-white">MOVIE RENTALS</Link>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link><Link to="/" className="text-decoration-none text-muted">Home</Link></Nav.Link>
                    <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item><Link to={`/category/Estrenos`} className="text-decoration-none text-muted" >Estrenos</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={`/category/Peliculas`} className="text-decoration-none text-muted" >Películas</Link></NavDropdown.Item>
                        <NavDropdown.Item><Link to={`/category/Series`} className="text-decoration-none text-muted" >Series</Link></NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
