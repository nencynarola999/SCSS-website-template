import React from 'react'
import main from '/styles/Main.module.scss'
import Link from 'next/link'

const Ssiximagesec = () => {
    let array = [
        {
            img: "/3-1.png",
            h1: "01",
            link: "/design-planning",
            h2: "DESIGN & PLANNING",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-2.png",
            h1: "02",
            link: "/custom-solutions",
            h2: "CUSTOM SOLUTIONS",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-3.png",
            h1: "03",
            link: "/furniture-decor",
            h2: "FURNITURE & DECOR",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-1.png",
            h1: "04",
            link: "/exterior-design2",
            h2: "EXTERIOR DESIGN",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-2.png",
            h1: "05",
            link: "/interior2",
            h2: "INTERIOR",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-3.png",
            h1: "06",
            link: "/concept-planning",
            h2: "CONCEPT PLANNING",
            h6: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
    ]
    return (
        <div className='container-fluid g-0'>
            <div className={main.Sthreeimg}>
                <div className="container px-4">
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {
                            array?.map((x, i) => {
                                return <div key={i}>
                                    <div className="col">
                                        <div className="p-4 bg-white shadow-sm h-100">
                                            <div className="d-flex justify-content-between">
                                                <img src={x?.img} alt="" width="70px" className="mb-3" />
                                                <h1>{x?.h1}</h1>
                                            </div>
                                            <Link href={x?.link} legacyBehavior className='p-0' ><a><h2>{x?.h2}</h2></a></Link>
                                            <h6>{x?.h6}</h6>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Ssiximagesec