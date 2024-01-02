import React from 'react'
import main from '/styles/Blog.module.scss'
import { BsFillPersonFill } from 'react-icons/bs'
import { IoMdHome } from 'react-icons/io'
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md'
import Link from 'next/link'
import { FaGraduationCap } from 'react-icons/fa'

const Bmainsec = () => {
    return (
        <div className='container-fluid p-0 g-0'>
            <div className="container p-0 g-0">
                <div className={main.Bmaindiv}>
                    <div className="row g-0">
                        <div className="col-12 col-lg-8">
                            <img src="/Bimg1.jpg" alt="" width="100%" />
                            <h2>ARCHITECTING FOR RELIABLE SCALABILITY</h2>
                            <div className="d-flex">
                                <BsFillPersonFill />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>By CEO</p>
                                <FaGraduationCap />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Property</p>
                                <IoMdHome />
                                <p className={`ms-2 ms-md-3 me-0 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Residence</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link href="">READ MORE</Link>
                            <img src="/Bimg2.jpg" alt="" width="100%" className='mt-5' />
                            <h2>SERVERLESS STREAM-BASED PROCESSING</h2>
                            <div className="d-flex">
                                <BsFillPersonFill />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>By Manager</p>
                                <FaGraduationCap />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Property</p>
                                <IoMdHome />
                                <p className={`ms-2 ms-md-3 me-0 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Residence</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link href="">READ MORE</Link>
                            <img src="/Bimg3.jpg" alt="" width="100%" className='mt-5' />
                            <h2>BUILDING A SCALABLE DOCUMENT</h2>
                            <div className="d-flex">
                                <BsFillPersonFill />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>By Bold</p>
                                <FaGraduationCap />
                                <p className={`ms-2 ms-md-3 me-2 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Property</p>
                                <IoMdHome />
                                <p className={`ms-2 ms-md-3 me-0 me-md-4 mb-0 p-0 ${main.Bmaindivh6}`}>Residence</p>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <Link href="">READ MORE</Link>
                        </div>
                        <div className="col-12 col-lg-4 px-5">
                            <h2 className={`fs-1 mb-0 ${main.Bmaindivh1}`}>Categories</h2>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4'/>
                                <Link href="/design-planning" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Design & Planning</h5></a></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4'/>
                                <Link href="/custom-solutions" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Custom Solutions</h5></a></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4'/>
                                <Link href="/furniture-decor" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Furniture & Decor</h5></a></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4'/>
                                <Link href="/exterior-design2" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Exterior Design</h5></a></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="/interior2" legacyBehavior className='p-0' ><a className='ms-4'><h5 className='m-0'>Interior Design</h5></a></Link>
                            </div>
                            <h2 className={`pt-5 fs-1 mb-0 ${main.Bmaindivh1}`}>Recent Posts</h2>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="" className='ms-4'><h5 className='m-0'>Safe For Kids</h5></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="" className='ms-4'><h5 className='m-0'>Bathroom Oasis</h5></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="" className='ms-4'><h5 className='m-0'>Homes to Inspire</h5></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="" className='ms-4'><h5 className='m-0'>New Website Online</h5></Link>
                            </div>
                            <div className="d-flex align-items-center py-2">
                                <MdOutlineKeyboardDoubleArrowRight className='fs-4' />
                                <Link href="" className='ms-4'><h5 className='m-0'>New School Teachers</h5></Link>
                            </div>
                            <h2 className={`pt-5 fs-1 mb-0 ${main.Bmaindivh1}`}>Search</h2>
                            <input type="search" required /><br />
                            <button>SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bmainsec