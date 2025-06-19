// src/pages/Home.jsx
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center bg-black text-white px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text"
      >
        Empowering Digital Innovation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl max-w-3xl text-gray-300"
      >
        Full-stack solutions that scale — from blazing-fast web hosting to high-availability DevOps pipelines.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <a
          href="#contact"
          className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition duration-300"
        >
          Let's Build Together
        </a>
      </motion.div>
    </section>
  );
};

export default Home;

