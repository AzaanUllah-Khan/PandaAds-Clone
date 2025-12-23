import React from 'react';
import Button from './Button';

const CtaBanner: React.FC = () => {
  return (
    <section className="bg-pink-50 py-12">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-black text-center md:text-left">
          Start advertising with panda ads today!
        </h2>
        <Button variant="primary" className="px-8 py-3 text-base">
          Get in touch!
        </Button>
      </div>
    </section>
  );
};

export default CtaBanner;