import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const Results = () => {
  return (
    <div className="bg-black w-full">
      {/* Header Section */}
      <div className="text-white flex flex-col justify-center items-center pt-20">
        <button className="flex items-center justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          Results
        </button>
        <h1 className="pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16">
          Delivering Tangible Results
        </h1>
        <h1 className="text-[30px] md:text-[50px] text-neutral-400 px-5">
          That Propel Your Success
        </h1>
        <p className="pt-4 px-5 text-neutral-400 text-base">
          Effortlessly connect with your favorite tool, whether it's your CRM or email marketing platform.
        </p>
        <button className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700">
          Book a 15-min Call
        </button>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true}
        pagination={{ clickable: false }}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        loop={true} 
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        spaceBetween={20}
        className="p-4"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="card bg-zinc-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[90%] mx-auto rounded-lg relative">
            <div className="w-full h-[450px] mx-auto rounded-lg pt-2">
              <img
                className="h-[435px] rounded-lg object-cover"
                src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
                alt="Slide 1"
              />
              <div className="absolute flex flex-col justify-start top-28 left-3 w-[90%] md:min-w-[200px] h-[320px] bg-zinc-900 rounded-lg text-white">
                <h1 className="font-semibold pt-4 pl-4 text-2xl">London</h1>
                <h2 className="pt-2 pl-4 text-lg">Raven Company</h2>
                <p className="mt-6 text-neutral-400 pl-4">
                  Streamlined operations reducing costs with our automation solutions.
                </p>
                <div className="text-white pl-4 mt-12 flex gap-4  items-center">
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">60% Increased Traffic</span>
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">40% Growth</span>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-zinc-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[90%] mx-auto rounded-lg relative">
            <div className="w-full h-[450px] mx-auto rounded-lg pt-2">
              <img
                className="h-[435px] rounded-lg object-cover"
                src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
                alt="Slide 1"
              />
              <div className="absolute flex flex-col justify-start top-28 left-3 w-[90%] md:min-w-[200px] h-[320px] bg-zinc-900 rounded-lg text-white">
                <h1 className="font-semibold pt-4 pl-4 text-2xl">London</h1>
                <h2 className="pt-2 pl-4 text-lg">Raven Company</h2>
                <p className="mt-6 text-neutral-400 pl-4">
                  Streamlined operations reducing costs with our automation solutions.
                </p>
                <div className="text-white pl-4 mt-12 flex gap-4  items-center">
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">60% Increased Traffic</span>
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">40% Growth</span>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-zinc-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[90%] mx-auto rounded-lg relative">
            <div className="w-full h-[450px] mx-auto rounded-lg pt-2">
              <img
                className="h-[435px] rounded-lg object-cover"
                src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
                alt="Slide 1"
              />
              <div className="absolute flex flex-col justify-start top-28 left-3 w-[90%] md:min-w-[200px] h-[320px] bg-zinc-900 rounded-lg text-white">
                <h1 className="font-semibold pt-4 pl-4 text-2xl">London</h1>
                <h2 className="pt-2 pl-4 text-lg">Raven Company</h2>
                <p className="mt-6 text-neutral-400 pl-4">
                  Streamlined operations reducing costs with our automation solutions.
                </p>
                <div className="text-white pl-4 mt-12 flex gap-4  items-center">
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">60% Increased Traffic</span>
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">40% Growth</span>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card bg-zinc-800 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[90%] xl:w-[90%] mx-auto rounded-lg relative">
            <div className="w-full h-[450px] mx-auto rounded-lg pt-2">
              <img
                className="h-[435px] rounded-lg object-cover"
                src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
                alt="Slide 1"
              />
              <div className="absolute flex flex-col justify-start top-28 left-3 w-[90%] md:min-w-[200px] h-[320px] bg-zinc-900 rounded-lg text-white">
                <h1 className="font-semibold pt-4 pl-4 text-2xl">London</h1>
                <h2 className="pt-2 pl-4 text-lg">Raven Company</h2>
                <p className="mt-6 text-neutral-400 pl-4">
                  Streamlined operations reducing costs with our automation solutions.
                </p>
                <div className="text-white pl-4 mt-12 flex gap-4  items-center">
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">60% Increased Traffic</span>
                  <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">40% Growth</span>
                </div>
                
              </div>
            </div>
          </div>
        </SwiperSlide>

       
      </Swiper>
    </div>
  );
};

export default Results;