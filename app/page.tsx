"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaHome, FaUser, FaProjectDiagram, FaCogs, FaBriefcase, FaEnvelope, 
  FaLinkedin, FaGithub, FaTwitter 
} from "react-icons/fa";

// Wrapper untuk animasi scroll-in
const SectionWrapper = ({ id, children }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 50 }} // Muncul dari bawah
    whileInView={{ opacity: 1, y: 0 }} // Efek fade-in + slide-up
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="p-16 min-h-screen flex flex-col justify-center"
  >
    {children}
  </motion.section>
);

import { 
  FaShieldAlt, FaBug, FaLock, FaPython, FaNetworkWired, FaUserSecret 
} from "react-icons/fa";

const skills = [
  { name: "Penetration Testing", icon: FaShieldAlt },
  { name: "Web Security", icon: FaLock },
  { name: "Ethical Hacking", icon: FaUserSecret },
  { name: "Python for Security", icon: FaPython },
  { name: "Network Security", icon: FaNetworkWired },
  { name: "Bug Bounty", icon: FaBug }
];

import { 
  FaUserShield, FaSearch, FaFlag 
} from "react-icons/fa";

const projects = [
  { name: "Penetration Testing on LMS", icon: FaUserShield },
  { name: "Security Research on APIs", icon: FaSearch },
  { name: "Red Team Simulation", icon: FaFlag }
];
import { 
  FaLaptopCode 
} from "react-icons/fa";

const experiences = [
  { role: "Penetration Tester", company: "XYZ Security", icon: FaUserSecret },
  { role: "Bug Bounty Hunter", company: "HackerOne", icon: FaBug },
  { role: "CTF Competitor", company: "TryHackMe", icon: FaLaptopCode }
];

export default function Home() {
  const [navbarBg, setNavbarBg] = useState("bg-transparent");

  // Fungsi untuk mengubah background navbar saat scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavbarBg("bg-black shadow-lg");
      } else {
        setNavbarBg("bg-transparent");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi smooth scrolling
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      {/* Navbar */}
      <nav className={`fixed top-0 w-full text-white py-4 px-6 flex justify-center gap-6 transition-all duration-300 z-50 ${navbarBg}`}>
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2"><FaHome /> Home</button>
        <button onClick={() => scrollToSection("about")} className="flex items-center gap-2"><FaUser /> About</button>
        <button onClick={() => scrollToSection("projects")} className="flex items-center gap-2"><FaProjectDiagram /> Projects</button>
        <button onClick={() => scrollToSection("skills")} className="flex items-center gap-2"><FaCogs /> Skills</button>
        <button onClick={() => scrollToSection("experience")} className="flex items-center gap-2"><FaBriefcase /> Experience</button>
        <button onClick={() => scrollToSection("contact")} className="flex items-center gap-2"><FaEnvelope /> Contact</button>
      </nav>

      {/* Home */}
      <SectionWrapper id="home">
        <div className="flex flex-col items-center text-center">
          <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2, ease: "easeInOut" }}>
            <Image src="/profile.jpg" width={150} height={150} className="rounded-full cursor-pointer" alt="Profile" />
          </motion.div>
          <h1 className="text-4xl font-bold mt-4">Cyber Security Enthusiast</h1>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="text-lg mt-2">
            Passionate about penetration testing, ethical hacking, and security research.
          </motion.p>
        </div>
      </SectionWrapper>

      {/* About */}
      <SectionWrapper id="about">
        <h2 className="text-3xl font-bold text-center">About Me</h2>
        <motion.p initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="mt-4 text-center">
          I am a cybersecurity enthusiast specializing in penetration testing and ethical hacking.
          I enjoy finding security flaws in web applications and networks to improve digital security.
        </motion.p>
      </SectionWrapper>

      /* Projects */
<SectionWrapper id="projects">
  <h2 className="text-3xl font-bold text-center">Projects</h2>
  <div className="mt-6 space-y-4 text-center">
    {projects.map(({ name, icon: Icon }, index) => (
      <motion.div 
        key={index} 
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.2, ease: "easeInOut" }} 
        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center cursor-pointer"
      >
        <Icon size={30} className="mb-2" />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p>Security assessments and vulnerability identification in real-world applications.</p>
      </motion.div>
    ))}
  </div>
</SectionWrapper>


      /* Skills */
<SectionWrapper id="skills">
  <h2 className="text-3xl font-bold text-center">Skills</h2>
  <motion.ul className="mt-6 grid grid-cols-2 gap-4 text-center">
    {skills.map(({ name, icon: Icon }, index) => (
      <motion.li 
        key={index} 
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.2, ease: "easeInOut" }} 
        className="bg-gray-800 p-4 rounded-md flex items-center justify-center gap-2 cursor-pointer"
      >
        <Icon size={24} /> {name}
      </motion.li>
    ))}
  </motion.ul>
</SectionWrapper>

/* Experience */
<SectionWrapper id="experience">
  <h2 className="text-3xl font-bold text-center">Experience</h2>
  <div className="mt-6 space-y-4 text-center">
    {experiences.map(({ role, company, icon: Icon }, index) => (
      <motion.div 
        key={index} 
        whileHover={{ scale: 1.1 }} 
        transition={{ duration: 0.2, ease: "easeInOut" }} 
        className="bg-gray-800 p-6 rounded-lg flex flex-col items-center cursor-pointer"
      >
        <Icon size={30} className="mb-2" />
        <h3 className="text-xl font-semibold">{role} - {company}</h3>
        <p>Security assessments and vulnerability research.</p>
      </motion.div>
    ))}
  </div>
</SectionWrapper>

      {/* Contact */}
      <SectionWrapper id="contact">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <p className="mt-4 text-center">Feel free to reach out via social media:</p>
        <motion.div className="flex justify-center gap-4 mt-4">
          {[FaLinkedin, FaGithub, FaTwitter].map((Icon, index) => (
            <motion.a key={index} whileHover={{ scale: 1.2 }} transition={{ duration: 0.2, ease: "easeInOut" }} href="#" target="_blank" className="cursor-pointer">
              <Icon size={30} />
            </motion.a>
          ))}
        </motion.div>
      </SectionWrapper>
    </div>
  );
}
