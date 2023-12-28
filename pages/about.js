import Abgimg from '@/Aboutcomponent/Abgimg'
import Simplesec from '@/Aboutcomponent/Simplesec'
import React from 'react'
import Threeimg from './threeimg'
import Onebigimgsec from '@/Aboutcomponent/Onebigimgsec'
import Numbercountingsec from '@/Aboutcomponent/Numbercountingsec'
import Blacksec from '@/Aboutcomponent/Blacksec'
import Aboutvideosec from '@/Aboutcomponent/Aboutvideosec'

const about = () => {
  return (
    <div>
        <Abgimg/>
        <Threeimg/>
        <Simplesec/>
        <Onebigimgsec/>
        <Numbercountingsec/>
        <Blacksec/>
        <Aboutvideosec/>
    </div>
  )
}

export default about