import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-0 min-h-[490px] md:h-[490px] overflow-hidden flex items-end">
      {/* Background Image Area */}
      <div className="absolute inset-0 z-0">
        <img 
          src="../Assets/Home/hero.webp" 
          alt="Woman eating pizza" 
          className="w-full h-full object-cover object-center"
        />
        </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 py-12 md:py-12">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3 drop-shadow-lg">
            Reach millions<br />
            with panda ads
          </h1>
          <p className="text-lg md:text-xl text-gray-100 mb-5 font-medium leading-relaxed drop-shadow-md max-w-xl">
            Advertise with foodpanda and connect with millions of ready-to-shop customers within and beyond the foodpanda app.
          </p>
          <Button variant="white" className="px-8 py-3 text-base shadow-lg">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;