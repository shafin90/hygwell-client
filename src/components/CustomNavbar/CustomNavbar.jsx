// Component Explaination:  Navbar of this website. It takes place at the top of this website.

/* Css Class Explaination: 
1. nav-menu-container: This class is used in Nav. It makes the width  pixel perfect
2. nav-menu: This class is used in Nav.Link. it ensure the pixel perfect design of list item. 
*/

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./CustomNavbar.css"
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="py-0 w-100 ">
            <Container fluid style={{ width: "88.88888888888889vw" }} className=" d-flex  justify-content-between  align-content-center px-0 mx-0  mx-auto marginTopOfCustomNavBar" >

                {/* Logo of this website */}
                <Navbar.Brand href="#home">
                    <img className="logo" src="/assets/Images/HYGWELL-_-Logo-_-Final-1 1.png" alt="" />
                </Navbar.Brand>

                {/* Options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex  justify-content-between  align-items-center nav-menu-container">

                        <Link className="nav-menu text-decoration-none" to="/">Home</Link>

                        {/*Dropdown menu---------------  */}
                        <NavDropdown className="nav-menu" title="Products" id="basic-nav-dropdown" >
                            <NavDropdown.Item as={Link} to="/productsPharma">Pharma</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsNutra">Nutra </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsVetarn">Vetarn</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsHerbal"> Herbal </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsCosmetics"> Cosmetics </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsFragrance"> Fragrance </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsSexual"> Sexual </NavDropdown.Item>
                        </NavDropdown>
                        {/*Dropdown menu---------------  */}

                        <Link className="nav-menu text-decoration-none" to="#link">Services</Link>
                        <Link className="nav-menu text-decoration-none" to="/exports">Exports</Link>
                        <Link className="nav-menu text-decoration-none " to="/aboutUs">About Us</Link>
                        <Link className="nav-menu text-decoration-none" to="/ourTeam">Our Team</Link>
                        <Link className="nav-menu text-decoration-none" to="/contactUs">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;