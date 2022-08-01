import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import { Nav, Navbar,  Container,  } from 'react-bootstrap'


const Layout = ({children}) => {
    return(
      <>
        <>
        <Navbar collapseOnSelect expand="lg" sticky="top" className='bg-secondary'>
            <Container>
                <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' ><h1 className='colorcambia'>Div<span className='colorcambia2'>Geek</span></h1></Nav.Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav  justify-content-between">
                    <Nav className="me-auto  d-flex  ">
                    </Nav>
                    <Nav>
                        <Nav.Link href='#inicio' ><h5 className='text-white text-center'>inicio</h5></Nav.Link>
                        <Nav.Link href='#mas-info'><h5 className='text-white text-center'>Más informacion</h5></Nav.Link>
                        <Nav.Link href='#Matematicos'><h5 className='text-white text-center'>Famosos Matematicos</h5></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        {children}
        <Navbar collapseOnSelect expand="lg"  className='bg-secondary'>
            <Container>
                <Nav.Link target="_blank" href='https://nosotros-q0clom4pi-faure1.vercel.app' ><h1 className='colorcambia'>Div<span className='colorcambia2'>Geek</span></h1></Nav.Link>
                <Nav className="me-auto  d-flex  ">
                </Nav>
                <Nav>
                    <Nav.Link className=''><h5 className=" text-light ">© DivGeeks Industries/ From SFFN</h5></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </>
    </>
    )
}
export default Layout;
