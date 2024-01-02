import React from 'react'
import main from '/styles/Main.module.scss'

const ATwoimg = () => {
  return (
    <div className='container-fluid p-0 g-0'>
      <div className="container p-0 g-0">
        <div className="row g-0">
          <div className="col-12 col-lg-9">
            <div className={main.Amainimgdiv}>
              <div className={main.Asubmaindiv}>
                <h3>MORBI NULLA FELIS, AUCTOR QUIS URNA BLANDIT, ALIQUET TRISTIQUE ELIT</h3>
                <h6>WELLNES & SPA - CONFERENCE - RESTAURANT - FITNESS - LIBRARY - BARS - WELLNES & SPA - CONFERENCE</h6>
              </div>
              <div className={main.Amainimgdiv2}>
                <div className="d-flex">
                  <p className={`d-none d-md-block mb-0 ${main.Amainimgdiv2h3}`}></p>
                  <p className={`mb-0 ${main.Amainimgdiv2h1}`}>PROJECT COMPLEX</p>
                </div>
                <p className={`mb-0 ${main.Amainimgdiv2h2}`}>PROJECT PARK <br /> PROJECT GALLERY <br />HOSPITAL</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3"></div>
        </div>
      </div>
    </div>
  )
}

export default ATwoimg