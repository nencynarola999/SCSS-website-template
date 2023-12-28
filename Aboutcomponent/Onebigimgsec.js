import React from 'react'
import main from '/styles/Main.module.scss'

const Onebigimgsec = () => {
  return (
    <div className='container-fluid p-0'>
      <div className={main.onebg}>
        <div className={main.onebgimg}>
          <div className={main.onesettingtext}>
            <h6>BEST ARCHITECT</h6>
            <h1>A SMALL EFFICIENT</h1>
            <h2>INTERIOR</h2>
            <h3>DESIGNING TEAM</h3>
            <h5>WELCOME TO HENDON RESIDENCE SHOWCASE</h5>
            <img src="/im4.png" alt="" width="50%" />
          </div>
          <div className={main.oneim3}>
            <h1>25</h1>
            <h4>Years of <br />Experience</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Onebigimgsec