import React from "react";
import { Container, Table } from "react-bootstrap";
import "../../assets/css/landing.css"

export default function SysReq() {
    return (
        <section id="requirements">
            <div className="SysReq">
                <Container>
                    <h3 className="top-text text-white">Can My Computer Run this game?</h3>
                    <div className="table-container col-sm-6 pt-5">
                        <h1 className="text-uppercase text-white table-title">System <br /> Requirements </h1>
                    </div>
                    <div className="table-container col-sm-6 pt-5">
                        <Table responsive="sm" bordered className="tabel">
                            <tbody>
                                <tr>
                                    <td>
                                        <p>OS:</p>
                                        <span>
                                            Windows 7 64-bit only <br />
                                            (No OSX support at this time)
                                        </span>
                                    </td>
                                    <td>
                                        <p>Processor:</p>
                                        <span>
                                            Intel Core 2 Duo @2.4 GHZ or <br />
                                            AMD Athlon x2 @2.8 GHZ
                                        </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p>memory:</p>
                                        <span>4 GB RAM</span>
                                    </td>
                                    <td>
                                        <p>storage:</p>
                                        <span>8 GB available space</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <p>Graphics:</p>
                                        <span>
                                            NVIDIA GeForce GTX 660 2GB or <br />
                                            AMD Radeon HD 7850 2GB Directx11 (Shader
                                            Model 5)
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </section>


    )
}

