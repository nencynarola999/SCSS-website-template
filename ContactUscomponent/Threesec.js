import React from 'react'
import main from '/styles/Main.module.scss'

const Threesec = () => {
    let array = [
        {
            img: "/Cimg1.png",
            text1: "20 Broklyn Street, New Town",
            text2: "New York, United States"
        },
        {
            img: "/Cimg2.png",
            text1: "needhelp@charie.com",
            text2: "666 888 0000"
        },
        {
            img: "/Cimg3.png",
            text1: "Web Address:",
            text2: "yourwebsite.com"
        },
    ]
    return (
        <div className='container-fluid g-0 p-0'>
            <div className="container g-0 p-0">
                <div className={main.Cthreemaindiv}>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-0">
                        {
                            array?.map((x, i) => {
                                return <div className="col p-3" key={i}>
                                    <div className={`h-100 ${main.Cthreediv}`}>
                                        <img src={x?.img} alt="" width="62px" style={{ paddingBottom: "40px" }} />
                                        <p className='mb-0'>{x?.text1}</p>
                                        <p className='mb-0'>{x?.text2}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Threesec