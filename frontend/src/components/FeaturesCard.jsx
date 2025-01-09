import React from 'react'

const FeaturesCard = ({img1,title1,title2,desc}) => {
  return (
    <div className="card text-white max-w-[90%] md:max-w-[30%] lg:max-w-[30%] flex flex-col justify-center bg-custom-blue-gradient shadow-md shadow-blue-700 rounded-xl mb-6 mt-6">
    <div className="images flex justify-between pl-2 pt-4">
      <img
        className="w-10 h-10"
        src={img1}
        alt=""
      />
      <img
        className="w-10 h-8 mr-2"
        src="https://img.icons8.com/?size=100&id=52360&format=png&color=000000"
        alt=""
      />
    </div>

    <div className="flex mt-10 gap-6 pl-2">
      <h2 className="font-semibold">{title1}</h2>

      <button className="bg-blue-700 px-3 font-semibold shadow-md shadow-blue-600 py-1 rounded-lg text-sm">
        Pro
      </button>
    </div>
    <h2 className="text-neutral-400 font-semibold pl-2">{title2}</h2>

    <div className="border-1 h-[1px] border-white w-[40%] bg-white/30 mt-5 pl-2"></div>

    <p className="text-neutral-400 mt-4 mb-6 pl-2 text-sm w-[90%]">
     {desc}
    </p>
  </div>
  )
}

export default FeaturesCard