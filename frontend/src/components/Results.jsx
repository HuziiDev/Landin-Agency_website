import React from "react";
import {motion} from 'framer-motion'
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
      {/* <Swiper
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
      > */}
        {/* Slide 1 */}
        {/* <SwiperSlide> */}
        <div className="card-container flex flex-nowrap gap-6 p-6 overflow-hidden relative">
      <motion.div
        className="flex gap-6"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          duration: 10, // Adjust duration to control speed
        }}
      >
        {/* Card 1 */}
        <div className="card bg-zinc-800 w-[300px] rounded-lg relative overflow-hidden">
          <img
            className="h-[200px] rounded-lg object-cover w-full"
            src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
            alt="London"
          />
          <div className="p-4 text-white bg-zinc-900 rounded-lg">
            <h1 className="font-semibold text-2xl">London</h1>
            <p className="mt-2 text-neutral-400">
              Streamlined operations reducing costs with our automation
              solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                60% Increased Traffic
              </span>
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                40% Growth
              </span>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-zinc-800 w-[300px] rounded-lg relative overflow-hidden">
          <img
            className="h-[200px] rounded-lg object-cover w-full"
            src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
            alt="Paris"
          />
          <div className="p-4 text-white bg-zinc-900 rounded-lg">
            <h1 className="font-semibold text-2xl">Paris</h1>
            <p className="mt-2 text-neutral-400">
              Driving innovation with cutting-edge technology and expertise.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                70% Efficiency Boost
              </span>
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                50% Revenue Growth
              </span>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-zinc-800 w-[300px] rounded-lg relative overflow-hidden">
          <img
            className="h-[200px] rounded-lg object-cover w-full"
            src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
            alt="New York"
          />
          <div className="p-4 text-white bg-zinc-900 rounded-lg">
            <h1 className="font-semibold text-2xl">New York</h1>
            <p className="mt-2 text-neutral-400">
              Transforming businesses through digital transformation and
              insights.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                80% ROI
              </span>
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                30% Market Growth
              </span>
            </div>
          </div>
        </div>

        {/* Duplicate Cards for Seamless Loop */}
        <div className="card bg-zinc-800 w-[300px] rounded-lg relative overflow-hidden">
          <img
            className="h-[200px] rounded-lg object-cover w-full"
            src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
            alt="London Duplicate"
          />
          <div className="p-4 text-white bg-zinc-900 rounded-lg">
            <h1 className="font-semibold text-2xl">London</h1>
            <p className="mt-2 text-neutral-400">
              Streamlined operations reducing costs with our automation
              solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                60% Increased Traffic
              </span>
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                40% Growth
              </span>
            </div>
          </div>
        </div>
        <div className="card bg-zinc-800 w-[300px] rounded-lg relative overflow-hidden">
          <img
            className="h-[200px] rounded-lg object-cover w-full"
            src="https://www.carlington.in/cdn/shop/files/Carlington_elite_analog_ladies_watch_CT_2007_rosewhite.jpg?v=1696689585&width=2400"
            alt="London Duplicate"
          />
          <div className="p-4 text-white bg-zinc-900 rounded-lg">
            <h1 className="font-semibold text-2xl">London</h1>
            <p className="mt-2 text-neutral-400">
              Streamlined operations reducing costs with our automation
              solutions.
            </p>
            <div className="flex gap-4 mt-4">
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                60% Increased Traffic
              </span>
              <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
                40% Growth
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>


        {/* </SwiperSlide> */}

       
      {/* </Swiper> */}
    </div>
  );
};

export default Results;