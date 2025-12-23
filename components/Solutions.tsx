import React from 'react';
import Button from './Button';
import { SolutionItem } from '../types';

const solutions: SolutionItem[] = [
  {
    title: 'In-app advertising',
    description: 'Increase brand visibility with native display ads across different categories on the foodpanda app',
    imageSrc: 'https://images.unsplash.com/photo-1512428559087-560fa0ce698d?q=80&w=2070&auto=format&fit=crop', // Placeholder for app UI
    reverse: false
  },
  {
    title: 'Off-app advertising',
    description: 'Amplify your campaigns with foodpanda, from email marketing and social media to rider bag ads and product sampling',
    imageSrc: 'https://images.unsplash.com/photo-1586769852044-692d6e37d0d2?q=80&w=2070&auto=format&fit=crop', // Placeholder for delivery bag
    reverse: true
  },
  {
    title: 'Strategic partnerships',
    description: 'Execute integrated campaigns for maximum impact, with tailored solutions like vouchers, data partnerships and consumer insights',
    imageSrc: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032&auto=format&fit=crop', // Placeholder for partnership/handshake or digital
    reverse: false
  },
  {
    title: 'Go beyond basic targeting with panda ads',
    description: 'Maximise your ROI and connect with a broader, more relevant audience through precise targeting powered by our first-party data.',
    imageSrc: 'https://placehold.co/600x400/F3F4F6/D70F64?text=Targeting+Chart+Visualization', // Placeholder for chart
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
                <div className="relative rounded-3xl overflow-hidden shadow-xl bg-gray-50 p-8 flex items-center justify-center min-h-[300px] md:min-h-[400px]">
                   {/* Using object-contain for charts/screens, cover for lifestyle */}
                   <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-auto max-h-[400px] object-contain md:object-cover rounded-xl hover:scale-105 transition-transform duration-500"
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