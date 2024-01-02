import React, { useState } from 'react'
import main from '/styles/Main.module.scss'
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap';

const Formbgimg = () => {
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
    <div className='container-fluid p-0 g-0'>
      <div className={main.formimgbg}>
        <div className="container g-0">
          <div className={main.formbgsetting}>
            <div className="bg-white py-4 p-md-2 p-lg-5 shadow">
              <div className=" py-0 py-md-4 p-md-2 p-lg-5 px-3">
                <h2 className='text-center'>REQUEST A VISIT</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <div className="mb-3 row g-0 ">
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="NAME"
                      />
                      <hr className='mb-0 mt-2' />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        The name field is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="EMAIL"
                        className='mt-3'
                      />
                      <hr className='mb-0' />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        The email field is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='col-12 col-lg-6' md="4" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="DATE"
                        className='mt-3'
                      />
                      <hr className='mb-0' />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        The date field is required.
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className='col-12 col-lg-6' md="4" controlId="validationCustom01">
                      <Form.Control
                        required
                        type="text"
                        placeholder="TIME"
                        className='mt-3'
                      />
                      <hr className='mb-0' />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">
                        The time field is required.
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
                  <button >SEND</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formbgimg


// 12.12.12.12.12.12.12............  {{{{{{{{{{{{{{formbgimage}}}}}}}}}}}}}}
