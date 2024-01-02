import React from 'react'
import main from '/styles/Main.module.scss'

const Onlyimage = () => {
    return (
        <div className='container-fluid p-0 g-0'>
            <div className="row row-cols-1 row-cols-lg-2 g-0">
                <div className="col">
                    <div className={main.firstimage}></div>
                </div>
                <div className="col">
                    <div className={main.secondimage}>
                        <div className="d-flex">
                            <h4 className='d-none d-sm-block'></h4>
                            <h2>RESTAURANTS</h2>
                        </div>
                        <h3>SCHOOL <br /> SHOPPING MALL <br />HOSPITAL</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onlyimage

// 888888888888888...........{{{{{{{{{{{{{{onlyimage}}}}}}}}}}}}}}