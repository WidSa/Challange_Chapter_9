import React from "react";
import "../../assets/css/landing.css"
import tulang from "../../assets/images/skull.png"
import { Container, Row, Button, Form } from "react-bootstrap";
import Footers from "./footer";

export default function Subs() {
    return (
        <>
            <div className='subscription'>
                <Container className='align-item-center justify-content-center'>
                    <Row className='d-flex align-item-center justify-content-center'>
                        <div className='col-sm-5'>
                            <img src={tulang} alt="" />
                        </div>
                        <div className="subscribe col-sm-6 text-white">
                            <h3 className="mt-5">Want to stay in <br /> touch?</h3>
                            <h1 className="pt-3 text-uppercase">newsletter <br /> subscribe</h1>
                            <p className="pt-3">
                                In order to start receiving our news, all you have
                                to do is enter your email address. Everything else
                                will be taken care of by us. We will send you emails
                                containing information about game. We don't spam.
                            </p>
                            <Form className="row mt-5">
                                <div className="form-group col">
                                    <input
                                        type="text"
                                        className="form-control mb-2 mr-sm-2 pt-3 bg-dark"
                                        id="email"
                                        placeholder="youremail@binar.co.id" />
                                </div>
                                <div className="col">
                                    <Button
                                        variant="warning"
                                        className="btn btn-lg fw-bold">
                                        Subscribe Now
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Row>
                    {<Footers />}
                </Container>
            </div>
        </>
    )
}