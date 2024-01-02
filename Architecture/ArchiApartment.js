import React from 'react'
import main from '/styles/Main.module.scss'

const ArchiApartment = () => {
    return (
        <div className='container-fluid g-0'>
            <div className="container g-0">
                <div className={main.Amaindiv}>
                    <div>
                        <h2>APARTMENT <span>PLANS</span></h2>
                        <h6>AT VERO EOS ET ACCUSAMUS ET IUSTO ODIO</h6>
                    </div>
                    <div className={main.Afour}>
                        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-0'>
                            <div className="col "><h3>APARTMENT</h3></div>
                            <div className="col "><h3>SIMPLEX </h3></div>
                            <div className="col "><h3>DUPLEX </h3></div>
                            <div className="col "><h3>DOUBLE HEIGHT </h3></div>
                        </div>
                    </div>
                    <div className={main.Aimg}>
                        <img src="/archiimg2.png" alt="" width="100%" />
                    </div>
                    <div className={main.Atext}>
                        <div className="row g-0">
                            <div className="col-12 col-md-4">
                                <div className='d-flex justify-content-evenly mb-4'>
                                    <h6>FLOOR</h6>
                                    <h6>4</h6>
                                </div>
                                <div className='d-flex justify-content-evenly mb-4'>
                                    <h6>ROOMS</h6>
                                    <h6>4</h6>
                                </div>
                                <div className='d-flex justify-content-evenly mb-4'>
                                    <h6>AREA M2</h6>
                                    <h6>9 10</h6>
                                </div>
                                <div className='d-flex justify-content-evenly'>
                                    <h6>PARKING</h6>
                                    <h6>4</h6>
                                </div>
                            </div>
                            <div className="col mt-4 mt-md-0">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                                <p>quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArchiApartment