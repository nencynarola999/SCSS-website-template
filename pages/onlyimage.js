import React from 'react'
import main from '/styles/Main.module.scss'

const Onlyimage = () => {
    return (
        <div className='container-fluid p-0'>
            <div className="row row-cols-1 row-cols-lg-2">
                <div className="col">
                    <div className={main.firstimage}></div>
                </div>
                <div className="col">
                    <div className={main.secondimage}>
                        <div className="d-flex">
                            <h3 className='d-none d-md-block'></h3>
                            <h1>RESTAURANTS</h1>
                        </div>
                        <h2>SCHOOL <br /> SHOPPING MALL <br />HOSPITAL</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onlyimage

// 888888888888888...........{{{{{{{{{{{{{{onlyimage}}}}}}}}}}}}}}