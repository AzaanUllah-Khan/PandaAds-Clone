import React, { useState } from 'react';
import Button from './Button';

interface TabContent {
  id: string;
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

const tabData: TabContent[] = [
  {
    id: 'popup',
    label: 'Full-page pop-up',
    title: 'Full-page pop-up',
    description: 'Engage foodpanda customers through high-impact, disruptive formats',
    imageSrc: '/assets/solution/c1.png'
  },
  {
    id: 'carousel',
    label: 'Carousel banner',
    title: 'Carousel banner',
    description: 'Showcase multiple products or promotions in a swipeable format',
    imageSrc: '/assets/solution/c2.png'
  },
  {
    id: 'upsell',
    label: 'Cart upsell',
    title: 'Cart upsell',
    description: 'Drive incremental sales by suggesting relevant add-ons at checkout',
    imageSrc: '/assets/solution/c3.png'
  },
  {
    id: 'switch',
    label: 'Payment switch',
    title: 'Payment switch',
    description: 'Influence payment method selection with targeted incentives',
    imageSrc: '/assets/solution/c4.png'
  }
];

const SolutionsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('popup');
  const activeContent = tabData.find(t => t.id === activeTab) || tabData[0];

  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Header Section */}
      <section className="container mx-auto px-4 md:px-8 py-12 bg-gray-50">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
            Boost your brand with<br />
            our retail media solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Harness the power of first-party retail data to connect with millions of high-value customers within and beyond the app.
          </p>
        </div>
      </section>

      {/* In-App Display Ads Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-black">
            Reach high-value customers<br />
            with in-app display ads
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ad 1 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 w-full max-w-[350px]">
                 <img src="/assets/solution/t1.png" alt="Homescreen ad" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Homescreen ad</h3>
              <p className="text-gray-600 text-sm px-4">
                Reach millions of customers at the beginning of their purchase journey
              </p>
            </div>

            {/* Ad 2 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 w-full max-w-[350px]">
                 <img src="/assets/solution/t2.png" alt="Homescreen ad" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Order tracking page ad</h3>
              <p className="text-gray-600 text-sm px-4">
                Drive engagement and results without disrupting their ordering experience
              </p>
            </div>

            {/* Ad 3 */}
            <div className="flex flex-col items-center text-center group">
              <div className="mb-4 w-full max-w-[350px]">
                 <img src="/assets/solution/t3.png" alt="Homescreen ad" className="w-full h-full object-cover rounded-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-3">Shopping ad</h3>
              <p className="text-gray-600 text-sm px-4">
                Boost conversion on pandamart and foodpanda shops
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consideration Section with Tabs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-10 text-black">
            Boost in-app consideration and conversions
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {tabData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-full font-bold border-2 transition-all duration-200 ${
                  activeTab === tab.id 
                    ? 'bg-panda-pink border-panda-pink text-white shadow-md' 
                    : 'bg-transparent border-panda-pink text-panda-pink hover:bg-pink-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-24 max-w-5xl mx-auto">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold mb-4">{activeContent.title}</h3>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                {activeContent.description}
              </p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
               <div className="w-full">
                  <img src={activeContent.imageSrc} alt={activeContent.title} className="w-full h-full object-contain" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Off-App Advertising */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold mb-10 text-black">
              Amplify your campaigns
            <br/>
              with off-app advertising solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
             {/* Item 1 */}
             <div className="flex flex-col items-center text-center">
               <div className="h-50 mb-6 flex items-end justify-center">
                  <img 
                    src="/assets/solution/f1.png" 
                    alt="Marketing Channels" 
                    className="h-full w-full object-contain "
                  />
               </div>
               <h3 className="text-xl font-bold mb-3">Marketing channels</h3>
               <p className="text-gray-600 text-sm">
                 Extend your reach with foodpanda's digital networks
               </p>
             </div>

             {/* Item 2 */}
             <div className="flex flex-col items-center text-center">
               <div className="h-50 mb-6 flex items-end justify-center">
                  <img 
                    src="/assets/solution/f2.png" 
                    alt="Rider bag" 
                    className="h-full w-full object-contain "
                  />
               </div>
               <h3 className="text-xl font-bold mb-3">Rider bags</h3>
               <p className="text-gray-600 text-sm">
                 Put your brand in the fast lane with O2O campaigns
               </p>
             </div>

             {/* Item 3 */}
             <div className="flex flex-col items-center text-center">
               <div className="h-50 mb-6 flex items-end justify-center">
                  <img 
                    src="/assets/solution/f3.png" 
                    alt="Product sampling" 
                    className="h-full w-full object-contain"
                  />
               </div>
               <h3 className="text-xl font-bold mb-3">Product sampling</h3>
               <p className="text-gray-600 text-sm">
                 Boost product awareness and drive sales
               </p>
             </div>

          </div>
        </div>
      </section>

      {/* Media Kit Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                        Get your custom<br />
                        panda ads media kit
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Share your next campaign with us and receive a tailored media kit straight to your inbox – easy peasy!
                    </p>
                    <Button variant="primary" className="bg-panda-pink text-white px-8 py-3">
                        Get started
                    </Button>
                </div>
                <div className="w-full md:w-1/2 flex justify-end">
                    <img src="/assets/solution/ls.png" width={'365px'} />
                </div>
            </div>
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

export default SolutionsPage;