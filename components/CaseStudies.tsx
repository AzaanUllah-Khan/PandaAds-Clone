import React from 'react';
import Button from './Button';
import { CaseStudyItem } from '../types';

const cases: CaseStudyItem[] = [
  {
    brand: 'Coca-Cola',
    title: 'Coca-Cola leveraged retail media channels to boost sales and drive growth',
    imageSrc: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2070&auto=format&fit=crop'
  },
  {
    brand: 'Mars Wrigley',
    title: 'Mars Wrigley finds the perfect audience for its new product with panda ads',
    imageSrc: 'https://images.unsplash.com/photo-1582053433976-25c00369fc93?q=80&w=2024&auto=format&fit=crop'
  },
  {
    brand: 'Amazon Prime Video',
    title: 'Amazon Prime Video and foodpanda’s impressive entertainment strategy',
    imageSrc: 'https://images.unsplash.com/photo-1574375927938-d5a98e8efe85?q=80&w=2069&auto=format&fit=crop'
  }
];

const CaseStudies: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16 text-black">
          Proven impact with panda ads
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={item.imageSrc} 
                  alt={item.brand} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Brand Logo Overlay Placeholder */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold shadow-sm">
                    {item.brand}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-6 text-black leading-snug flex-grow">
                  {item.title}
                </h3>
                <div>
                    <Button variant="primary" className="px-6 py-2 text-sm">
                    Read more
                    </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;