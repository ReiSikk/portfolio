
import arrow from '../media/arrowup.svg'
import hogwarts from '../media/hogwartsmock.webp'
import cphstays from '../media/cphstays.webp'
import foofest from '../media/foofest-mock.webp'
import portfolio from '../media/portfolio1.webp'
import { motion } from "framer-motion"
import { useEffect, useState } from "react";
import ProjectCard from '../Components/ProjectCard'



function ProjectsPage() {

  const [projects, setProjects] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://reisikk.dk/portfolio-wp/wp-json/wp/v2/project?_embed?media');
        const jsonData = await response.json();
        setProjects(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


console.log(projects, "projects data");






  return (
    <>
    <header className='projects-header'>
        <h1>Projects</h1>
        <h2 className="h4-style">UI / UX / Web Development</h2>
    </header>
    <main>
        <section className="projects-grid">
          {projects &&
           (projects.map((project, index) => {
            console.log(project, "project objects");
            return (

                <ProjectCard 
                  key={project.id}
                  uniqueId={project.id}
                  project={project}
                  projectTitle={project.title.rendered}
                  projectLabel={project.project_label} 
                  projectDescription={project.project_description}
                  projectUrl={project.live_demo}
                  projectGithub={project.github_repo}
                  projectTechStack={project.tech_stack}
                  cssClass={index % 2 === 0 ? "img-right" : "img-left"}
               imgData={project.project_img.guid}
                />
            );
          }))}
        </section>
    </main>
    </>
  )
}

export default ProjectsPage