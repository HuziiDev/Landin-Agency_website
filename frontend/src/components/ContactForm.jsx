import React,{useRef} from "react";
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from "react-icons/md";
import { IoPinOutline, IoPhonePortraitOutline } from "react-icons/io5";
import {  toast } from 'react-toastify';
const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_pozns9q', 'template_csibt4g', form.current, {
          publicKey: '_yHvvyCmEDpptH9Fx',
        })
        .then(
          () => {
          toast("Message sent")

          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  return (
    
    <div
     id="form"
     className="flex flex-col md:flex-row justify-center items-center bg-black min-h-screen mt-24 gap-y-16 md:gap-x-24">
      {/* Form Section */}
      <form ref={form} onSubmit={sendEmail} className="w-[90%] md:w-[70%] max-w-[800px] bg-neutral-950 border-[0.2px] border-white/20 shadow-lg rounded-xl p-8">
        {/* First Name and Last Name */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-white mb-2"
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="first-name"
              required
              className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your first name"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-white mb-2"
            >
              Last Name
            </label>
            <input
            name="last-name"
              type="text"
              id="lastName"
              className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            required
            id="email"
            name="user-email"
            className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>

        {/* Location and Company Type */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-white mb-2"
            >
              Where are you from?
            </label>
            <input
              type="text"
              id="location"
              className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
              placeholder="Enter your location"
            />
          </div>
          <div className="w-full md:w-[45%]">
            <label
              htmlFor="companyType"
              className="block text-sm font-medium text-white mb-2"
            >
              What type of company?
            </label>
            <select
              id="companyType"
              className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-600"
            >
              <option value="" disabled>
                Select company type
              </option>
              <option value="Startup">Startup</option>
              <option value="Small Business">Small Business</option>
              <option value="Enterprise">Enterprise</option>
              <option value="Non-Profit">Non-Profit</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white mb-2"
          >
            Message
          </label>
          <textarea
          name="message"
            id="message"
            rows="5"
            className="w-full p-3 bg-neutral-800 outline-none rounded-lg focus:ring-2 focus:ring-blue-400"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 sm:px-44 md:px-56 lg:px-80 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Contact Information Section */}
      <div className="w-[90%] md:w-[25%] flex flex-col gap-8">
        {/* Email */}
        <div className="text-white bg-neutral-950 border-[0.2px] border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <MdOutlineEmail size={28} />
            <p className="font-semibold">Email</p>
            <button className="text-sm bg-blue-700 px-3">24/7</button>
          </div>
          <div className="h-[1px] w-full bg-white my-4"></div>
          <p className="text-gray-400 font-semibold">help@Landin.com</p>
        </div>

        {/* Phone */}
        <div className="text-white bg-neutral-950 border-[0.2px] border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <IoPhonePortraitOutline size={28} />
            <p className="font-semibold">Phone</p>
          </div>
          <div className="h-[1px] w-full bg-white my-4"></div>
          <p className="text-gray-400 font-semibold">+91 9109606098</p>
        </div>

        {/* Address */}
        <div className="text-white bg-neutral-950 border-[0.2px] border-white/20 rounded-xl p-6">
          <div className="flex items-center gap-4">
            <IoPinOutline size={28} />
            <p className="font-semibold">Address</p>
            <button className="text-sm bg-blue-700 px-3">24/7</button>
          </div>
          <div className="h-[1px] w-full bg-white my-4"></div>
          <p className="text-gray-400 font-semibold">
            California [CA], 90011
            <br />
            49th St. Los Angeles
            <br />
            United States
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
