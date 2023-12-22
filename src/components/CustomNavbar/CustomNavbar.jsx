// Component Explaination:  Navbar of this website. It takes place at the top of this website.

import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import "./CustomNavbar.css"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const CustomNavbar = () => {
    const { pathname } = useLocation();
    console.log(pathname)

    return (
        <Navbar expand="lg" className="py-0 w-100 mb-5  mt-4  ">
            <Container className=" d-flex  justify-content-between  align-content-center px-md-0 px-lg-0 px-xl-0  px-xxl-0 mx-0  mx-auto " >

                {/* Logo of this website */}
                <Navbar.Brand href="#home">
                    <img className="logo" src="/assets/Images/HYGWELL-_-Logo-_-Final-1 1.png" alt="" />
                </Navbar.Brand>

                {/* Options */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex justify-content-between align-items-center">

                        <Link
                            className={pathname == "/" ?
                                "d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2  rounded-3 bg-success text-white"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2  rounded-3"
                            }
                            to="/"
                        >
                            Home
                        </Link>


                        <Link
                            className={pathname == "/productsPharma" ?
                                "d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2  rounded-3 bg-success text-white"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2  rounded-3"
                            }
                            as={Link} 
                            to="/productsPharma"
                        >
                            Products
                        </Link>

                        

                        <Link className="text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3 " to="#link">
                            Services</Link>

                        <Link
                            className={pathname == "/exports"
                                ?
                                "d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3  text-white bg-success"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-4 py-2 rounded-3"
                            }
                            to="/exports">
                            Exports
                        </Link>

                        <Link
                            className={pathname == "/aboutUs"
                                ?
                                "text-white d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3 bg-success"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3"
                            }
                            to="/aboutUs">
                            About Us
                        </Link>


                        <Link
                            className={pathname == "/ourTeam"
                                ?
                                "d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3 text-white bg-success"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3"
                            }
                            to="/ourTeam"
                        >
                            Our Team
                        </Link>

                        <Link
                            className={pathname == "/contactUs"
                                ?
                                "d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3 text-white bg-success"
                                :
                                "text-black d-flex justify-content-center align-items-center  text-decoration-none fw-semibold px-3 py-2 rounded-3"
                            }
                            to="/contactUs">
                            Contact Us
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;