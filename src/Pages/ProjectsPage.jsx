import placeholder from '../media/placeholder.png'
import arrow from '../media/arrowup.svg'


function ProjectsPage() {
  return (
    <>
    <header>
        <h1>Projects</h1>
        <h2 className="h4-style">UI / UX / Web Development</h2>
    </header>
    <main>
        <section className="projects-grid">
                    <article  className="img-right">
                        <div className="article-right">
                            <img src={placeholder} alt="" />
                        </div>
                        <div className="article-left">
                           <h3 className="project-title">Project title</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           Re-designing and re-creating the Silfen Studios website
                           to better highlight the company’s CSR efforts and to make their website better overall. 
                           </p>
                           <div className="tech-stack">
                            Tech stack here
                           </div>
                           <div className="article-links">
                                <a href="">Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="">Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
                    <article  className="img-left">
                        <div className="article-left">
                            <img src={placeholder} alt="" />
                        </div>
                        <div className="article-info">
                           <h3 className="project-title">Project title</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           Re-designing and re-creating the Silfen Studios website
                           to better highlight the company’s CSR efforts and to make their website better overall. 
                           </p>
                           <div className="tech-stack">
                            Tech stack here
                           </div>
                           <div className="article-links">
                                <a href="">Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="">Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
        </section>
    </main>
    </>
  )
}

export default ProjectsPage