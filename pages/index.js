import { Inter } from 'next/font/google'
import Bgimg from './bgimg'
import Twoimg from './twoimg'
import Threeimg from './threeimg'
import Videosec from './videosec'
import Lightbagsec from './lightbagsec'
import Slidersec from './slidersec'
import Onlyimage from './onlyimage'
import Siximagesec from './siximagesec'
import Numbercountingsec from './numbercountingsec'
import Accordionsec from './accordionsec'
import Formbgimg from './formbgimg'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Bgimg />
      <Twoimg />
      <Threeimg />
      <Videosec />
      <Lightbagsec />
      <Slidersec />
      <Onlyimage />
      <Siximagesec />
      <Numbercountingsec />
      <Accordionsec />
      <Formbgimg />
    </>
  )
}
