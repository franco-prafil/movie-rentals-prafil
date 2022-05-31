import "./NavBar.css"
import {Navbar, Nav, Container, Form, FormControl, Button, NavDropdown} from "react-bootstrap"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom"



const NavBar = () => {
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                {/* <Navbar.Brand href="#">MOVIE RENTALS</Navbar.Brand> */}
                <Navbar.Brand> 
                    <Link to="/" className="text-decoration-none text-white">MOVIE RENTALS</Link>
                </Navbar.Brand> 
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link>Home</Nav.Link>
                    {/* <Nav.Link><Link to="/" className="text-decoration-none text-muted">Home</Link></Nav.Link> */}
                    <NavDropdown title="Catálogo" id="basic-nav-dropdown">
                        <NavDropdown.Item className=""><Link to="" >Estrenos</Link></NavDropdown.Item>
                        <NavDropdown.Item className=""><Link to="" >Películas</Link></NavDropdown.Item>
                        <NavDropdown.Item className=""><Link to="" >Series</Link></NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Nav>

                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
                <CartWidget />
                </Nav>
                </Navbar.Collapse>
            </Container>
</Navbar>
    )
}

export default NavBar
