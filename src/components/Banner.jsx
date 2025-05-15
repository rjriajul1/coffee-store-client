import React from 'react';
import bannerImg from '../assets/more/3.png'

const Banner = () => {
    return (
        <div style={{backgroundImage: `url(${bannerImg})`}} className="bg-cover bg-center h-96 w-full relative rounded-2xl">
            
            <div className='absolute text-white right-6 w-1/2 top-25 space-y-4'>
                <h1 className='text-2xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='content-font text-gray-400 text-xs'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-primary rounded-2xl px-4 py-2 text-primary-content'>Learn More</button>
            </div>
            
        </div>
    );
};

export default Banner;