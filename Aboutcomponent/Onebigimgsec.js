import React from 'react'
import main from '/styles/About.module.scss'

const Onebigimgsec = () => {
  return (
    <div className='container-fluid p-0 g-0'>
      <div className={main.onebg}>
        <div className={main.onebgimg}>
          <div className={main.onesettingtext}>
            <p className={`mb-1 ${main.onesettingtexth6}`}>BEST ARCHITECT</p>
            <p className={`mb-1 ${main.onesettingtexth1}`}>A SMALL EFFICIENT</p>
            <p className={`mb-1 ${main.onesettingtexth2}`}>INTERIOR</p>
            <p className={`mb-1 ${main.onesettingtexth3}`}>DESIGNING TEAM</p>
            <p className={`mb-1 ${main.onesettingtexth5}`}>WELCOME TO HENDON RESIDENCE SHOWCASE</p>
            <img src="/im4.png" alt="" width="50%" />
          </div>
          <div className={main.oneim3}>
            <p className={`mb-1 ${main.oneim3h1}`}>25</p>
            <p className={`mb-1 ${main.oneim3h4}`}>Years of <br />Experience</p>
        </div>
      </div>
    </div>
    </div >
  )
}

export default Onebigimgsec