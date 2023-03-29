import { Link } from "react-router-dom";

import "../../assets/css/ItemCard.css";

export default function ItemCard({ to, image, title, status }) {
  return (
    <div className="item-card-wrapper">
      <Link to={to} className="card-box-wrapper">
        <div className="card-box">
          <img src={image} alt="" />
        </div>
      </Link>
      <Link to="/" className="card-title-wrapper">
        <p className={`card-title ${status}`}>{title}</p>
      </Link>
    </div>
  );
}
