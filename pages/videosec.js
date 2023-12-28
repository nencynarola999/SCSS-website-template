import React from 'react'
import main from '/styles/Main.module.scss'
import { BsPlayFill } from 'react-icons/bs'

const Videosec = () => {
  return (
    <div className='container-fluid'>
      <div className={main.videoimg}>
        <div className="container p-0">
          <div className={main.video}>
            <div className={main.videosub}>
              <div className={main.video_play}>
                <a href="https://youtu.be/16TgusFJwr4" target='_blank'> <BsPlayFill className='fs-1 bg-white rounded-circle' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Videosec


// 5555555555555...........{{{{{{{{{{{{{{{{{{{{{videoimage}}}}}}}}}}}}}}}}}}}}}