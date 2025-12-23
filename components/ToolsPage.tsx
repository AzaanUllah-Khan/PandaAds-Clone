import React from 'react';
import Button from './Button';

const ToolsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#FF2B85] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="max-w-xl w-full md:w-1/2 relative z-20">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] tracking-tight">
              Get your custom<br />
              panda ads media kit
            </h1>
            <div className="absolute top-2 right-0 md:left-[450px] md:-top-4 text-[#FFD700] text-4xl font-light rotate-45">+</div>
            
            <p className="text-lg md:text-xl font-medium mb-10 leading-snug">
              Share your next campaign with us and receive a<br className="hidden md:block" />
              tailored media kit straight to your inbox – easy peasy!
            </p>
            
            <div className="relative inline-block">
                <button className="bg-white text-black font-bold py-3 px-10 rounded-full hover:bg-gray-100 transition-transform active:scale-95 text-base shadow-sm">
                Get started
                </button>
                 <div className="absolute -bottom-12 -right-12 text-[#FFD700] text-6xl font-light rotate-12">+</div>
            </div>
          </div>
          
          {/* Hero Illustration */}
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative h-[300px] md:h-[500px]">
            <img 
              src="https://cdn3d.iconscout.com/3d/premium/thumb/rocket-3204901-2680653.png?f=webp" 
              alt="Panda Rocket" 
              className="w-auto h-full object-contain transform -rotate-12 z-10"
            />
          </div>
        </div>
        
        {/* Background shapes */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-to-t from-orange-400/30 to-transparent rounded-tl-full blur-3xl"></div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 md:py-32 relative">
        
        {/* Dotted Connector Line (Desktop Only) */}
        <div className="hidden md:block absolute top-[25%] left-0 w-full h-[60%] pointer-events-none z-0">
             <svg width="100%" height="100%" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                {/* A cubic bezier curve connecting the bottom of first card to top of second */}
                <path d="M 950 200 C 950 400, 480 300, 480 500" stroke="#FF2B85" strokeWidth="3" strokeDasharray="12 12" strokeLinecap="round" />
             </svg>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10">
          
          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative">
             {/* Text Block */}
             <div className="w-full md:w-5/12 text-center md:text-right relative">
                <div className="relative inline-block">
                    {/* Yellow Stars Decoration */}
                    <div className="absolute -top-16 -left-10 md:-left-20 text-[#FFC107] text-6xl animate-pulse">
                         <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                         </svg>
                    </div>
                    <div className="absolute -top-6 -left-2 md:-left-4 text-[#FFC107] text-4xl">
                         <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                         </svg>
                    </div>
                    
                    <h2 className="text-4xl md:text-6xl font-extrabold text-[#FF2B85] leading-[1.1]">
                    Tell us a little<br />
                    about your<br />
                    campaign!
                    </h2>
                </div>
             </div>

             {/* Form Card 1 */}
             <div className="w-full md:w-5/12 relative">
                <div className="bg-[#FF2B85] rounded-3xl p-8 md:p-10 shadow-2xl relative z-10">
                    <form className="space-y-5">
                    <div>
                        <label className="block text-white font-bold mb-2 text-sm">Industry *</label>
                        <div className="relative">
                            <select className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300 appearance-none cursor-pointer">
                            <option></option>
                            <option>F&B</option>
                            <option>Retail</option>
                            <option>Tech</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-pink-500 font-bold text-xs">
                                ▼
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-white font-bold mb-2 text-sm">Campaign objective(s) *</label>
                        <div className="relative">
                            <select className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300 appearance-none cursor-pointer">
                            <option></option>
                            <option>Brand Awareness</option>
                            <option>Conversions</option>
                            <option>Traffic</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-pink-500 font-bold text-xs">
                                ▼
                            </div>
                        </div>
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-2 text-sm">Market(s) *</label>
                        <div className="relative">
                            <select className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300 appearance-none cursor-pointer">
                            <option></option>
                            <option>Singapore</option>
                            <option>Malaysia</option>
                            <option>Thailand</option>
                            <option>Philippines</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-pink-500 font-bold text-xs">
                                ▼
                            </div>
                        </div>
                    </div>
                    
                    <p className="text-[10px] text-white pt-2">*Required fields</p>

                    <div className="flex justify-center mt-4">
                        <button type="button" className="bg-white text-black font-extrabold py-3 px-16 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                        Next
                        </button>
                    </div>
                    </form>
                </div>

                {/* Target Icon */}
                <div className="absolute -bottom-20 -right-10 md:-right-24 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none">
                    <img 
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/target-board-6625866-5506087.png?f=webp" 
                      alt="Target" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
             </div>
          </div>


          {/* Step 2 */}
          <div className="flex flex-col md:flex-row items-center justify-end gap-12 relative">
             
             {/* Text Block (Mobile: Order 1, Desktop: Order 2) */}
             <div className="w-full md:w-5/12 text-center md:text-left md:order-2">
                <h2 className="text-4xl md:text-6xl font-extrabold text-[#FF2B85] leading-[1.1]">
                  ...and now<br />
                  a bit about<br />
                  you!
                </h2>
             </div>

             {/* Form Card 2 (Mobile: Order 2, Desktop: Order 1) */}
             <div className="w-full md:w-5/12 relative md:order-1">
                 {/* Notebook Icon */}
                <div className="absolute -top-24 -right-10 md:-right-16 w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none">
                    <img 
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/notes-3204899-2680651.png?f=webp" 
                      alt="Notepad" 
                      className="w-full h-full object-contain drop-shadow-2xl transform rotate-12"
                    />
                </div>

                <div className="bg-[#FF2B85] rounded-3xl p-8 md:p-10 shadow-2xl relative z-10">
                    <form className="space-y-4">
                    <div>
                        <label className="block text-white font-bold mb-1 text-sm">Name *</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300" />
                    </div>
                    
                    <div>
                        <label className="block text-white font-bold mb-1 text-sm">Title</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300" />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1 text-sm">Company</label>
                        <input type="text" className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300" />
                    </div>

                    <div>
                        <label className="block text-white font-bold mb-1 text-sm">Work email *</label>
                        <input type="email" className="w-full p-3 rounded-lg bg-white text-gray-800 outline-none focus:ring-4 focus:ring-pink-300" />
                    </div>
                    
                    <div className="flex items-start gap-3 mt-4">
                        <input type="checkbox" id="privacy" className="mt-1 w-5 h-5 rounded border-gray-300 text-pink-600 focus:ring-pink-500" />
                        <label htmlFor="privacy" className="text-[10px] text-white leading-tight opacity-90">
                            I acknowledge and agree to the <a href="#" className="underline font-bold">Privacy Statement</a> and agree to receive marketing materials and industry updates from panda ads. <br />
                            I understand that I can unsubscribe at any time.*
                        </label>
                    </div>

                    <p className="text-[10px] text-white pt-2">*Required fields</p>

                    <div className="flex justify-center mt-6">
                        <button type="button" className="bg-white text-black font-extrabold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap">
                        Get my media kit!
                        </button>
                    </div>
                    </form>
                </div>

                {/* Chart/Dashboard Icon */}
                <div className="absolute -bottom-16 -left-10 md:-left-20 w-40 h-40 md:w-56 md:h-56 z-20 pointer-events-none">
                    <img 
                      src="https://cdn3d.iconscout.com/3d/premium/thumb/analytics-5591325-4663855.png?f=webp" 
                      alt="Analytics" 
                      className="w-full h-full object-contain drop-shadow-2xl"
                    />
                </div>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ToolsPage;