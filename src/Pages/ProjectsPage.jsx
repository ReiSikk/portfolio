
import jsonData from '../projects.json'

function ProjectsPage() {
  return (
    <>
    <header>
        <h1>Projects</h1>
        <h2 className="h4-style">UI / UX / Web Development</h2>
    </header>
    <main>
        <section className="projects-grid">
            {jsonData.map(project => {
                return (
                    <article key={project.id} className={project.name}>
                        <div className="article-top">
                            <img src={project.image} alt={project.name} />
                        </div>
                        <div className="article-bottom">
                           <h3 className="project-title">{project.name}</h3>
                           <div className="labels">

                           </div>
                           <div className="tech-stack">
                            
                           </div>
                           <p className="project-desc">{project.description}</p>
                        </div>
                    </article>
                )
            })}
        </section>
    </main>
    </>
  )
}

export default ProjectsPage