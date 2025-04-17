import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import contactImg from './5124556.jpg';
import { MdMail } from "react-icons/md";

import SharePortfolio from "./SharePortfolio";
import Socials from "./Socials";

const Contact = () => {
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(!!value);
  };

 

  
  return (
    <section className="max-w-full mx-auto px-4 py-16 text-white bg-gray-900 overflow-x-hidden" id="Contact">
      <motion.h2
        className="lg:text-4xl text-3xl font-bold text-center  mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <motion.p
        className="text-center text-gray-500 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Have a question, project idea, or just want to say hi? I’d love to hear from you.
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-10 bg-gray-900">

{/* Image */}
<motion.div
  className="w-full md:w-1/2 flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <img src={contactImg} alt="Contact" className="w-[80%] md:w-[70%] rounded-xl shadow-lg" />
</motion.div>

{/* Form */}
<motion.form
  action="https://formsubmit.co/developervivek.dev@gmail.com"
  method="POST"

 onSubmit={(e) => {
    if (!captchaVerified) {
      e.preventDefault();
      alert("Please verify you're human.");
    }
  }}
  className="w-full md:w-1/2 space-y-6 p-6 rounded-2xl shadow-md bg-gray-800"
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6 }}
>
  <div>
    <label className="block mb-1 text-sm font-medium text-white">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full px-4 py-2 border rounded-md focus:outline-none text-sm focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
    />
  </div>
  <div>
    <label className="block mb-1 font-medium text-white text-sm">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full px-4 py-2 border rounded-md focus:outline-none text-sm focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
    />
  </div>
  <div>
    <label className="block mb-1 font-medium text-white text-sm">Subject</label>
    <input
      type="text"
      name="subject"
      required
      className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
    />
  </div>
  <div>
    <label className="block mb-1 font-medium text-sm text-white">Message</label>
    <textarea
      name="message"
      rows="4"
      required
      className="w-full px-4 py-2 border rounded-md focus:outline-none text-sm focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white"
    ></textarea>
  </div>

  {/* CAPTCHA */}
  <div className="pt-2 "
  style={{ transform: "scale(0.85)", transformOrigin: "0 0" }}>
    <ReCAPTCHA 
      size="normal"
      sitekey="6LcNFQwrAAAAAMUNd5spxUXCjDOblQB788t59779"
      onChange={handleCaptchaChange}
    />
  </div>

  <p className="text-[10px] text-gray-400 mt-2">
    🔒 Your information is safe with me.
  </p>

  <motion.button
    type="submit"
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.95 }}
    className="w-full text-[12px] bg-blue-600 text-white py-2 rounded-md font-semibold transition duration-300 hover:bg-blue-700 mt-4"
  >
   Send Message
  </motion.button>
</motion.form>
</div>
    </section>
  );
};

export default Contact;