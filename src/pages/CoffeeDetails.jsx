import React from "react";
import { useLoaderData } from "react-router";
import bgImg from '../assets/more/11.png'

const CoffeeDetails = () => {
    const coffee = useLoaderData();

    const {name, chef, supplier, taste,price, photo,details} = coffee;
  return (
    <div style={{backgroundImage:`url(${bgImg})`}} className="bg-cover">
      <div className="flex justify-evenly items-center bg-base-300 max-w-7xl mx-auto my-20 rounded-2xl p-6">
         <div>
             <img className="w-80" src={photo} alt="" />
         </div>
         <div>
             <h1 className="text-primary-content text-3xl">NiceTies</h1>
             <p className="text-secondary-content"><span className="text-black">Name</span>: {name}</p>
             <p className="text-secondary-content"><span className="text-black">Chef</span>: {chef}</p>
             <p className="text-secondary-content"><span className="text-black">Supplier</span>: {supplier}</p>
             <p className="text-secondary-content"><span className="text-black">Taste</span>: {taste}</p> 
             <p className="text-secondary-content"><span className="text-black">Price</span>: {price}</p>
             <p className="text-secondary-content"><span className="text-black">Details</span>: {details}</p>
             <div className="flex gap-6">
              <button className="btn btn-primary text-xl">Like</button>
              <button className="btn btn-accent text-gray-900 text-xl">order</button>
             </div>
         </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
