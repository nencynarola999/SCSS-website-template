import React, { useState } from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import main from '/styles/Main.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Navbar1 = () => {
    let router = useRouter()
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = () => {
        setExpanded(false);
    };
    return (
        <>
            <div className='fixed-top'>
                <div className=" container-fluid p-0 g-0">
                    <div className={main.headerdiv}>
                        <div className="container g-0">
                            <Navbar expand="lg" className="p-4 p-lg-0 " expanded={expanded}>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white shadow-none' onClick={() => setExpanded(!expanded)} />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav onSelect={() => setExpanded(false)}>
                                        <Link href='/' className={`${router?.asPath == "/" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>Home</li></Link>
                                        <Link href="/about" className={`${router?.asPath == "/about" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>About</li></Link>
                                        <Link href="/project" className={`${router?.asPath == "/project" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>Project</li></Link>
                                        <Link href="/service" className={`${router?.asPath == "/service" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>Service</li></Link>
                                        <Link href="/blog" className={`${router?.asPath == "/blog" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>Blog</li></Link>
                                        <Link href="/contact-us" className={`${router?.asPath == "/contact-us" ? `${main.navlinkdiv2}` : ` ${main.navlinkdiv}`}`} onClick={handleNavItemClick}><li>Contact Us</li></Link>
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