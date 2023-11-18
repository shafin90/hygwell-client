// Component Explaination:  Navbar of this website. It takes place at the top of this website.

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./CustomNavbar.css"
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <Navbar expand="lg" className="py-0 w-100 mb-5  mt-4  ">
            <Container  className=" d-flex  justify-content-between  align-content-center px-md-0 px-lg-0 px-xl-0  px-xxl-0 mx-0  mx-auto " >

                {/* Logo of this website */}
                <Navbar.Brand href="#home">
                    <img className="logo" src="/assets/Images/HYGWELL-_-Logo-_-Final-1 1.png" alt="" />
                </Navbar.Brand>

                {/* Options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-between align-items-center">

                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2  rounded-3  " to="/">Home</Link>

                        {/*Dropdown menu---------------  */}
                        <NavDropdown className="nav-menu d-flex justify-content-center align-items-center fw-semibold  px-2  rounded-3 " title="Products" id="basic-nav-dropdown" >
                            <NavDropdown.Item as={Link} to="/productsPharma">Pharma</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsNutra">Nutra </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsVetarn">Vetarn</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsHerbal"> Herbal </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsCosmetics"> Cosmetics </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsFragrance"> Fragrance </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/productsSexual"> Sexual </NavDropdown.Item>
                        </NavDropdown>
                        {/*Dropdown menu---------------  */}

                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="#link">Services</Link>
                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="/exports">Exports</Link>
                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="/aboutUs">About Us</Link>
                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="/ourTeam">Our Team</Link>
                        <Link className="nav-menu d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="/contactUs">Contact Us</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;