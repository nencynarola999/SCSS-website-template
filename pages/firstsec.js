import React from 'react'
import variable from '/styles/_Variable.module.scss'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { IoIosCall } from 'react-icons/io';

const Firstsec = () => {
    return (
        <div className="container-fluid pt-5 mt-5">
            <div className="container p-4">
                <div className="row g-0 h-100">
                    <div className="col-2 d-flex align-items-center">
                        <img src="/logo.png" alt="" width="140" height="38" />
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center  ms-auto">
                        <div className="d-none d-md-block">
                            <div className="d-flex">
                                <div className='d-flex justify-content-center align-items-center fs-3 me-3'>
                                    <FaMapMarkerAlt className={variable.title} />
                                </div>
                                <div>
                                    <h6 className={variable.title}>Address:</h6>
                                    <h6>219 Bedford Street Birmingham, AL 35211</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-4 d-flex justify-content-center align-items-center">
                        <div className="d-none d-md-block">
                            <div className="d-flex">
                                <div className='d-flex justify-content-center align-items-center fs-3 me-3'>
                                    <IoIosCall className={variable.title} />
                                </div>
                                <div>
                                    <h6 className={variable.title}>Call Anytime:</h6>
                                    <h6>98 76543 210123 4567</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Firstsec
// ............................{{{{{{{{{{{{{{{{{{{{{{Firstsec}}}}}}}}}}}}}}}}}}}}}}