import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import main from '/styles/Main.module.scss'
import Link from 'next/link'
const Navbar1 = () => {
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = () => {
      setExpanded(false);
    };
    return (
        <>
            <div className='fixed-top'>
                <div className=" container-fluid p-0">
                    <div className={main.headerdiv}>
                        <div className="container">
                            <Navbar expand="lg" className="p-4 p-lg-0 " expanded={expanded}>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white shadow-none'   onClick={() => setExpanded(!expanded)}/>
                                 <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav  onSelect={() => setExpanded(false)}>
                                        <Link href='/' legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>Home</li></a></Link>
                                        <Link href="/about" legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>About</li></a></Link>
                                        <Link href="/project" legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>Project</li></a></Link>
                                        <Link href="/service" legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>Service</li></a></Link>
                                        <Link href="/blog" legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>Blog</li></a></Link>
                                        <Link href="/contact-us" legacyBehavior className='p-0' passHref><a className={main.navlinkdiv}  onClick={handleNavItemClick}><li>Contact Us</li></a></Link>
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