import React from 'react'
import main from '/styles/Main.module.scss'

const Blacksec = () => {
    let array = [
        {
            img: "/member1.png",
            h3: "IVET HOUZE",
            h6: "ARCHITECT ASSISTANT"
        },
        {
            img: "/member2.png",
            h3: "JONEY VINO",
            h6: "ARCHITECT ASSISTANT"
        },
        {
            img: "/member3.png",
            h3: "MARIA BILL",
            h6: "ARCHITECT ASSISTANT"
        },
    ]

    return (
        <div>
            <div className="container-fluid g-0">
                <div className={main.aboutblackbgimg}>
                    <div className="container">
                        <div className={main.blackmain}>
                            <h1>MEET THE  <span>TEAM</span></h1>
                            <h6>OUR TEAM MEMBERS</h6>
                        </div>
                        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                            {
                                array?.map((x, i) => {
                                    return  <div className="col h-100 p-3" key={i}>
                                            <div className={main.blackthreeimg}>
                                                <img src={x?.img} alt="" width="100%" />
                                                <div className="px-5 py-3">
                                                    <h3>{x?.h3}</h3>
                                                    <h6>{x?.h6}</h6>
                                                </div>
                                            </div>
                                        </div>
                                   
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blacksec