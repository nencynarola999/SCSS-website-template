import React from 'react'
import main from '/styles/About.module.scss'
import CountUp from 'react-countup';
const Numbercountingsec = () => {
    let array = [
        {
            classname: "aboutnumberdiv",
            h1: "450",
            posiclass: "aboutposi2",
            h4: "SQUARE AREAS",
            h6: "COMPLEX"
        },
        {
            classname: "aboutnumberdiv1",
            h1: "97",
            posiclass: "aboutposi3",
            h4: "HAPPY",
            h6: "CLIENTS"
        },
        {
            classname: "aboutnumberdiv1",
            h1: "80",
            posiclass: "aboutposi3",
            h4: "COMPLETED",
            h6: "PROJECTS"
        },
        {
            classname: "aboutnumberdiv1",
            h1: "40",
            posiclass: "aboutposi3",
            h4: "TEAM",
            h6: "MEMBERS"
        },
    ]
    return (
        <div className='container-fluid p-0 g-0'>
            <div className={main.aboutnumber}>
                <div className="container g-0 py-5">
                    <div className={main.aboutnumbermain}>
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-0">
                            {
                                array?.map((x, i) => {
                                    return <div className="col p-2"  key={i}>
                                            <div className={main.aboutposi1}>
                                                <div className="py-3 d-flex">
                                                    <p className={`mb-0 ${main?.[x?.classname]}`}>{x?.h1} <CountUp
                                                        start={0}
                                                        end={x?.h1}
                                                        duration={2}
                                                        enableScrollSpy
                                                    /></p>
                                                    <div className={main?.[x?.posiclass]}>
                                                        <p className={`mb-0 ${main.posih4}`}>{x?.h4}</p>
                                                        <p className={`mb-0 ${main.posih6}`}>{x?.h6}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Numbercountingsec


// 1010101010101010...........{{{{{{{{{{{{{{{numbefcounting}}}}}}}}}}}}}}}
