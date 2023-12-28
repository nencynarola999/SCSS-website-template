import React from 'react'
import main from '/styles/Main.module.scss'

const Twoimg = () => {
    return (
        <div className="container-fluid g-0">
            <div className={main.twoimg}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <div className={main.im1}>
                                <div className={main.im2}>
                                </div>
                                <div className={main.im3}>
                                    <h1>25</h1>
                                    <h4>Years of <br />Experience</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ms-auto">
                            <div className={main.settingtext}>
                                <h6>BEST ARCHITECT</h6>
                                <h1>A SMALL EFFICIENT</h1>
                                <h2>INTERIOR</h2>
                                <h3>DESIGNING TEAM</h3>
                                <h5>WELCOME TO HENDON RESIDENCE SHOWCASE</h5>
                                <img src="/im4.png" alt="" width="70%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Twoimg

// 33333333333333333............{{{{{{{{{{twoimg}}}}}}}}}}