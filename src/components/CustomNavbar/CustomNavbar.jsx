// Component Explaination:  Navbar of this website. It takes place at the top of this website.

/* Css Class Explaination: 
1. nav-menu-container: This class is used in Nav. It makes the width  pixel perfect
2. nav-menu: This class is used in Nav.Link. it ensure the pixel perfect design of list item. 
*/

import { Container, Nav, Navbar } from "react-bootstrap";
import "./CustomNavbar.css"


const CustomNavbar = () => {

    return (
        <Navbar expand="lg" className="py-0 w-100 ">
            <Container fluid style={{ width: "88.88888888888889vw" }} className=" d-flex  justify-content-between  align-content-center px-0 mx-0  mx-auto marginTopOfCustomNavBar" >

                {/* Logo of this website */}
                <Navbar.Brand href="#home">
                    <img className="logo" src="../../../public/assets/Images/logo.png" alt="" />
                </Navbar.Brand>

                {/* Options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex  justify-content-between  align-content-center nav-menu-container">
                        <Nav.Link className="nav-menu" href="#link">Home</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">Products</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">Services</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">Exports</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">About Us</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">Our Team</Nav.Link>
                        <Nav.Link className="nav-menu" href="#link">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;