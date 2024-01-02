import React, { useState } from 'react'
import main from '/styles/Main.module.scss'
import { Form, InputGroup, Row } from 'react-bootstrap';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook, BiLogoInstagram } from 'react-icons/bi';
import { BsPinterest } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
    const [validated, setValidated] = useState(false);
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };
    return (
        <>
            <div className='container-fluid bg-black pb-4 px-0 g-0'>
                <div className={main.footermain}>
                    <div className="container g-0">
                        <div className={main.positionset}>
                            <div className={main.textcolordiv}>
                                <div className="row row-cols-1 row-cols-lg-2 d-flex justify-content-center align-items-center g-0">
                                    <div className="col">
                                        <p className='m-0'>GET QUOTE</p>
                                        <h2>Call For Action</h2>
                                    </div>
                                    <div className="col">
                                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                            <Row className="mb-3 g-0">
                                                <Form.Group md="4" controlId="validationCustomUsername">
                                                    <InputGroup hasValidation>
                                                        <div className={main.input}>
                                                            <input
                                                                type="text"
                                                                placeholder="ENTER YOUR MAIL"
                                                                className='text-white'
                                                            />
                                                            <button type='button'>SUBSCRIBE</button>
                                                        </div>
                                                        <Form.Control.Feedback type="invalid">
                                                            Please choose a username.
                                                        </Form.Control.Feedback>
                                                    </InputGroup>
                                                </Form.Group>
                                            </Row>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                            <div className={main.setposidiv}>
                                <div className="row g-0">
                                    <div className="col-12 col-lg-6">
                                        <div className="row row-cols-2 row-cols-md-3" >
                                            <div className="col p-0 m-0">
                                                <img src="/footer1.png" alt="" width="100%" height="100%" />
                                            </div>
                                            <div className="col p-0 m-0" >
                                                <img src="/footer2.png" alt="" width="100%" height="100%" />
                                            </div>
                                            <div className="col p-0 m-0" >
                                                <img src="/footer3.png" alt="" width="100%" height="100%" />
                                            </div>
                                            <div className="col p-0 m-0" >
                                                <img src="/footer4.png" alt="" width="100%" height="100%" />
                                            </div>
                                            <div className="col p-0 m-0" >
                                                <img src="/footer5.png" alt="" width="100%" height="100%" />
                                            </div>
                                            <div className="col p-0 m-0" >
                                                <img src="/footer6.png" alt="" width="100%" height="100%" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg-4 ms-auto d-flex justify-content-center align-items-center flex-column mt-5 mt-lg-0">
                                        <div className='px-2'>
                                            <h4>CONTACT</h4>
                                            <h5>Find out all the ways to enjoy luxury residential life around the world.</h5>
                                            <h6>A: 14/A, Miranda City, NYC T: 99 123 45 6970</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className={main.bottomfooter}>
                    <div className="container text-white">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-md-6 order-2 order-sm-1">
                                <h6>© Copyright 2023 by <span>Envarch</span></h6>
                            </div>
                            <div className="col-12 col-sm-2 order-1 order-sm-2 ms-auto d-flex justify-content-center align-items-center">
                                <Link legacyBehavior href="https://twitter.com/">
                                    <a className='me-2 fs-5' target="_blank"><AiOutlineTwitter /></a>
                                </Link>
                                <Link legacyBehavior href="https://www.facebook.com/" >
                                    <a className='me-2 fs-5' target="_blank"><BiLogoFacebook /></a>
                                </Link>
                                <Link legacyBehavior href="https://www.instagram.com/">
                                    <a className='me-2 fs-5' target="_blank"><BiLogoInstagram /></a>
                                </Link>
                                <Link legacyBehavior href="https://in.pinterest.com/login/">
                                    <a className='me-2 fs-5' target="_blank"><BsPinterest /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer

// 13.13.13.13.13.13.13..........{{{{{{{{{{Footer}}}}}}}}}}