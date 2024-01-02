import React from 'react'
import main from '/styles/Main.module.scss'

const Twoimg = () => {
    return (
        <div className="container-fluid g-0">
            <div className={main.twoimg}>
                <div className="container g-0">
                    <div className="row g-0">
                        <div className="col-12 col-lg-7 mb-5 mb-lg-0">
                            <div className={main.im1}>
                                <div className={main.im2}>
                                </div>
                                <div className={main.im3}>
                                    <p className={`mb-1 ${main.im3h1}`}>25</p>
                                    <p className={`mb-1 ${main.im3h4}`}>Years of <br />Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 ms-auto">
                            <div className={main.settingtext}>
                                <p className={`mb-1 ${main.settingtexth6}`}>BEST ARCHITECT</p>
                                <p className={`mb-1 ${main.settingtexth1}`}>A SMALL EFFICIENT</p>
                                <p className={`mb-1 ${main.settingtexth2}`}>INTERIOR</p>
                                <p className={`mb-1 ${main.settingtexth3}`}>DESIGNING TEAM</p>
                                <p className={`mb-1 ${main.settingtexth5}`}>WELCOME TO HENDON RESIDENCE SHOWCASE</p>
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