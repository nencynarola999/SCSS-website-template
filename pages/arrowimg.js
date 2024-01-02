import React from 'react'
import main from '/styles/Main.module.scss'
import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'
const Arrowimg = () => {
  return (
    <div className={main.zeroarrowdiv}>
      <Link legacyBehavior href=""><a className={main.zeroarrowdiv2} ><AiOutlineArrowUp className='fs-4' /></a></Link>
    </div>
  )
}
export default Arrowimg

// 000000000000............{{{{{{{{{{{Arrowimg}}}}}}}}}}}