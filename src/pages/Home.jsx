import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

function Home() {
  return (
    <div id="home" className="relative w-screen h-screen bg-black overflow-hidden">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls enableZoom={false} />
        <Stars radius={100} depth={50} count={5000} factor={4} fade />
      </Canvas>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-white"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Welcome to Animaaya
        </motion.h1>

        <motion.p 
          className="mt-6 text-lg md:text-2xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Web Hosting | Full Stack Solutions | DevOps Consulting
        </motion.p>

        <motion.a 
          href="#services"
          className="mt-10 px-6 py-3 bg-blue-600 rounded-xl text-white font-semibold hover:bg-blue-800"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Services
        </motion.a>
      </div>
    </div>
  );
}

export default Home;

