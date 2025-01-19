import React from 'react';
import { motion } from 'framer-motion';
import ContactHero from '../components/ContactHero';
import ContactForm from '../components/ContactForm';
import Faq from '../components/Faq';

const Contact = () => {
  return (
     <div>
  
        <ContactHero/>
        <ContactForm/>
        {/* <Faq/> */}
     </div>
  );
};

export default Contact;
