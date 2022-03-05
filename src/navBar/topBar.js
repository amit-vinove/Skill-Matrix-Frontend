import appCss from '../css/App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container  } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
<Navbar bg="dark" variant="dark"  className='p-3' expand="md">
    <Navbar.Brand href="#home" style={{fontWeight:'500'}}>VINOVE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
        <NavDropdown title="Amit Kumar" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1" >Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      <img src="https://img.icons8.com/color/48/000000/circled-user-male-skin-type-7--v2.png"/>
      </Nav>
    </Navbar.Collapse>
</Navbar>
  );
}

export default NavigationBar;
