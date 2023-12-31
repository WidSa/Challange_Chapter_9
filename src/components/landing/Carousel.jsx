import React, { useState } from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import image1 from "../../assets/images/rockpaperstrategy-1600.jpg"
import image2 from "../../assets/images/congkak.jpg"
import image3 from "../../assets/images/gasing.jpg"
import "../../assets/css/landing.css"



export default function Gallery() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    return (
        <section id="about">
            <div className='gallery'>
                <Container>
                    <Row>
                        <div className="col-sm-5 gallery-text pt-5 mt-5 text-white">
                            <h3>What's so special?</h3>
                            <h1 className="fw-bold text-uppercase">the games</h1>
                        </div>
                        <div className="col-sm-7 d-flex pt-5 mt-5">
                            <Carousel className="carousel-container " activeIndex={index} onSelect={handleSelect}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100 "
                                        src={image1}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Rock, Paper, Scissors</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image2}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Congklak</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={image3}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <h3>Gasing</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>

                    </Row>

                </Container>
            </div>
        </section>

    );
}

// render(<ControlledCarousel />);