// src/components/TechStackCarousel.jsx
import Marquee from "react-fast-marquee";
import {
  SiAmazonaws,
  SiGooglecloud,
  SiAzuredevops,
  SiDocker,
  SiGithub,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
} from "react-icons/si";

const techIcons = [
  SiAmazonaws,
  SiGooglecloud,
  SiAzuredevops,
  SiDocker,
  SiGithub,
  SiJenkins,
  SiKubernetes,
  SiTerraform,
  SiPostgresql,
  SiReact,
  SiNodedotjs,
];

const TechStackCarousel = () => (
  <section className="bg-[#0a0a0a] py-12 border-t border-white/10">
    <h3 className="text-center text-xl text-gray-400 font-semibold mb-6">
      🔧 Technologies We Work With
    </h3>
    <Marquee gradient={false} speed={40} pauseOnHover>
      <div className="flex gap-14 items-center text-5xl text-cyan-400">
        {techIcons.map((Icon, index) => (
          <Icon key={index} className="hover:text-blue-400 transition duration-300" />
        ))}
      </div>
    </Marquee>
  </section>
);

export default TechStackCarousel;

