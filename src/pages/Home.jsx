import { Container } from "react-bootstrap";
import Footer from "../components/ui/Footer";
import NavbarTop from "../components/ui/Navbar";
import "../assets/css/Home.css";

export default function Home() {
  return (
    <div className="bg-image">
      <NavbarTop />
      <Container className="d-flex flex-column align-content-center justify-content-center text-center text-light min-vh-100">
        <h1 className="mb-4 home-title">Are you ready to play a game?</h1>
        <p className="mb-4 home-subtitle">Explore our games</p>
        <div className="info">
          <a className="btn btn-warning" href="/game-list">
            Game List
          </a>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
