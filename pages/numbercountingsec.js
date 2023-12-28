import React from 'react'
import main from '/styles/Main.module.scss'
import CountUp from 'react-countup';
const Numbercountingsec = () => {
    let array = [
        {
            h1: "450",
            end: "450",
            classname: "posi2",
            h4: "SQUARE AREAS",
            h6: "COMPLEX"
        },
        {
            h1: "97",
            end: "97",
            classname: "posi3",
            h4: "HAPPY",
            h6: "CLIENTS"
        },
        {
            h1: "80",
            end: "80",
            classname: "posi3",
            h4: "COMPLETED",
            h6: "PROJECTS"
        },
        {
            h1: "40",
            end: "40",
            classname: "posi3",
            h4: "TEAM",
            h6: "MEMBERS"
        },
    ]
    return (
        <div className='container-fluid mt-5 mb-5 p-0 g-0'>
            <div className="container mt-5 p-0">
                <div className={main.numbermain}>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-2">
                        {
                            array?.map((x, i) => {
                                return <div className="col" key={i}>
                                    <div className={main.posi1}>
                                        <div className="py-3 d-flex">
                                            <h1 className={main.numberdiv}>{x?.h1} <CountUp
                                                start={0}
                                                end={x?.end}
                                                duration={2}
                                                enableScrollSpy
                                            /></h1>
                                            <div className={main[x?.classname]}>
                                                <h4>{x?.h4}</h4>
                                                <h6>{x?.h6}</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Numbercountingsec


// 10.10.10.10.10.10.10.10...........{{{{{{{{{{{{{{{numbefcounting}}}}}}}}}}}}}}}
