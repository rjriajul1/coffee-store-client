import React, { use, useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import bgImg from "../assets/more/11.png";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const [coffee,setCoffee] = useState(data)
  const { user } = use(AuthContext);
  const {
    name,
    supplier,
    taste,
    price,
    photo,
    details,
    likeBy,
    email,
    _id,
    quantity,
  } = coffee;

  const [liked, setLiked] = useState(likeBy.includes(user?.email));

  const [likeCount, setLikeCount] = useState(likeBy.length);

  useEffect(() => {
    setLiked(likeBy.includes(user?.email));
  }, [user, likeBy]);

  const handleLike = () => {
    if (user.email === email) return alert("Do not like your coffee");
    // handle like api
    axios
      .patch(`https://coffee-store-server-tau-two.vercel.app/like/${_id}`, { email: user?.email })
      .then((res) => {
        const isLiked = res.data?.liked;
        setLiked(isLiked);
        setLikeCount((prev) => (isLiked ? prev + 1 : prev - 1));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleOrder = () => {
    if (user.email === email) return alert("Do not order your coffee");
    const orderData = {
      userEmail: user.email,
      orderId: _id,
    };
    axios
      .post(`https://coffee-store-server-tau-two.vercel.app/order-place/${_id}`, orderData)
      .then((res) => {
        if (res.data.insertedId) {
          setCoffee(prev=>{
            return {...prev, quantity: prev.quantity - 1}
          })
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            <span className="text-black">quantity</span>: {quantity}
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
              {liked ? "liked" : "like"}
            </button>
            <button
              onClick={handleOrder}
              className="btn btn-accent text-gray-900 text-xl"
            >
              order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
