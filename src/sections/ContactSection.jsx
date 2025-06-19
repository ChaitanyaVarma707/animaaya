// src/sections/ContactSection.jsx
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#0f0f0f] text-white px-6 md:px-20 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">📬 Let’s Connect</h2>
        <p className="text-gray-300 mb-8">
          Want to bring your digital vision to life? Have a project in mind? Reach out and let’s build something amazing together.
        </p>

        <form className="flex flex-col gap-4 text-left">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 rounded bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 rounded bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="p-4 rounded bg-white/5 backdrop-blur-sm text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 px-6 py-3 rounded text-white font-semibold transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactSection;

