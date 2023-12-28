import React from 'react'
import main from '/styles/Main.module.scss'
import Link from 'next/link'

const Pdoublesixsec = () => {
    return (
        <div className='container-fluid mt-5 mb-5'>
            <div className="container">
                <div className={main.Psixmainddiv}>
                    <h1>CHOOSE AN <span>APARTMENT</span></h1>
                    <h6>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</h6>
                </div>
                <div className=''>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psubthreediv}>
                                    <img src="/6-1.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className={main.Psssubthreediv}>
                                    <img src="/6-4.png" alt="" width="30%" />
                                    <br /><br />
                                    <Link href="/architecture" legacyBehavior className='p-0' ><a><h1>ARCHITECTURE</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>120</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psubthreedivmid}>
                                    <img src="/6-2.png" alt="" width="30%" />
                                    <br /><br />
                                    <Link href="/exterior-design" legacyBehavior className='p-0' ><a><h1>EXTERIOR DESIGN</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>130</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                                <div className={main.Psssubthreedivmid}>
                                    <img src="/6-5.png" alt="" width="100%" height="100%" />
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psubthreediv}>
                                    <img src="/6-3.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className={main.Psssubthreediv}>
                                    <img src="/6-6.png" alt="" width="30%" />
                                    <br /><br />
                                    <Link href="/interior" legacyBehavior className='p-0' ><a><h1>INTERIOR</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>140</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psubthreediv2}>
                                    <img src="/6-1.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className={main.Psssubthreediv2}>
                                    <img src="/6-4.png" alt="" width="30%" />
                                    <br /><br />
                                    <Link href="/architecture" legacyBehavior className='p-0' ><a><h1>ARCHITECTURE</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>120</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psssubthreedivmid2}>
                                    <img src="/6-5.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className={main.Psubthreedivmid2}>
                                    <img src="/6-2.png" alt="" width="30%" className='mb-3' />
                                    <br /><br />
                                    <Link href="/exterior-design" legacyBehavior className='p-0' ><a><h1>EXTERIOR DESIGN</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>130</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className={main.Pthreediv}>
                                <div className={main.Psubthreediv2}>
                                    <img src="/6-3.png" alt="" width="100%" height="100%" />
                                </div>
                                <div className={main.Psssubthreediv2}>
                                    <img src="/6-6.png" alt="" width="30%" />
                                    <br /><br />
                                    <Link href="/interior" legacyBehavior className='p-0' ><a><h1>INTERIOR</h1></a></Link>
                                    <h6>FROM <sub className='fs-6'>140</sub> M2</h6>
                                    <h5>Aenean vehicula non mauris maximus elementum. Nulla facilisi.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pdoublesixsec