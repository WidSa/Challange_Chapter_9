import React from "react";
import "../../assets/css/landing.css"
import arrow from "../../assets/images/scroll-down.svg"
import { Button } from "react-bootstrap";
import NavigationBar from "./Navbar";
import { useNavigate } from "react-router-dom";


export default function MainScreen() {
    const navigate = useNavigate()
    const loggedIn = true

    return (
        <section id="home">
            <div className='main-screen'>
                {<NavigationBar />}

                <div className="main-text pt-5 mt-5 text-center text-white">
                    <h1 className="text-uppercase fw-bold">play traditional game</h1>
                    <h3>Experience new traditional games</h3>
                    <Button variant="warning" className="btn btn-lg text-uppercase fw-bold mt-2 px-5" onClick={() => {
                        if(loggedIn){
                            navigate('/login')
                        } else{
                            alert('Please login to play the game')
                            navigate('/')
                        }
                    }}>
                        play now
                    </Button>
                </div>
                <div className="the-story text-center text-white">
                    <div className="text-uppercase text-bold">the story <br />
                        <img src={arrow} alt="down-arrow" />
                    </div>
                </div>
            </div>
        </section>
    )
}
