import { useState, useEffect } from "react";
// import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

import "./portfolio.css";

const Portfolio = () => {
  const [showCV, setShowCV] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const projects = [
    {
      name: "CRUD Appliacation",
      github: "https://github.com/Samruddhi1607/CRUD-Application",
      image: "/images/emporifyx.png", // Add the image path
      description: "Here's a basic CRUD (Create, Read, Update, Delete) application for tracking employee work."
    },
    {
      name: "Online Book Shop",
      github: "https://github.com/Samruddhi1607/Add-To-Cart",
      image: "/images/veggies.png", // Add the image path
      description: "The Online Book Shop is a simple web-based application that allows users to browse books, view prices and add books to a cart for purchase. user-friendly experience.."} ,
      {
        name: "Genrating Quotes",
        github: "https://github.com/Samruddhi1607/GenratingQuotes",
        image: "/images/emporifyx.png", // Add the image path
        description: "It displays inspirational and motivational quotes, changing dynamically when clicking buttons.."
      },
      {
        name: "Online Delivery Site",
        github: "https://github.com/Samruddhi1607/GenratingQuotes",
        image: "/images/emporifyx.png", // Add the image path
        description: "It displays inspirational and motivational quotes, changing dynamically when clicking buttons.."
      },
  ];
  

  return (
    <div>
      <nav className="navbar">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <section className="hero">
        <motion.img
          src="Samruddhi.jpg"
          alt="Profile"
          className="profile-pic"
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
        />
        <h1>Samruddhi Amravatkar</h1>
        <motion.div className="typing-effect">Frontend Developer | Web Developer</motion.div>
        <p className="hero-text">Passionate about crafting beautiful and responsive web applications. I love turning ideas into reality through code.</p>
      </section>
      
      <section id="about" className="about">
      <h2>About Me</h2>
      <p className="about-text">
    I am a passionate Front-End Developer who loves creating beautiful, interactive, 
    and user-friendly web applications. I enjoy turning ideas into reality with clean and efficient code.
    My goal is to build seamless digital experiences that not only look great but also function flawlessly.
  </p>
        <button onClick={() => setActiveSection("education")}>Education</button>
        <button onClick={() => setActiveSection("skills")}>Skills</button>
        {activeSection === "education" && (
          <p className="education-details">
            Diploma in Computer Engineering (2020) <br />
            BE in Computer Science & Engineering (2023)
          </p>
        )}{activeSection === "skills" && (
          <div className="skills-section">
              <p className="about-text">
        I have honed my skills in various front-end technologies, including React, JavaScript, 
        HTML, CSS, and Bootstrap. My expertise in these technologies allows me to build 
        visually appealing and high-performance websites.
      </p>
            <div className="skill">
              <p>React</p>
              <div className="progress-bar"><div className="progress" style={{ width: "65%" }}></div></div>
            </div>
            <div className="skill">
              <p>JavaScript</p>
              <div className="progress-bar"><div className="progress" style={{ width: "70%" }}></div></div>
            </div>
            <div className="skill">
              <p>HTML</p>
              <div className="progress-bar"><div className="progress" style={{ width: "95%" }}></div></div>
            </div>
            <div className="skill">
              <p>CSS</p>
              <div className="progress-bar"><div className="progress" style={{ width: "90%" }}></div></div>
            </div>
            <div className="skill">
              <p>Bootstrap</p>
              <div className="progress-bar"><div className="progress" style={{ width: "75%" }}></div></div>
            </div>
          </div>
        )}
         {activeSection === "skills" && <p className="skills-section">React, JavaScript, HTML, CSS, Bootstrap</p>}
      </section>
      
      <section id="projects" className="projects">
  <h2>Projects</h2>
  <p className="projects-intro">
    I am passionate about continuously learning and improving my front-end development skills. 
    I work on various self-practiced projects to apply my knowledge and enhance my expertise 
    in React, JavaScript, and UI design.
  </p>
  
  <button onClick={() => setShowProjects(!showProjects)}>Show Projects</button>

  <div className="project-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-img-container">
            <img src={project.image} alt={project.name} className="project-img" />
            <div className="project-overlay">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={"https://github.com/Samruddhi1607?tab=repositories"} target="_blank" rel="noopener noreferrer">GitHub Link</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  

  <div className="cv-container">
    <a href="/path-to-your-resume.pdf" download="Samruddhi_Amravatkar_Resume.pdf">
      <button className="cv-button">Download CV</button>
    </a>
  </div>
</section>



      
      <section id="contact" className="contact">
        <h2>Contact</h2>
        <p>Email: samruddhiamravatkar16@gmail.com</p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/samruddhi-amravatkar-304918268/" target="_blank">Profile</a></p>
        <p>GitHub: <a href="https://github.com/Samruddhi1607?tab=repositories" target="_blank">Profile</a></p>
      </section>
    </div>
  );
}

export default Portfolio;