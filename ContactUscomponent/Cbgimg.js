import Link from 'next/link'
import React from 'react'
import main from '/styles/About.module.scss'

const Cbgimg = () => {
    return (
        <div>
            <div className="container-fluid g-0">
                <div className={main.aboutbgimg}>
                    <div className="container text-center g-0">
                        <div className={main.aboutbgimg2}>
                            <h1 className={main.abouttext1}>Contact Us</h1>
                            <p className={main.abouttext2}>Contact</p>
                            <div className="row g-0">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <button className={main.aboutbutton}>
                                        <Link href="/" legacyBehavior className='p-0' >Home</Link> /
                                        <Link href="/contact-us" legacyBehavior className='p-0' > Contact</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cbgimg