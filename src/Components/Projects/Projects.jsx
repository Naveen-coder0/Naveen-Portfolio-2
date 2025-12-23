import React from 'react'
import './Projects.css'
import Project1 from '../../assets/project1.jpg'
import Project2 from '../../assets/project2.jpg'
import Project3 from '../../assets/project3.jpg'
import { FaArrowRight } from "react-icons/fa";

const projectData = [
  {
    id: 1,
    title: "Smart Financial Dashboard",
    description:
      "A modern, user-friendly dashboard for tracking income, expenses, analytics, and card details with quick transfer and activity summaries.",
    image: Project1,
    tech: ['React JS', 'MUI', 'Chart']
  },
  {
    id: 2,
    title: "E-Commerce Web App",
    description:
      "A responsive e-commerce platform with product listings, cart functionality, and smooth checkout experience.",
    image: Project2,
    tech: ['React JS', 'Redux', 'Stripe']
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio showcasing projects, skills, and experience with clean UI and smooth animations.",
    image: Project3,
    tech: ['React JS', 'Framer Motion', 'CSS']
  }
]

const Projects = () => {
  return (
    <section>
      <div className="wrapper p-block-9">

        {/* HEADER */}
        <div className="flex between gap-4">
          <div>
            <span className="sub-text">My Portfolio</span>
            <h2>
              Let&apos;s have a look <br />
              at <span className="text-green">My Portfolio</span>
            </h2>
          </div>

          <a href="#" className="btn">View All Projects</a>
        </div>


        <div className="flex column gap-2 mt-5">
          {projectData.map(project => (
            <div className="card flex gap-5 project" key={project.id}>


              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>


              <div className="project-content">

                <div
                  className="flex gap-1"
                  style={{ marginTop: '-2rem' }}   // 👈 move up (adjust value)
                >
                  <a href="#" className="btn">{project.tech[0]}</a>
                  <a href="#" className="btn">{project.tech[1]}</a>
                  <a href="#" className="btn">{project.tech[2]}</a>
                </div>

                <h3>{project.title}</h3>

                <p className="para">{project.description}</p>

                <a href="#" className="icon-container border-inverse rotate">
                  <FaArrowRight />
                </a>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
