import React, { useState } from "react";
import Starter from "./Starter";
import { FiPlusCircle } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";

const Faq = () => {
//   const [openFaq, setOpenFaq] = useState(false);
   const faqData = [
    {
      id: 1,
      question: "What do I need to get started?",
      answer:
        "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
    },
    {
      id: 2,
      question: "How long does it take to complete a project?",
      answer:
        "The timeline varies depending on the project's scope and complexity. We'll provide an estimated timeline after discussing your requirements.",
    },
    {
      id: 3,
      question: "What is your pricing structure?",
      answer:
        "Our pricing is tailored to each project's unique needs. We offer competitive rates and flexible packages to suit your budget.",
    },
    {
      id: 4,
      question: "What kind of customization is availabe?",
      answer:
        "We offer full customization options, including layout changes, color schemes, typography and content sections to align with your brand.",
    },
  ];

  const FaqCard = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div id="faq" className="text-white pt-8 pb-8 rounded-xl bg-neutral-950 border-[0.2px] border-white/20 shadow-md mb-4">
        {/* Question Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold pl-4">{question}</h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl pr-4 focus:outline-none"
          >
            {isOpen ? <RxCross2 /> : <FiPlusCircle />}
          </button>
        </div>
  
        {/* Animated Answer */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-hidden"
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <p className="text-neutral-400 pl-4 mt-4 text-sm md:text-base">{answer}</p>
        </motion.div>
      </div>
    );
  };

  return (
    <div className="w-full bg-black flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="md:w-[50%] px-4 py-8">
        <Starter
          btn1="FAQ"
          title1="Frequently"
          title2="Asked Questions"
          desc="Have questions? Our FAQ section has you covered with quick answers to the most common inquiries."
          isBtn={false}
        />
      </div>

      {/* Right Section */}
      <div className="md:w-[46%] px-4 py-24">
        {faqData.map((faq) => (
          <FaqCard key={faq.id} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
