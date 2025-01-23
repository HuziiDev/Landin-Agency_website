import React from 'react';

const ServicesCard = ({ img1, title1, title2, desc , rate}) => {
  return (
    <div className="card text-white max-w-[90%] md:max-w-[45%] lg:max-w-[30%] flex flex-col justify-center bg-custom-blue-gradient shadow-md shadow-blue-700 rounded-xl mb-6 mt-6 mx-auto">
      {/* Icon Section */}
      <div className="icons flex justify-between pl-4 pt-4">
        <div className="w-10">
          <img src={img1} alt="Icon" />
        </div>
        <div className="bg-gradient-to-r from-black via-blue-900 to-black border-[0.2px] flex mr-2 rounded-lg border-neutral-600">
          <p className="px-2 py-1 font-light">Development</p>
        </div>
      </div>

      {/* Title Section */}
      <div className="flex mt-10 gap-6 pl-4">
        <h2 className="font-semibold text-xl">{title1}</h2>
      </div>

      {/* Divider */}
      <div className="border-1 h-[1px] border-white w-[40%] bg-white/30 mt-5 pl-2"></div>

      {/* Description */}
      <p className="text-neutral-400 mt-4 mb-6 pl-4 text-base w-[90%]">
        {desc}
      </p>

      {/* Pricing and Timeline */}
      <div className="icons flex flex-wrap gap-4 pl-4 pt-4">
        <div className="bg-transparent border-[0.2px] flex rounded-lg border-neutral-600">
          <p className="font-semibold px-2 py-2">
            {rate} <span className="text-neutral-400 font-semibold">/Project</span>
          </p>
        </div>
        <div className="bg-transparent border-[0.2px] flex rounded-lg border-neutral-600">
          <p className="px-2 py-2 font-semibold">
            2-3 <span className="text-neutral-400 font-semibold">Week</span>
          </p>
        </div>
      </div>

      {/* Statistics */}
      <div className="flex flex-col gap-4 mt-8 mb-4 pl-4">
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000"
            alt="Stat Icon"
          />
          <p className="text-base text-neutral-400">From $0 to $500,000 in revenue.</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-6 h-6"
            src="https://img.icons8.com/?size=100&id=2sZ0sdlG9kWP&format=png&color=000000"
            alt="Stat Icon"
          />
          <p className="text-base text-neutral-400">47% growth in new customers.</p>
        </div>
      </div >
    </div>
  );
};

export default ServicesCard;
