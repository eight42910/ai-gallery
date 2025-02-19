import React from 'react';
import aiPro1 from '../assets/ai-pro1.jpg';
import aiPro2 from '../assets/ai-pro2.jpg';
import aiPro3 from '../assets/ai-pro3.jpg';

function Gallery() {
  const images = [
    aiPro1,
    aiPro2,
    aiPro3,
  ];

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="shadow-lg rounded-lg overflow-hidden animate-fade-in hover:scale-110 transition-transform duration-300 relative">
            <img src={image} alt={`AI Generated ${index}`} className="w-full h-64 object-cover" />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <button className="bg-ai-blue text-white py-2 px-4 rounded-full hover:bg-ai-blue-dark transform hover:scale-110 transition-transform duration-300">詳細を見る</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const fadeIn = {
  'animate-fade-in': {
    '0%': {
      opacity: '0',
    },
    '100%': {
      opacity: '1',
    },
  },
}

export default Gallery;
