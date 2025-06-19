import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './sections/AboutSection'
import Services from './sections/ServicesSection'
import Contact from './sections/ContactSection'
import TechStackCarousel from "./components/TechStackCarousel"
import WhyChooseUsSection from './sections/WhyChooseUsSection'

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Canvas className="fixed top-0 left-0 z-0">
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
      </Canvas>

      <div className="relative z-10">
        <Navbar />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
	  <WhyChooseUsSection />
	  <TechStackCarousel />
          <section id="contact"><Contact /></section>
        </motion.div>
      </div>
    </div>
  )
}

