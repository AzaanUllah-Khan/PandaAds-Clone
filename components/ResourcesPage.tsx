import React from 'react';
import Button from './Button';

interface StudyProps {
    category: string;
    title: string;
    description: string;
    image: string;
    reverse?: boolean;
}

const studies: StudyProps[] = [
    {
        category: 'CPG | AWARENESS & SALES',
        title: 'Driving growth: Coca-Cola leveraged retail media channels to boost sales',
        description: 'While The Coca-Cola Company has numerous ongoing partnerships with foodpanda in the Philippines, one campaign that really stood out in increasing the brand’s penetration, transactions and sales across online and offline platforms was its #BetterwithCoke campaign on foodpanda.',
        image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1000&auto=format&fit=crop', // Placeholder for Coke
        reverse: false
    },
    {
        category: 'ENTERTAINMENT | ACQUISITION',
        title: 'Amazon Prime Video and foodpanda’s impressive entertainment strategy',
        description: 'We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda’s platform to raise the brand’s visibility in the lives of the local people.',
        image: 'https://images.unsplash.com/photo-1522869635100-1f4d061dd70f?q=80&w=1000&auto=format&fit=crop', // Placeholder for Entertainment
        reverse: true
    },
    {
        category: 'CPG | PRODUCT LAUNCH',
        title: 'Mars Wrigley found the perfect audience for its new product with panda ads',
        description: 'Eclipse mints are made by Mars Wrigley, the world’s leading manufacturer of chocolate, chewing gum, mints and fruity confections. When it came to launching a fresh new product in the range in Hong Kong, they knew they needed a fresh and creative solution. That’s where panda ads came in to serve up the right mix of audience targeting and creative media to get consumers buying.',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a45ddca?q=80&w=1000&auto=format&fit=crop', // Placeholder for Mints
        reverse: false
    },
    {
        category: 'SPORTS | BRAND AWARENESS',
        title: 'Under Armour teamed up with panda ads to drive awareness and brand love',
        description: 'Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world’s most-watched sporting events through a full-funnel approach that maximised brand visibility, fan buzz, and connections with audiences at key moments.',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1000&auto=format&fit=crop', // Placeholder for Sports
        reverse: true
    }
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-24">
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-8 mb-20 bg-gray-50 py-16 rounded-3xl">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Discover case studies
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Explore success stories from our brand partners across verticals like CPG (FMCG), banking & finance, travel, retail, and more.
          </p>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="container mx-auto px-4 md:px-8 pb-20">
        <div className="flex flex-col gap-24">
            {studies.map((study, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-12 ${study.reverse ? 'md:flex-row-reverse' : ''}`}>
                    {/* Image Section */}
                    <div className="w-full md:w-1/2">
                        {/* We use a colorful container to mimic the graphic design in the screenshot */}
                        <div className={`aspect-[16/9] w-full rounded-xl overflow-hidden shadow-lg relative ${
                            index === 0 ? 'bg-pink-100' : 
                            index === 1 ? 'bg-blue-400' :
                            index === 2 ? 'bg-yellow-100' : 'bg-pink-400'
                        }`}>
                            <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-700" 
                            />
                            {/* Decorative overlay to simulate the branding graphics */}
                            <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md"></div>
                            <div className="absolute bottom-4 right-4 w-24 h-8 rounded-full bg-white/20 backdrop-blur-md"></div>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                        <h4 className="text-panda-pink font-bold uppercase tracking-wide text-sm mb-3">
                            {study.category}
                        </h4>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 leading-tight">
                            {study.title}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
                            {study.description}
                        </p>
                        <Button variant="primary" className="px-8 bg-panda-pink hover:bg-pink-600">
                            Read more
                        </Button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-panda-pink py-16 text-center">
          <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-8">
                  Start advertising with panda ads today!
              </h2>
              <Button variant="white" className="px-8 py-3 text-panda-pink font-extrabold">
                  Get in touch!
              </Button>
          </div>
      </section>
    </div>
  );
};

export default ResourcesPage;