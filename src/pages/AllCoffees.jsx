import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { Link, useLoaderData } from "react-router";

const AllCoffees = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {coffees.map(coffee=><div key={coffee._id} className="card  card-side bg-base-300 shadow-sm">
      <figure>
        <img className="w-[185px" src={coffee?.photo} alt="Movie" />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-secondary-content">
            <span className="text-black">Name</span>: {coffee?.name}
          </h2>
          <p className="text-secondary-content">
            <span className="text-black">Chef</span>: {coffee?.chef}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Price</span>: {coffee?.price}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/coffeeDetails/${coffee?._id}`}>
            {" "}
            <button className="bg-primary p-2 rounded-xl">
              <IoEyeSharp color="white" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>)}
      </div>
    </div>
  );
};

export default AllCoffees;
