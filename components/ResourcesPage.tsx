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
        image: '../Assets/res/tes1.jpeg',
        reverse: false
    },
    {
        category: 'ENTERTAINMENT | ACQUISITION',
        title: 'Amazon Prime Video and foodpanda’s impressive entertainment strategy',
        description: 'We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda’s platform to raise the brand’s visibility in the lives of the local people.',
        image: '../Assets/res/tes3.jpeg',
        reverse: true
    },
    {
        category: 'CPG | PRODUCT LAUNCH',
        title: 'Mars Wrigley found the perfect audience for its new product with panda ads',
        description: 'Eclipse mints are made by Mars Wrigley, the world’s leading manufacturer of chocolate, chewing gum, mints and fruity confections. When it came to launching a fresh new product in the range in Hong Kong, they knew they needed a fresh and creative solution. That’s where panda ads came in to serve up the right mix of audience targeting and creative media to get consumers buying.',
        image: '../Assets/res/tes2.jpeg',
        reverse: false
    },
    {
        category: 'SPORTS | BRAND AWARENESS',
        title: 'Under Armour teamed up with panda ads to drive awareness and brand love',
        description: 'Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world’s most-watched sporting events through a full-funnel approach that maximised brand visibility, fan buzz, and connections with audiences at key moments.',
        image: '../Assets/res/tes4.jpg',
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
                            <img 
                                src={study.image} 
                                alt={study.title} 
                                className="w-full h-full object-cover" 
                            />
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                        <h4 className="text-panda-pink font-bold uppercase tracking-wide text-sm mb-2">
                            {study.category}
                        </h4>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-black mb-4 leading-tight">
                            {study.title}
                        </h2>
                        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed">
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