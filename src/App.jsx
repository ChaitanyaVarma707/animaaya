import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import ContactSection from "./sections/ContactSection";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default App;

