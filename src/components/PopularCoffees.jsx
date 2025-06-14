import React, { use, useState } from "react";
import { Link } from "react-router";
import Coffee from "./Coffee";
import bgImg from "../assets/more/1.png";

const PopularCoffees = ({ initialCoffees }) => {

  const [coffees, setCoffees] = useState(initialCoffees);
 
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover">
      <div className="text-center mt-8 space-y-2">
        <p className="text-center">-- Sip & Savor --</p>
        <h1 className="text-primary-content text-4xl font-semibold">
          Our Popular Products
        </h1>
        <Link to="/addCoffees">
          <button className="bg-primary px-5 py-2 rounded-xl border">
            Add Coffee
          </button>
        </Link>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        {coffees.map((coffee) => (
          <Coffee
            key={coffee._id}
            coffee={coffee}
          ></Coffee>
        ))}
      </div>
    </div>
  );
};

export default PopularCoffees;
