import { motion } from "framer-motion";
import { FaLaptopCode, FaMobileAlt, FaLayerGroup, FaPalette, FaRedoAlt, FaRocket, FaDatabase, FaUserCircle, FaMagic } from "react-icons/fa";

const services = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-3xl text-blue-600" />,
    desc: "Responsive and high-performance interfaces using React.js, TailwindCSS, and modern JavaScript.",
  },
  {
    title: "Mobile-Responsive Design",
    icon: <FaMobileAlt className="text-3xl text-green-500" />,
    desc: "Designs that look and work perfectly across all devices and screen sizes.",
  },
  {
    title: "Single Page Applications",
    icon: <FaLayerGroup className="text-3xl text-purple-500" />,
    desc: "Fast, dynamic SPAs with React Router and optimized component structure.",
  },
  {
    title: "UI/UX Design to Code",
    icon: <FaPalette className="text-3xl text-pink-500" />,
    desc: "Pixel-perfect frontend from Figma, Adobe XD, or Sketch design files.",
  },
  {
    title: "Website Redesign",
    icon: <FaRedoAlt className="text-3xl text-yellow-500" />,
    desc: "Modernizing outdated websites with better performance and aesthetics.",
  },
  {
    title: "Custom Landing Pages",
    icon: <FaRocket className="text-3xl text-red-500" />,
    desc: "Product and marketing landing pages focused on conversion and UX.",
  },
  {
    title: "Backend Integration (Learning)",
    icon: <FaDatabase className="text-3xl text-indigo-600" />,
    desc: "Basic backend integration using Node.js and Express.",
  },
  {
    title: "Portfolio & Resume Sites",
    icon: <FaUserCircle className="text-3xl text-teal-500" />,
    desc: "Sleek, fast, and professional personal websites.",
  },
  {
    title: "Micro-Animations",
    icon: <FaMagic className="text-3xl text-fuchsia-500" />,
    desc: "Engaging user experiences with Framer Motion & smooth animations.",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 w-ull mx-auto bg-gray-900 text-white" id="Services">
      <div className="text-center mb-12">
        <h2 className="lg:text-4xl text-3xl font-bold   mb-4">Services</h2>
        <p className="text-gray-500">What I can do for you based on my skills</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl s transition-shadow duration-300"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.desc}</p>
          </motion.div>
        ))}
      </div>
       
      <div className="flex justify-center mt-10">
    <motion.a
      href="#Contact"
      whileHover={{ scale: 1.05, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300 text-sm"
    >
      Hire Me
    </motion.a>
  </div>
    </section>
  );
};

export default Services;