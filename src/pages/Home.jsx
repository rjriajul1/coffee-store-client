import React from 'react';
import PopularCoffees from '../components/PopularCoffees';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
              <PopularCoffees coffees={coffees}/>
        </div>
    );
};

export default Home;