import React from 'react';
import { StatItem } from '../types';

const stats: StatItem[] = [
  { value: '125M', label: 'app downloads' },
  { value: '11', label: 'markets' },
  { value: '400+', label: 'cities' },
];

const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16 max-w-4xl mx-auto leading-tight">
          Boost your brand with Asia’s largest<br className="hidden md:block" />
          food and grocery delivery network*
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          {stats.map((stat, index) => (
            <div key={index} className="pt-8 md:pt-0 px-4">
              <div className="text-5xl md:text-7xl font-extrabold text-black mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-gray-600 font-bold text-lg md:text-xl">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;