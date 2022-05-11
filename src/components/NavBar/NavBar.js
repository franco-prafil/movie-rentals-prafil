import "./NavBar.css"
import {Navbar, Nav, Container, Form, FormControl, Button} from "react-bootstrap"



const NavBar = () => {
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">MOVIE RENTALS</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Estrenos</Nav.Link>
                    <Nav.Link href="#action2">Películas</Nav.Link>
                    <Nav.Link href="#action2">Series</Nav.Link>
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Buscar"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-light">Buscar</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
</Navbar>
    )
}

export default NavBar
