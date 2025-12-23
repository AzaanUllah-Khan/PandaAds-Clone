import React from 'react';
import { BenefitItem } from '../types';
import { Megaphone, ShoppingBasket, ClipboardCheck } from 'lucide-react';

const benefits: BenefitItem[] = [
  {
    icon: <Megaphone className="w-12 h-12 text-panda-pink" strokeWidth={1.5} />,
    title: 'Maximise your reach',
    description: 'Amplify your campaign by connecting with your target customers right where they shop'
  },
  {
    icon: <ShoppingBasket className="w-12 h-12 text-panda-pink" strokeWidth={1.5} />,
    title: 'Engage high-value audiences',
    description: 'Leverage our first-party data and advanced targeting to connect with the right audience'
  },
  {
    icon: <ClipboardCheck className="w-12 h-12 text-panda-pink" strokeWidth={1.5} />,
    title: 'Get personalised support',
    description: 'Achieve your marketing goals and drive growth with personalised support, insights, and more'
  }
];

const Benefits: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Power up your visibility & engagement
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-transparent">
              <div className="mb-6 transform transition-transform hover:scale-110 duration-300 relative">
                {/* Decorative background circle blob */}
                <div className="absolute -inset-4 bg-pink-100 rounded-full opacity-50 blur-lg"></div>
                <div className="relative">
                     {/* Custom icon styling to match the playful illustrative style */}
                     <div className="bg-white p-4 rounded-2xl shadow-sm border border-pink-100">
                        {benefit.icon}
                     </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-black">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;