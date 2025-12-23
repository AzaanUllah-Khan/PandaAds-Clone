import React from 'react';
import Button from './Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-20 md:pt-0 bg-black min-h-[500px] md:h-[600px] overflow-hidden flex items-center">
      {/* Background Split */}
      <div className="absolute inset-0 flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black h-full relative z-10"></div>
        <div className="w-full md:w-1/2 h-full relative">
             <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop" 
            alt="Woman eating pizza" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Gradient overlay for smooth text transition on mobile or small screens if needed */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent md:hidden"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-20 py-12 md:py-0">
        <div className="max-w-xl text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Reach millions<br />
            with panda ads
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 font-medium leading-relaxed">
            Advertise with foodpanda and connect with millions of ready-to-shop customers within and beyond the foodpanda app.
          </p>
          <Button variant="white" className="px-8 py-3 text-base">
            Get in touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;