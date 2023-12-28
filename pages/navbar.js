import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import main from '/styles/Main.module.scss'
import Link from 'next/link'
const Navbar1 = () => {

    return (
        <>
            <div className='fixed-top'>
                <div className=" container-fluid p-0">
                    <div className={main.headerdiv}>
                        <div className="container">
                            <Navbar expand="lg" className="p-4 p-lg-0 ">
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white shadow-none' />
                                <Navbar.Collapse id="basic-navbar-nav" className='d-flex justify-content-center'>
                                    <Nav>
                                        <Link href='/' legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>Home</li></a></Link>
                                        <Link href="/about" legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>About</li></a></Link>
                                        <Link href="/project" legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>Project</li></a></Link>
                                        <Link href="/service" legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>Service</li></a></Link>
                                        <Link href="/blog" legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>Blog</li></a></Link>
                                        <Link href="/contact-us" legacyBehavior className='p-0' ><a className={main.navlinkdiv}><li>Contact Us</li></a></Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar1


// 22222222222222.............{{{{{{{{{{{    navbar      }}}}}}}}}}}