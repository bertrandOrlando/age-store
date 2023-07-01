import { Link } from "react-router-dom";

function Card() {
  return (
    <Link
      to=""
      className="card my-4 w-[360px] rounded-md border border-slate-300 p-4 shadow-lg transition hover:scale-105"
    >
      <img
        width="320px"
        src="https://ik.imagekit.io/75bfsfl5j/AgeZone_Store/hero-image.jpg?updatedAt=1688138436193"
        alt=""
      />
      <br />
      <div className="detail-items flex w-full justify-between">
        <span>Wood Chair</span>
        <span>$ 49.99</span>
      </div>
    </Link>
  );
}

export default Card;
