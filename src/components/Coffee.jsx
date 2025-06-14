import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Coffee = ({ coffee}) => {
  const { name, price, chef, photo, _id } = coffee || {};
  
  return (
    <div className="card  card-side bg-base-300 shadow-sm">
      <figure>
        <img className="w-[185px" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-secondary-content">
            <span className="text-black">Name</span>: {name}
          </h2>
          <p className="text-secondary-content">
            <span className="text-black">Chef</span>: {chef}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Price</span>: {price}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/coffeeDetails/${_id}`}>
            {" "}
            <button className="bg-primary p-2 rounded-xl">
              <IoEyeSharp color="white" size={20} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Coffee;
