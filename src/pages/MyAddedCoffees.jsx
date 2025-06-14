import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";

const MyAddedCoffees = () => {
  const { user } = useContext(AuthContext);
  const { isPending, error, data } = useQuery({
    queryKey: ["foodData"],
    queryFn: () =>
      fetch(`http://localhost:3000/coffeesByEmail?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  if (isPending) {
    return <p>loading.....</p>;
  }
  if (error) {
    return toast(error);
  }
  return  <div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {data.map(food=><div key={food._id} className="card card-side bg-base-300 ">
      <figure>
        <img className="w-[185px" src={food?.photo} alt="Movie" />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-secondary-content">
            <span className="text-black">Name</span>: {food?.name}
          </h2>
          <p className="text-secondary-content">
            <span className="text-black">Chef</span>: {food?.chef}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Price</span>: {food?.price}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/edit/${food?._id}`}>
            {" "}
            <button className="bg-primary p-2 rounded-xl">
              <MdEdit color="white" size={20} />
            </button>
          </Link>
          <button className="bg-primary p-2 rounded-xl">
              <MdDelete color="red" size={20} />
            </button>
        </div>
      </div>
    </div>)}
    </div>
  </div>;
};

export default MyAddedCoffees;
