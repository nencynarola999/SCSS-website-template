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
        <div className='container-fluid'>
            <div className="container">
                <div className={main.Cthreemaindiv}>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {
                            array?.map((x, i) => {
                                return <div className="col" key={i}>
                                    <div className={main.Cthreediv}>
                                        <img src={x?.img} alt="" width="62px" style={{ paddingBottom: "40px" }} />
                                        <h6>{x?.text1}</h6>
                                        <h6>{x?.text2}</h6>
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