// src/sections/AboutSection.jsx
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <section id="about" className="min-h-screen px-6 md:px-20 py-24 bg-[#0f0f0f] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Animaaya</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          At <span className="font-semibold text-white">Animaaya</span>, we help businesses thrive by delivering next-generation
          <span className="text-blue-400"> Web Hosting</span>, cutting-edge <span className="text-blue-400">Full Stack Development</span>,
          and scalable <span className="text-blue-400">DevOps solutions</span>. Our mission is to blend automation, performance, and reliability
          to empower startups and enterprises across the globe.
        </p>

        <p className="mt-6 text-gray-400">
          We're not just a service provider — we’re your technology partner. From infrastructure to code, from pipelines to production,
          we bring your digital vision to life with creativity, scalability, and performance in mind.
        </p>
      </motion.div>
    </section>
  );
}

export default AboutSection;

