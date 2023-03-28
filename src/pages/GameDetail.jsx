import { Container, Row, Col, Nav, NavItem } from "react-bootstrap"
import '../assets/css/Games.css'
import { useEffect, useState } from "react"
import back from '../assets/images/back.png'
import logo from '../assets/images/logo1.png'
import imgbatu from '../assets/images/batu.png'
import imggunting from '../assets/images/gunting.png'
import imgkertas from '../assets/images/kertas.png'
import refresh from '../assets/images/refresh.png'



export default function GameDetail(){
    const [com, setCom] = useState('')
    const [player, setPlayer] = useState('')
    const [hasil, setHasil] = useState('')


    const randomCom = () => {
        const bot = ['batu', 'gunting', 'kertas']
        setCom(bot[Math.floor(Math.random() * 3)]);
    }
        useEffect(() => {
            randomCom();
            if (com===0) {
            setPlayer('batu');
            document.getElementById('batu2').style.background=
            "#C4C4C4";
            document.getElementById('kertas2').style.background=
            "#9C835F";
            document.getElementById('gunting2').style.background=
            "#9C835F";
            }
            else if (com===1) {
            setPlayer('kertas');
            document.getElementById('kertas2').style.background=
            "#C4C4C4";
            document.getElementById('gunting2').style.background=
            "#9C835F";
            document.getElementById('batu2').style.background=
            "#9C835F";
            } 
            else{
            setPlayer('gunting');
            document.getElementById('gunting2').style.background=
            "#C4C4C4";
            document.getElementById('batu2').style.background=
            "#9C835F";
            document.getElementById('kertas2').style.background=
            "#9C835F";
            }
        }, [com]);

        const batu = () => {
            document.getElementById('batu2').style.background=
                "#C4C4C4";
            document.getElementById('kertas2').style.background=
                "#9C835F";
            document.getElementById('gunting2').style.background=
                "#9C835F";
            setPlayer('batu');
            randomCom();
            result();
            match();
        }
        
        const kertas = () => {
            document.getElementById('kertas2').style.background=
            "#C4C4C4";
            document.getElementById('gunting2').style.background=
            "#9C835F";
            document.getElementById('batu2').style.background=
            "#9C835F";
            setPlayer('kertas')
            randomCom();
            result();
            match();
        }

        const gunting = () => {
            document.getElementById('gunting2').style.background=
            "#C4C4C4";
            document.getElementById('batu2').style.background=
            "#9C835F";
            document.getElementById('kertas2').style.background=
            "#9C835F";
            setPlayer('gunting');
            randomCom();
            result();
            match();
        }
        
        
        const match = () => {
            if (player === 'batu' && com === 'gunting') {
                setHasil('Player WIN')
            } else if (player === 'batu' && com === 'kertas') {
                setHasil('COM WIN')
            } else if (player === 'gunting' && com === 'kertas') {
                setHasil('Player WIN')
            } else if (player === 'gunting' && com === 'batu') {
                setHasil('COM WIN')
            } else if (player === 'kertas' && com === 'batu') {
                setHasil('Player WIN')
            } else if (player === 'kertas' && com === 'gunting') {
                setHasil('COM WIN')
            } else {
                setHasil('Draw')
            }
        }

        useEffect(() => {
            match();
        }, [player]);
    
        const result = () => {
            if (hasil === "Draw") {
              let replace = document.querySelector(".replace");
              replace.innerHTML = "DRAW";
              replace.classList.add("result");
              replace.style.background = "#035B0C";
              console.log("Match Draw");
            } else if (hasil === "Player WIN") {
              let replace = document.querySelector(".replace");
              replace.innerHTML = "PLAYER 1 <br> WIN";
              replace.classList.add("result");
              replace.style.background = "#4C9654";
              console.log("Player Win");
            } else {
              let replace = document.querySelector(".replace");
              replace.innerHTML = "COM <br> WIN";
              replace.classList.add("result");
              replace.style.background = "#4C9654";
              console.log("Com Win");
            }
          };


    return (
        <>
        <div className="body">
                <Nav>
                    <NavItem className="games p-4 ms-2" id="back">
                        <a href="/home">
                            <img src={back} alt=""/></a>
                    </NavItem>
                    <NavItem className="logo p-2 ms-2" id="logo">
                            <img src={logo} alt=""/>
                    </NavItem>  
                    <NavItem className="headers p-4 ms-2">
                            <h1>ROCK PAPER SCISSORS</h1>
                    </NavItem>
                </Nav>
            <Container className="title">
                <Row className="user">
                    <Col className="player p-3 d-flex">Player 1</Col>
                    <Col className="com p-2 d-flex">COM
                    </Col>
                </Row>
                <Row className="row batu">
                    <Col className="col-4 d-flex">
                        <div className="option" onClick={batu} id="batu">
                        <img src={imgbatu} alt=""/></div>
                    </Col>
                        <Col className="col-4"></Col>
                    <Col className="col-4 d-flex">
                        <div className="random" id="batu2">
                        <img src={imgbatu} alt=""/></div>
                    </Col>
                </Row>
                <Row className="row kertas">
                    <Col className="col-4 d-flex">
                        <div className="option" onClick={kertas} id="kertas">
                        <img src={imgkertas} alt=""/></div>
                    </Col>
                        <Col className="col-4 d-flex versus">
                            <div className="replace d-flex">VS</div>
                        </Col>
                    <Col className="col-4 d-flex">
                        <div className="random"  id="kertas2">
                        <img src={imgkertas} alt=""/></div>
                    </Col>
                </Row>
                <Row className="row gunting">
                    <Col className="col-4 d-flex">
                        <div className="option" onClick={gunting} id="gunting">
                        <img src={imggunting} alt=""/></div>
                    </Col>
                        <Col className="col-4"></Col>
                    <Col className="col-4 d-flex">
                        <div className="random"  id="gunting2">
                        <img src={imggunting} alt=""/></div>
                    </Col>
                </Row>

                            <div className="refresh">
                                <div className="col-md-6 offset-md-3">
                                <a href="/game-detail">
                                <img src={refresh} alt="" className="refresh-img"/>
                            </a>
                            </div>
                        </div>
            </Container>
        </div>
        </>
        )
    }