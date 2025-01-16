import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const cardData = [
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
  {
    id: 1,
    title: "Watch Ltd",
    imageUrl:
      "https://i.pinimg.com/originals/a5/af/29/a5af297cc589e13706929afb0015aabd.jpg",
    para: "Streamlined operations, reducing costs by with our automation solutions.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% Growth",
  },
 
];

const Card = ({ imgUrl, title, para, spanText1, spanText2 }) => {
  return (
    <div className="card bg-zinc-800 w-[300px] md:w-[400px] rounded-lg relative overflow-hidden">
    <img
      className="h-[200px] rounded-lg object-cover w-full"
      src={imgUrl}
      
    />
    <div className="p-4 text-white bg-zinc-900 rounded-lg">
      <h1 className="font-semibold text-2xl">{title}</h1>
      <p className="mt-2 text-neutral-400">
        {para}
      </p>
      <div className="flex gap-4 mt-4">
        <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
          {spanText1}
        </span>
        <span className="text-sm rounded-lg bg-zinc-800 border-[1px] border-gray-600 px-3 py-2">
          {spanText2}
        </span>
      </div>
    </div>
  </div>
  );
};

const Results = () => {
  return (
    <div className="bg-black w-full">
      {/* Header Section */}
      <div className="text-white flex flex-col justify-center items-center pt-20">
          <button className="flex items-center justify-center gap-2 px-4 rounded-lg font-light text-lg shadow-md shadow-blue-700 py-2 bg-zinc-800/40">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            Results
          </button>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
            viewport={{ once: true }}
            className="pt-8 text-[30px] md:text-[50px] text-white pl-6 md:pl-16"
          >
            Delivering Tangible Results
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "circInOut" }}
            viewport={{ once: true }}
            className="text-[30px] md:text-[50px] text-neutral-400 px-5"
          >
            That Propel Your Success
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "circInOut" }}
            viewport={{ once: true }}
            className="pt-4 px-5 text-neutral-400 text-base"
          >
            Effortlessly connect with your favorite tool, whether it's your CRM or
            email marketing platform.
          </motion.p>
          <NavLink
            to="/contact"
            className="text-white mt-6 bg-blue-700 px-4 py-3 mb-8 rounded-lg font-semibold shadow-md shadow-blue-700"
          >
            Book a 15-min Call
          </NavLink>
      </div>

      {/* Card Section */}
      <div className="card-container flex flex-nowrap gap-6 p-6 overflow-hidden relative">
        <motion.div
          className="flex gap-6"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            repeat: Infinity,
            duration: 50,
          }}
        >
          {cardData.map((card) => (
            <Card
              key={card.id}
              imgUrl={card.imageUrl}
              title={card.title}
              para={card.para}
              spanText1={card.spanText1}
              spanText2={card.spanText2}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
