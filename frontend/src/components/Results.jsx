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
    id: 2,
    title: "FanFit Jerseys",
    imageUrl:
      "https://i.pinimg.com/736x/59/d3/dd/59d3ddd1fef88d4b74bbbd0c0a94bc14.jpg",
    para: "Increased customer engagement improving overall growth.",
    spanText1: "60% Enhanced Visibility",
    spanText2: "65% Growth",
  },
  {
    id: 3,
    title: "Elite Cothing",
    imageUrl:
      "https://media.istockphoto.com/id/1222812626/photo/a-stack-of-neatly-folded-dark-clothes-isolated-on-a-black-gray-background-close-up.jpg?s=612x612&w=0&k=20&c=iZJLJR4IHT8Tr9I4D-dwfgXDXOyVsb34fbM7sTe0cVA=",
    para: "Boosted customer engagement with a digital presence and targeted campaigns.",
    spanText1: "60% Increased Traffic",
    spanText2: "35% enhanced Visibility",
  },
  {
    id: 4,
    title: "KYMP Ditigal Agency",
    imageUrl:
      "https://www.shutterstock.com/image-vector/vector-illustration-radial-circle-silver-600nw-2223827219.jpg",
    para: "Expanded market reach, tapping into new demographics with a driven approach",
    spanText1: "20% Market Share",
    spanText2: "35% enhanced Visibility",
  },
  
 
 
];

const Card = ({ imgUrl, title, para, spanText1, spanText2 }) => {
  return (
    <motion.div
          id="results"
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
                        path='#form'
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
