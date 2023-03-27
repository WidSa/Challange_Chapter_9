import React from "react"
import { Row } from "react-bootstrap"
import bulet from "../../assets/images/ellipse.svg"
import bulet2 from "../../assets/images/Ellipse transparant.png"
import "../../assets/css/landing.css"



export default function Features() {
    return (
        <section id="features">
            <div className='features text-white'>
                <Row className='justify-content-end features-contents'>
                    <div className='col-lg-5 features-info mb-2'>
                        <h3 className="features-head pt-4">What's so special?</h3>
                        <h1 className="features-child pt-4 pb-5 text-uppercase">features</h1>
                    </div>
                </Row>
                <Row className='justify-content-end features-timeline'>
                    <div className='col-lg-5 features-timeline-content'>
                        <Row className="timeline">
                            <div className="col-2 dot-1 mt-1">
                                <img src={bulet} alt="" />
                            </div>
                            <div className="col-6 timeline-info ">
                                <p className="text-uppercase timeline-head fw-bold">Traditional Games</p>
                                <p className="timeline-child">If you miss your childhood, we provide many traditional games here</p>
                            </div>
                        </Row>
                        <Row className="timeline">
                            <div className="col-2 dot-1 mt-1">
                                <img src={bulet2} alt="" />
                            </div>
                            <div className="col-6 timeline-info ">
                                <p className="text-uppercase timeline-head fw-bold">game suit</p>
                            </div>
                        </Row>
                        <Row className="timeline">
                            <div className="col-2 dot-1 mt-1">
                                <img src={bulet2} alt="" />
                            </div>
                            <div className="col-6 timeline-info ">
                                <p className="text-uppercase timeline-head fw-bold">tbd</p>
                            </div>
                        </Row>
                    </div>
                </Row>
            </div>
        </section>
    )
}