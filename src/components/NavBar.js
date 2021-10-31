import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
            <img className="logo" src="https://logowik.com/content/uploads/images/lotus-cars4304.jpg" alt="Logo" />
                <Navbar.Brand href="/">Lotus Argentina</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#historia">Historia</Nav.Link>
                        <NavDropdown title="Modelos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Elise</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Exige</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Emira</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Evija - El Futuro</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <CartWidget/>
        </Navbar>


    )
}

export default NavBar;