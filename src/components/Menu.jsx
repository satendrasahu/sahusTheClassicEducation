import React from 'react'
import { Nav, Navbar, NavDropdown} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


/**
* @author
* @function Menu
**/

const Menu = (props) => {
    return (
        <>
            <Navbar collapseOnSelect fixed="top" expand="lg" variant="dark" style={{ zIndex: 1, backgroundColor: '#000000' }}>
                <>

                    <NavLink to="/" className="navbar-brand">
                        <img
                            alt=""
                            src={process.env.PUBLIC_URL+"sahu1.jpg"}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Sahu's The Classic Education</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                           <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/ourclasses">Our Classses</NavLink>
                            <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/democlasses">Demo Classes</NavLink>-
                            <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/admission">Take Admission</NavLink>-
                            <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/main">Home</NavLink>-
                            <NavDropdown className="text-white"  title="More" id="basic-nav-dropdown">
                                {/* <NavDropdown.Item href="/admissionform">Admission Form</NavDropdown.Item>
                                <NavDropdown.Item href="/enquiry">Enquiry Form</NavDropdown.Item> */}
                                <NavDropdown.Item href="/certificates">Certificates</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/aboutus">About Us</NavLink>
                        <NavLink className="nav-link text-white" exact activeClassName="text-dark" to="/contactus">Contact Us</NavLink>
                    </Navbar.Collapse>
                </>

            </Navbar>
        
        
        
        </>
    )

}

export default Menu