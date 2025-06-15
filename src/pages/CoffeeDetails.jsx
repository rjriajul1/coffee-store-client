import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import bgImg from "../assets/more/11.png";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { user } = use(AuthContext);
  const { name, chef, supplier, taste, price, photo, details, likeBy,email,_id } = coffee;

  const [liked, setLiked] = useState(likeBy.includes(user?.email));

  const [likeCount, setLikeCount] = useState(likeBy.length);

 useEffect(()=>{
  setLiked(likeBy.includes(user?.email))
 },[user,likeBy])
  const handleLike = () => {
    if(user.email === email) return alert('Do not like your coffee')
      // handle like api 
      axios.patch(`http://localhost:3000/like/${_id}`, {email: user?.email})
      .then(res=>{
        const isLiked = res.data?.liked
        setLiked(isLiked)
        setLikeCount(prev => isLiked ? prev + 1 : prev - 1)
      })
      .catch(err=> {
        console.log(err);
      })
  }
  
  return (
    <div style={{ backgroundImage: `url(${bgImg})` }} className="bg-cover">
      <div className="flex justify-evenly items-center bg-base-300 max-w-7xl mx-auto my-20 rounded-2xl p-6">
        <div>
          <img className="w-80" src={photo} alt="" />
        </div>
        <div>
          <h1 className="text-primary-content text-3xl">NiceTies</h1>
          <p className="text-secondary-content">
            <span className="text-black">Name</span>: {name}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Chef</span>: {chef}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Supplier</span>: {supplier}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Taste</span>: {taste}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Price</span>: {price}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Details</span>: {details}
          </p>
          <p>like: {likeCount}</p>
          <div className="flex gap-6">
            <button onClick={handleLike} className="btn btn-primary text-xl">
              {liked ? 'liked' : 'like'}
              </button>
            <button className="btn btn-accent text-gray-900 text-xl">
              order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
