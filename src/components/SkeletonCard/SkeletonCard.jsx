import { Link } from "react-router-dom";

function SkeletonCard() {
  return (
    <Link className="card my-4 w-[360px] rounded-md border p-4 shadow-lg">
      <div className="h-[180px] w-80 bg-slate-200" />
      <br />
      <div className="detail-items flex w-full justify-between">
        <span>_____</span>
        <span className="">$ ----</span>
      </div>
    </Link>
  );
}

export default SkeletonCard;
