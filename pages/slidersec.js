import React from 'react'
import main from '/styles/Main.module.scss'
import Slider from 'react-slick'

const Slidersec = () => {
    var settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    infinite: true,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    pauseOnHover: true
                }
            }
        ]
    }
    let array = [
        {
            img: "/slider1.png"
        },
        {
            img: "/slider2.png"
        },
        {
            img: "/slider3.png"
        },
        {
            img: "/slider4.png"
        },
        {
            img: "/slider5.png"
        },
        {
            img: "/slider1.png"
        },
        {
            img: "/slider2.png"
        },
        {
            img: "/slider3.png"
        },
        {
            img: "/slider4.png"
        },
        {
            img: "/slider5.png"
        }

    ]
    return (
        <div className='container-fluid p-0 g-0' >
            <div className={main.slidermain}>
                <div className="container g-0">
                    <Slider {...settings} className=' '>
                        {
                            array?.map((x, i) => {
                                return <div className={main.immm} key={i}>
                                    <img src={x?.img} alt="" max-width="100%" />
                                </div>
                            })
                        }

                    </Slider>
                </div>
            </div>
        </div >
    )
}

export default Slidersec



// 7777777777777777............{{{{{{{{{{{{{{{{{{slidersec}}}}}}}}}}}}}}}}}}