import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const TestimonialCard = ({ img1, img2, name1, position, company, desc }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [15, -15]); // Reduced rotation range
  const rotateY = useTransform(x, [-100, 100], [-15, 15]); // Reduced rotation range

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        z: 100,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        x.set(offsetX / 2); // Scale down movement for smoother effect
        y.set(offsetY / 2); // Scale down movement for smoother effect
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 10,
      }} // Added smoother transition
      className="card text-white max-w-[90%] md:max-w-[45%] lg:max-w-[30%] flex flex-col justify-center bg-custom-blue-gradient shadow-md shadow-blue-700 rounded-xl mb-6 mt-6 mx-auto"
    >
      {/* Icon Section */}
      <div className="icons flex justify-between pl-4 pt-4">
        <div className="w-10">
          <img src={img1} alt="Icon" />
        </div>
        <div className="flex mr-2 rounded-lg">
          <img className="h-10" src={img2} alt="Icon" />
        </div>
      </div>

      {/* Title Section */}
      <div className="flex gap-1 mt-4 pl-4">
        <img
          width={15}
          src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
          alt="Rating Star"
        />
        <img
          width={15}
          src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
          alt="Rating Star"
        />
        <img
          width={15}
          src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
          alt="Rating Star"
        />
        <img
          width={15}
          src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
          alt="Rating Star"
        />
        <img
          width={15}
          src="https://img.icons8.com/?size=100&id=7856&format=png&color=FFFFFF"
          alt="Rating Star"
        />
      </div>

      {/* Description */}
      <p className="text-neutral-400 mt-4 mb-6 pl-4 text-base w-[90%] leading-9">
        {desc}
      </p>

      {/* Pricing and Timeline */}
      <div className="flex pl-4 mt-6 gap-3 font-semibold text-white">
        <h2 className="text-xl">{name1}</h2>
        <div className="w-1 h-1 bg-white rounded-full mt-3"></div>
        <h2 className="text-xl">{position}</h2>
      </div>
      <div className="pl-4 mt-2 gap-6 font-semibold mb-4">
        <h2 className="text-xl text-neutral-400">{company}</h2>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
