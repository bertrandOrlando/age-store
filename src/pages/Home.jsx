import arrowSubmit from "../assets/next.png";
import { Link } from "react-router-dom";
import SkeletonCard from "../components/SkeletonCard/SkeletonCard";
import React, { Suspense } from "react";
const Card = React.lazy(() => import("../components/Card/Card"));

export const Home = () => {
  return (
    <>
      <section className="hero-section w-full bg-slate-100 pb-16 pt-40">
        <div className="hero-image relative mx-auto flex w-[360px] flex-col justify-center py-6 lg:w-9/12">
          <img
            src="https://ik.imagekit.io/75bfsfl5j/AgeZone_Store/hero-image.jpg?updatedAt=1688138436193"
            alt="hero-image"
            className="h-32 w-full rounded-xl object-cover shadow-xl brightness-50 lg:h-44 lg:rounded-[50px]"
          />
          <div className="relative bottom-8 left-1/2 w-[280px] translate-x-[-138px] rounded-2xl bg-white px-2 py-4 shadow-md lg:w-[400px] lg:translate-x-[-195px] lg:rounded-3xl">
            <form className="flex items-center justify-evenly gap-4">
              <input
                type="text"
                placeholder="Find Furniture at AgeZone"
                className="border-b-2 border-gray-400 pb-1 focus:outline-none"
              />
              <button className="h-[30px] w-[30px] cursor-pointer rounded-full bg-white">
                <img src={arrowSubmit} alt="" width="32px" />
              </button>
            </form>
          </div>
        </div>
        <article className="hero-text mx-auto flex w-[360px] flex-col gap-6 p-2 lg:grid lg:w-9/12 lg:grid-cols-2 lg:p-8">
          <h2 className="w-10/12 text-3xl font-semibold">
            Discover the perfect{" "}
            <b className="text-secondary-color">AgeZone </b>
            experience.
          </h2>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatibus asperiores consequuntur repellat dolorem modi! Deserunt
            eaque delectus placeat accusamus?
          </p>
          <Link></Link>
        </article>
      </section>
      <section className="products-section flex w-full flex-col items-center justify-center py-16  ">
        <div className="products-heading my-12 flex w-full flex-col">
          <h2 className="py-4 text-center text-4xl font-semibold">
            Featured Products
          </h2>
          <span className="mx-auto h-1.5 w-28 bg-secondary-color "></span>
        </div>

        <div className="my-4 flex w-full flex-col flex-wrap items-center justify-center gap-8 lg:flex-row">
          <Suspense fallback={<SkeletonCard />}>
            <Card />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Card />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Card />
          </Suspense>
        </div>

        <Link
          to="./products"
          className="my-2 rounded-md bg-secondary-color px-4 py-2 text-sm font-semibold text-orange-100 transition hover:scale-105"
        >
          See Products
        </Link>
      </section>
    </>
  );
};
