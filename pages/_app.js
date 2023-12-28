
import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css';
import "slick-carousel/slick/slick.css"; 
import Navbar1 from './navbar';
import Arrowimg from './arrowimg';
import Footer from './footer';
import Firstsec from './firstsec';


export default function App({ Component, pageProps }) {
  return <>
  <Navbar1/>
  <Arrowimg/>
  <Firstsec/>
  <Component {...pageProps} />
  <Footer/>
  </>
}
