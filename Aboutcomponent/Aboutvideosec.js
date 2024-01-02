import React from 'react'
import main from '/styles/About.module.scss'
import { BsPlayFill } from 'react-icons/bs'

const Aboutvideosec = () => {
    return (
        <div className='container-fluid mb-5 g-0'>
            <div className={main.aboutvideoimg}>
                <div className="container p-0 g-0">
                    <div className={main.aboutvideo}>
                        <div className={main.aboutvideosub}>
                            <div className={main.aboutvideo_play}>
                                <a href="https://youtu.be/16TgusFJwr4" target='_blank'> <BsPlayFill className='fs-1 bg-white rounded-circle' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutvideosec
