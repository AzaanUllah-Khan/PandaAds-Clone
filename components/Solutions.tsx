import React from 'react';
import Button from './Button';
import { SolutionItem } from '../types';

const solutions: SolutionItem[] = [
  {
    title: 'In-app advertising',
    description: 'Increase brand visibility with native display ads across different categories on the foodpanda app',
    imageSrc: '/assets/home/s1.png',
    reverse: false
  },
  {
    title: 'Off-app advertising',
    description: 'Amplify your campaigns with foodpanda, from email marketing and social media to rider bag ads and product sampling',
    imageSrc: '/assets/home/s2.png',
    reverse: true
  },
  {
    title: 'Strategic partnerships',
    description: 'Execute integrated campaigns for maximum impact, with tailored solutions like vouchers, data partnerships and consumer insights',
    imageSrc: '/assets/home/s3.png',
    reverse: false
  },
  {
    title: 'Go beyond basic targeting with panda ads',
    description: 'Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.',
    imageSrc: '/assets/home/s4.png',
    reverse: true
  }
];

const Solutions: React.FC = () => {
  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16 max-w-3xl mx-auto">
          Customised retail media advertising solutions for your brand’s needs
        </h2>

        <div className="flex flex-col gap-24">
          {solutions.map((item, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${item.reverse ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Side */}
              <div className="w-full md:w-1/2">
                <div className="relative overflow-hidden flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                   <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[400px] object-contain md:object-cover transition-transform duration-500"
                   />
                </div>
              </div>

              {/* Text Side */}
              <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4 text-black">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {item.description}
                </p>
                <Button variant="primary" className="px-8">
                  Explore solutions
                </Button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;