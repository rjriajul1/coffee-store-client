import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router";
import { MdDelete, MdEdit } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

const MyAddedCoffees = () => {
  const { user } = useContext(AuthContext);
  const [foods,setFoods] = useState([])
  const { isPending, error, data } = useQuery({
    queryKey: ["foodData"],
    queryFn: () =>
      fetch(`http://localhost:3000/coffeesByEmail?email=${user?.email}`).then(
        (res) => res.json()
      ),
  });

  useEffect(()=>{
    if(data){
    setFoods(data)
    }
  },[data])

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:3000/coffees/${id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              const remainingFoods = data.filter(food=> food._id !== id);
              setFoods(remainingFoods)
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
            }
          })
          .then((error) => {
            console.log(error);
          });
      }
    });
  };

  if (isPending) {
    return <p>loading.....</p>;
  }
  if (error) {
    return toast(error);
  }
  return (
    <div>
      <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {foods?.map((food) => (
          <div key={food._id} className="card card-side bg-base-300 ">
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
                <button
                  onClick={() => handleDelete(food._id)}
                  className="bg-primary p-2 rounded-xl"
                >
                  <MdDelete color="red" size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedCoffees;
