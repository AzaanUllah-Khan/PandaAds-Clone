import React from 'react';

const brands = [
  'AMAZON', 'HEINEKEN', 'NETFLIX', 'SAMSUNG', 'CITI', 
  'HUAWEI', 'MASTERCARD', 'UNILEVER', 'COCA-COLA', 'P&G', 
  'STANDARD CHARTERED', 'VISA', 'MARS', 'GCASH', 'ZALORA', 'DISNEY+'
];

const BrandGrid: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-16 text-black">
          Brands excelling with us
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand, index) => (
             <div key={index} className="flex items-center justify-center">
                 {/* 
                   In a real project, we would use specific SVG logos. 
                   Here we simulate the logos with text/placeholders to maintain the layout structure without external dependencies for assets I can't guarantee.
                   For aesthetics, I'll use a clean text representation that looks like a logo or a generic placeholder.
                 */}
                 <span className="text-xl md:text-2xl font-bold text-gray-400 hover:text-black cursor-default select-none tracking-widest font-mono">
                  {brand}
                 </span>
             </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">*outside of China</p>
        </div>
      </div>
    </section>
  );
};

export default BrandGrid;