import { motion } from "framer-motion";
import aboutImg from './about.jpg'

const About = () => {
  return (
    <section
      id="About"
      className="bg-yellow-500 min-h-screen flex items-center justify-center p-8"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white rounded-2xl shadow-2xl grid md:grid-cols-2 gap-8 p-10 max-w-6xl w-full"
      >
        {/* Text Content */}
        <div className="flex flex-col justify-center order-1">
          <h2 className="lg:text-4xl text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
            I'm a creative and detail-oriented Frontend developer who loves transforming complex problems into elegant digital solutions. On the frontend, I craft sleek and interactive interfaces using <strong>React</strong>, <strong>TailwindCSS</strong>, and <strong>Framer Motion</strong>. On the backend, I'm diving into <strong>Node.js</strong> to build robust, scalable systems. I'm constantly learning, iterating, and building — whether it’s a client project, a personal experiment, or contributing to open-source.
          </p>
          <p className="lg:text-lg text-sm text-gray-600 leading-relaxed mt-4">
            I believe in shipping fast, clean, and delightful user experiences. My current focus is mastering full-stack projects and collaborating on real-world products that make an impact.
          </p>
        </div>

        {/* Image or Graphic */}
        <div className="flex items-center justify-center">
          <motion.img
            src={aboutImg}
            alt="About Illustration"
            className="rounded-xl shadow-md w-full max-w-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
