import { motion } from "framer-motion";

function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex justify-between items-center px-8 py-4 backdrop-blur-md">
      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-white"
      >
        Animaaya
      </motion.div>
      <motion.ul 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex gap-8 text-lg"
      >
        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#services" className="hover:text-blue-400">Services</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </motion.ul>
    </nav>
  );
}

export default Navbar;

