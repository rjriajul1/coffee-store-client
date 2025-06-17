// import axios from 'axios';
import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { IoEyeSharp } from 'react-icons/io5';
import { Link } from 'react-router';
import useAxiosSecure from '../hooks/useAxiosSecure';

const MyOrders = () => {
    const [orders,setOrders]= useState([])
    const {user} = use(AuthContext)
    const axiosSecure = useAxiosSecure()
    useEffect(()=>{
        axiosSecure(`/my-orders/${user?.email}`)
        .then(data=>{
          // console.log(res);
            setOrders(data)
        })
        .catch(error=> {
            console.log(error);
        })
    },[user,axiosSecure])
    
    return (
        <div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                {orders?.map(coffee=> <div key={coffee._id} className="card  card-side bg-base-300 shadow-sm">
      <figure>
        <img className="w-[185px" src={coffee?.photo} alt="Movie" />
      </figure>
      <div className="flex justify-around items-center w-full">
        <div>
          <h2 className="text-secondary-content">
            <span className="text-black">Name</span>: {coffee?.name}
          </h2>
          <p className="text-secondary-content">
            <span className="text-black">quantity</span>: {coffee?.quantity}
          </p>
          <p className="text-secondary-content">
            <span className="text-black">Price</span>: {coffee?.price}
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <Link to={`/coffeeDetails/${coffee.orderId}`}>
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

export default MyOrders;