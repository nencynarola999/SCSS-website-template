import React from 'react'
import main from '/styles/Main.module.scss'
import { TiTick } from 'react-icons/ti'
import { Form } from 'react-bootstrap'
import { useState } from 'react'

const EEDmaindiv = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    let array = [
        {
            img: "/3-1.png",
            h4: "DESIGN & PLANNING",
            p: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-2.png",
            h4: "CUSTOM SOLUTIONS",
            p: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
        {
            img: "/3-3.png",
            h4: "FURNITURE & DECOR",
            p: "Noimy donecing and vivamus vitae commodo. Ut purus ornare laoreet ultrices are sitac"
        },
    ]
    return (
        <div className='container-fluid p-0'>
            <div className="container  p-21">
                <div className={main.Dpdivmain}>
                    <img src="/Dpimg1.jpg" alt="" width="100%" height="100%" />
                    <h2>Exterior Design</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Metus dis posuere amet tincidunt commodo, velit. Ipsum, hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit. Et nisi in libero facilisis sed est. Elit curabitur amet risus bibendum. Posuere et eget orci, tempor enim.</p>
                    <p>Hac nibh fermentum nisi, platea condimentum cursus velit dui. Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam, elit sit.</p>
                    <div className="row row-cols-1 row-cols-lg-2 g-5">
                        <div className="col">
                            <div className="">
                                <img src="/Dpimg2.jpg" alt="" width="100%" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="">
                                <img src="/Dpimg3.jpg" alt="" width="100%" />
                            </div>
                        </div>
                    </div>
                    <h2>Our Capabilities</h2>
                    <p>Massa volutpat odio facilisis purus sit elementum. Non, sed velit dictum quam. Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt. Id aliquet duis sollicitudin diam.</p>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Non saed velit dictum quam risus pharetra esta.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Hac nibh fermentum nisi, platea condimentum cursus.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'>Massa volutpat odio facilisis purus sit elementum.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'>Elit curabitur amet risus bibendum.</h6>
                    </div>
                    <h2>Our approach</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat suspendisse aenean tellus augue morbi risus. Sit morbi vitae morbi sed urna sed purus. Orci facilisi eros sed pellentesque. Risus id sed tortor sed scelerisque. Vestibulum elit elementum, magna id viverra non, velit. Pretium, eros, porttitor fusce auctor vitae id. Phasellus scelerisque nibh eleifend vel enim mauris purus. Rutrum vel sem adipiscing nisi vulputate molestie scelerisque molestie ultrices. Eu, fusce vulputate diam interdum morbi ac a.</p>
                    <h2>Our Work Process</h2>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Non saed velit dictum quam risus pharetra esta.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Id risus pharetra est, at rhoncus, nec ullamcorper tincidunt.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'> Hac nibh fermentum nisi, platea condimentum cursus.</h6>
                    </div>
                    <div className="d-flex py-2">
                        <a><TiTick className='fs-5' /></a>
                        <h6 className='ms-4'>Massa volutpat odio facilisis purus sit elementum.</h6>
                    </div>
                    <h2>Related Service</h2>
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                        {
                            array?.map((x, i) => {
                                return <div className="col" key={i}>
                                    <div className="p-4 bg-white shadow h-100">
                                        <div className="d-flex justify-content-between">
                                            <img src={x?.img} alt="" width="70px" className="mb-3" />
                                        </div>
                                        <h4>{x?.h4}</h4>
                                        <p>{x?.p}</p>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                    <div className="bg-white p-2 py-4 p-md-3 p-lg-5 shadow mt-5 rounded-5">
                        <h1>Any question? Let's discuss</h1>
                        <h6>Get in touch with us to see how we can help you with your project</h6>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div className="mb-3 row">
                                <Form.Group className='col-12 col-lg-6 mt-5' md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Your Name"
                                    />
                                    <hr className='mb-0' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        The name field is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='col-12 col-lg-6 mt-5' md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Your Email"
                                    />
                                    <hr className='mb-0' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        The email field is required.
                                    </Form.Control.Feedback>
                                </Form.Group> <br />
                                <Form.Group md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="select"
                                        placeholder=""
                                    />
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>Your Email</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                    <hr className='mb-0' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        The email field is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group md="4" controlId="validationCustom01">
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="MESSAGE"
                                        className='mt-3'
                                    />
                                    <br /><br /><br />
                                    <hr className='mb-0' />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        The message field is required.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </div>
                            <button >SUBMIT NOW</button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default EEDmaindiv