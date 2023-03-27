import { Container } from "react-bootstrap";
import Footer from "../components/ui/Footer";
import NavbarTop from "../components/ui/Navbar";
import "../assets/css/Home.css";
import { useNavigate } from "react-router";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Home() {
  const navigate = useNavigate();
  const isLoggedIn = (e) => {
    e.preventDefault();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        navigate("/login");
        console.log("please login first");
      }
    });
  };
  return (
    <div className="bg-image" onLoad={isLoggedIn}>
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
