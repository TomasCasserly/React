import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Brand href="#home">Lotus Argentina</Navbar.Brand>
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
        </Navbar>


    )
}

export default NavBar;