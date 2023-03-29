import { FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

import "../assets/css/GameList.css";
import ItemCard from "../components/ui/ItemCard.jsx";
import Image1 from "../assets/images/game-list-1.png";
import Image2 from "../assets/images/game-list-2.jpeg";
import Image3 from "../assets/images/game-list-3.jpg";

export default function GameList() {
  return (
    <div className="gl-wrapper">
      <div className="container gl-container">
        <header>
          <Link to="/" className="gl-header">
            <FaChevronLeft /> Back
          </Link>
        </header>
        <main>
          <div className="gl-page-title">
            <h1>GAME LIST.</h1>
          </div>
          <div className="gl-content-wrapper">
            <div className="gl-content-header">
              <p>Current Trending Games</p>
              <button>View All</button>
            </div>
            <div className="gl-content-list">
              <ItemCard
                to="/game-detail"
                image={Image1}
                title="Rock Paper Scissors"
              />
              <ItemCard
                to="#"
                image={Image2}
                title="Coming Soon"
                status="coming-soon"
              />
              <ItemCard
                to="#"
                image={Image3}
                title="Coming Soon"
                status="coming-soon"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
