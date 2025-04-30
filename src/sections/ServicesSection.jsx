// src/sections/ServicesSection.jsx
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Hosting",
    description: "Secure, fast, and scalable cloud hosting with 99.99% uptime.",
  },
  {
    title: "Full Stack Development",
    description: "From backend APIs to frontend UI/UX — we build complete apps.",
  },
  {
    title: "DevOps Consulting",
    description: "CI/CD, infrastructure automation, observability, and scaling.",
  },
];

function ServicesSection() {
  return (
    <section id="services" className="min-h-screen bg-[#111] px-6 md:px-20 py-24 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Our Services</h2>
        <p className="text-gray-400 mt-2">We build, host, and scale modern cloud-native platforms.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-[#1e1e1e] rounded-xl p-6 shadow-lg hover:shadow-blue-500/30 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-400 mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;

