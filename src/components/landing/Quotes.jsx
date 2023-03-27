import React from "react";
import { Button, Container, Row, Card } from "react-bootstrap";
import "../../assets/css/landing.css"
import twitter from "../../assets/images/twitter-card.png"
import evant from "../../assets/images/evan-lahti.jpg"
import jada from "../../assets/images/jada-griffin.jpg"
import aaron from "../../assets/images/aaron-williams.jpg"


export default function Quotes() {
    return (
        <section id="quotes">
            <div className="Quotes">
                <Container className="lg" >
                    <Row>
                        <div className="col-lg text-area d-flex flex-column justify-content-center">
                            <div className="quotes-area">
                                <h1 className="text-uppercase quotes-title text-white ms-5">top scores</h1>
                                <p className=" ms-5 text-white">
                                    This top score from various games provided
                                    <br />
                                    on this platform
                                </p>
                                <div>
                                    <Button href="#" variant="warning" className="btn fw-bold ms-5 text-center">
                                        see more
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6  ">
                            <Card style={{ width: '28rem', height: '12rem' }} className="bg-dark mt-4 c-one">
                                <Card.Body className="d-flex flex-column header">
                                    <div className="d-flex">
                                        <div className="img-container ">
                                            <img src={evant} alt="" />
                                        </div>
                                        <div className="d-flex flex-column  ms-3 name lh-1">
                                            <Card.Title className="name text-warning">
                                                Evan Lahti
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">PC Gamer</Card.Subtitle>
                                            {/* <img src={twitter} alt="" /> */}
                                        </div>
                                        {/* <img style={{ width: "50px" }} src={twitter} className="twitter flex-row col-2 offset-1 offset-md-0 offset-lg-1  mb-3" alt="" /> */}
                                    </div>
                                    <div className="flex-column p-2">
                                        <Card.Text className="text-white">
                                            <q>One of my gaming highlight of the year</q>
                                            <br />
                                            <p>June 18, 2021</p>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '28rem', height: '12rem' }} className="bg-dark mt-4">
                                <Card.Body className="d-flex flex-column header">
                                    <div className="d-flex">
                                        <div className="img-container">
                                            <img src={jada} alt="" />
                                        </div>
                                        <div className="d-flex flex-column ms-3 name lh-1">
                                            <Card.Title className="name text-warning">
                                                Jada Griffin
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Nerdreactor</Card.Subtitle>
                                            {/* <img src={twitter} alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="flex-column p-2">
                                        <Card.Text className="text-white">
                                            <q>The next big thing in the world of streaming
                                                and survival games</q>
                                            <p>July 10, 2021</p>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '28rem', height: '12rem' }} className="bg-dark mt-4 c-two">
                                <Card.Body className="d-flex flex-column header">
                                    <div className="d-flex">
                                        <div className="img-container">
                                            <img src={aaron} alt="" />
                                        </div>
                                        <div className="d-flex flex-column ms-3 name lh-1">
                                            <Card.Title className="name text-warning">
                                                Aaron Williams
                                            </Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">Nerdreactor</Card.Subtitle>
                                            {/* <img src={twitter} alt="" /> */}
                                        </div>
                                    </div>
                                    <div className="flex-column p-2">
                                        <Card.Text className="text-white">
                                            <q>Snoop Dogg playing the wildly entertaining
                                                'SOS' is ridiculous</q>
                                            <p>December 24, 2018</p>
                                        </Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </Row>
                </Container>
            </div>
        </section>
    )
}