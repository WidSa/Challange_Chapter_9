import React from "react"
import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import youtube from "../../assets/images/Vector.png"
import twitch from "../../assets/images/twitch.svg"


export default function Footers() {
    return (
        <>
            <div className="menu col-md-10 mb-lg-0">
                <ul className="nav justify-content-end align-content-bottom ">
                    <li className="nav-item ">
                        <a href="#" className="nav-link link-light ">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-light">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-light">Features</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-light">Requirements</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link link-light">Quotes</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"
                        ><img src={facebook} alt=""
                            /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"
                        ><img src={twitter} alt=""
                            /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"
                        ><img src={youtube} alt=""
                            /></a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link"
                        ><img src={twitch} alt=""
                            /></a>
                    </li>
                </ul>
            </div>
            <footer id="footer">
                <div className="text-light container-fluid ps-5 pe-5">
                    <hr />
                </div>
                <div className="container-fluid footer-link ps-5 pe-5">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 d-inline">
                            <p className="text-light">© 2023 Your Games, inc. All Rights Reserved</p>
                        </div>
                        <div className="col-lg-5 d-flex justify-content-around">
                            <a href="/privacy-policy" className="text-decoration-none link-warning text-light">
                                Privacy Policy
                            </a>{" "}
                            |
                            <a href="/toc" className="text-decoration-none link-warning text-light">
                                Terms of Services
                            </a>{" "}
                            |
                            <a href="/coc" className="text-decoration-none link-warning text-light">
                                Code of Conduct
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

        </>

    )
}