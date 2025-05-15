import React from "react";
import cups1 from '../assets/cups/Rectangle 9.png'
import cups2 from '../assets/cups/Rectangle 10.png'
import cups3 from '../assets/cups/Rectangle 11.png'
import cups4 from '../assets/cups/Rectangle 12.png'
import cups5 from '../assets/cups/Rectangle 13.png'
import cups6 from '../assets/cups/Rectangle 14.png'
import cups7 from '../assets/cups/Rectangle 15.png'
import cups8 from '../assets/cups/Rectangle 16.png'

const FollowInstagram = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="text-center mt-8">
        <p className="text-secondary-content">Follow Us Now</p>
      <h1 className="text-primary-content font-semibold text-4xl">Follow on Instagram Follow on Instagram</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        <img className="mx-auto" src={cups1} alt="" />
        <img className="mx-auto" src={cups2} alt="" />
        <img className="mx-auto" src={cups3} alt="" />
        <img className="mx-auto" src={cups4} alt="" />
        <img className="mx-auto" src={cups5} alt="" />
        <img className="mx-auto" src={cups6} alt="" />
        <img className="mx-auto" src={cups7} alt="" />
        <img className="mx-auto" src={cups8} alt="" />
      </div>
    </div>
  );
};

export default FollowInstagram;
 