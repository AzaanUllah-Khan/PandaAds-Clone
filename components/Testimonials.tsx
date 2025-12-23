import React from 'react';
import { TestimonialItem } from '../types';

const testimonials: TestimonialItem[] = [
  {
    quote: "We were looking for a large APAC-wide partner with premium O&O mobile ad inventory that could connect us to our target audiences. panda ads were able to be that partner and have delivered beyond our campaign's target KPIs. We look forward to expanding our business with them.",
    author: "Luke Addison",
    role: "Managing Director",
logoSrc: "/assets/home/o1.png"  },
  {
    quote: "As one of the goals from 2023 was to accelerate quick commerce growth through new activations and media, tapping into panda ads helped us grow our quick commerce business and deliver on our KPIs.",
    author: "Jayson Lopez",
    role: "Senior Media and Digital Marketing Manager",
logoSrc: "/assets/home/o2.png"  },
  {
    quote: "The collaboration with foodpanda through panda ads greatly enhanced our customer acquisition initiatives, by capturing our audience’s interest and fostering heightened user engagement.",
    author: "Jessica Faye Tan",
    role: "Head of Commercial",
logoSrc: "/assets/home/o3.png"  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16 text-black">
          What our customers are saying
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {testimonials.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <p className="text-gray-700 italic leading-relaxed mb-6 font-medium text-sm md:text-base">
                "{item.quote}"
              </p>
              <div>
                <h4 className="font-bold text-black">{item.author}</h4>
                <p className="text-sm text-gray-500 mb-4">{item.role}</p>
                <div className="flex justify-center mt-4">
                  <img src={item.logoSrc} alt="Company Logo" className="h-8 md:h-10 opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;