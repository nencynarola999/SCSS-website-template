import React from 'react'
import main from '/styles/About.module.scss'
import Link from 'next/link'

const Bbgimg = () => {
    return (
        <div>
            <div className="container-fluid g-0">
                <div className={main.aboutbgimg}>
                    <div className="container text-center g-0">
                        <div className={main.aboutbgimg2}>
                            <h1 className={main.abouttext1}>LATEST NEWS</h1>
                            <p className={main.abouttext2}>Blog</p>
                            <div className="row g-0">
                                <div className="col-12 d-flex justify-content-center align-items-center">
                                    <button className={main.aboutbutton}>
                                        <Link href="/" legacyBehavior className='p-0' >Home</Link> /
                                        <Link href="/blog" legacyBehavior className='p-0' > Blog</Link>
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

export default Bbgimg