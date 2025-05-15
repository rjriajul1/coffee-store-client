import React from 'react';
import bannerImg from '../assets/more/3.png'
import coffee1 from '../assets/icons/1.png'
import coffee2 from '../assets/icons/2.png'
import coffee3 from '../assets/icons/3.png'
import coffee4 from '../assets/icons/4.png'

const Banner = () => {
    return (
       <div>
         <div style={{backgroundImage: `url(${bannerImg})`}} className="bg-cover bg-center h-96 lg:h-[600px] w-full relative ">
            
            <div className='absolute text-white right-6 md:w-1/2 top-25 lg:top-50 space-y-4 p-4'>
                <h1 className='md:text-2xl lg:text-4xl'>Would you like a Cup of Delicious Coffee?</h1>
                <p className='content-font text-gray-400 md:text-xs lg:text-xl'>It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className='bg-primary rounded-2xl px-4 py-2 text-primary-content'>Learn More</button>
            </div>
            
        </div>
        <div className='bg-base-300 '>
          <div className='py-6 xs:px-38 lg:px-28 grid grid-cols-2 md:grid-cols-3 p-2 lg:grid-cols-4 gap-6  mx-auto '>
            <div className='space-y-2'>
                <img src={coffee1} alt="" />
                <h1 className='text-2xl '>Awesome Aroma</h1>
                <p className='content-font text-xs'>You will definitely be a fan of the design & aroma of your coffee</p>
            </div>
            <div className='space-y-2'>
                <img src={coffee2} alt="" />
                <h1 className='text-2xl '>High Quality</h1>
                <p className='content-font text-xs'>You will We served the coffee to you maintaining the best quality</p> 
            </div>
            <div className='space-y-2'>
                <img src={coffee3} alt="" />
                <h1 className='text-2xl '>Pure Grades</h1>
                <p className='content-font text-xs'>You will The coffee is made of the green coffee beans which you will love</p>
            </div>
            <div className='space-y-2'>
                <img src={coffee4} alt="" />
                <h1 className='text-2xl '>Proper Roasting</h1>
                <p className='content-font text-xs'>Your coffee is brewed by first roasting the green coffee beans</p>
            </div>
          </div>
        </div>
       </div>
    );
};

export default Banner;