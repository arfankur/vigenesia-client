import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { useNavigate } from 'react-router';

export default function Navigationbar() {

    let navigate = useNavigate();

    function logout() {
        // alert('logout');
        localStorage.removeItem('auth');
        navigate('/');
    }

    return (
        <>
            {/* <Navbar bg="light" expand="lg"> */}
            {/* <Navbar.Brand>Vigenesia</Navbar.Brand> */}
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
                    {/* <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse> */}
            <Nav className="justify-content-between align-items-center bg-primary" activeKey="/home">
                {/* <div className='mx-3'> */}
                    {/* <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>
                */}
                    <Nav.Item className='d-flex align-items-center' style={{height:"100%"}}>
                        {/* <Nav.Link>Link</Nav.Link> */}
                        <Nav.Link className='font-bold text-white'>
                        Vigenesia
                        </Nav.Link>
                            {/* Logout */}
                    </Nav.Item> 
                    <Nav.Item>
                        <Nav.Link className='text-white' onClick={logout}>Logout</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled>
                            Disabled
                        </Nav.Link>
                    </Nav.Item> */}
                {/* </div> */}
            </Nav>
            {/* </Navbar> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
        </>
    )
}
