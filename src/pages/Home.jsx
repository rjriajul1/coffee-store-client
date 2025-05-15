import React from 'react';
import PopularCoffees from '../components/PopularCoffees';
import { useLoaderData } from 'react-router';
import FollowInstagram from '../components/FollowInstagram';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
              <PopularCoffees initailCoffees={coffees}/>
              <FollowInstagram/>
        </div>
    );
};

export default Home;