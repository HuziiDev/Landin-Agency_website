import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Starter from "./Starter";

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
    <motion.div
          initial={{x:0}}
          animate={{x:'-100%'}}
          transition={{ease:'linear', repeat: Infinity, duration: 20}}
          className="card bg-zinc-800 w-[300px] md:w-[400px] rounded-lg relative overflow-hidden"
     
     >
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
  </motion.div>
  );
};

const Results = () => {
  return (
    <div className="bg-black w-full">
      {/* Header Section */}

              <Starter
                        btn1="Results"
                        title1="Delivering Tangible Results"
                        title2="That Propel Your Success"
                        desc=" Effortlessly connect with your favorite tool, whether it's your CRM or
                        email marketing platform."
                        isBtn={true}
                        btn2="Book a 15-min Call"
                        path='/contact'
              />
          

          {/* Card Section */}
            <div className="card-container flex flex-nowrap gap-6 p-6 overflow-hidden relative">
                <motion.div
                  className="flex gap-6"
                
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
