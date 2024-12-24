import React from 'react';
import randomImage from "./random_img.jpeg";

const Cards = ({ title, rating, img }) => {
    // ->>>>the image is not a URL the img it give is from local storage so i used a single image for all  
  return (
    <div className="w-60 h-auto border rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer m-3">
      <img src={randomImage} alt="no img" className="w-full h-50 object-cover" />
      <div className="p-4">
        <p className="text-lg font-semibold mb-2">Movie Name: {title}</p>
        <p className="text-sm text-gray-900 font-bold">Rating: {rating}</p>
      </div>
    </div>
  );
};

export default Cards;
