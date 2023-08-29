
import arrow from '../media/arrowup.svg'
import hogwartsvideo from '../media/hogwarts.mp4'
import cphstays from '../media/cphstays.webp'


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
                          <video
                           loop
                           src={hogwartsvideo}
                           autoPlay
                           muted
                           alt="screenrecording of hacked hogwarts project website in action"
                           id="project_vid"
                          ></video>
                        </div>
                        <div className="article-left">
                           <h3 className="project-title">Hacked Hogwarts</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a “hacking” function which is triggered by typing out a certain key combination. The motivation for this assignment was to work with array methods and to plan and execute the development of a more complex website. This was an individual project where the goal was to learn all the basics of JavaScript.
                           </p>
                           <div className="tech-stack">
                            <p><span className='h5-style'>Tech Stack:</span>  Html | CSS | Vanilla JavaScript</p>
                           </div>
                           <div className="article-links">
                                <a href="http://reisikk.dk/Hacked_Hogwarts_Student_List/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/Hacked_Hogwarts_Student_List" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
                    <article  className="img-left">
                        <div className="article-left">
                            <img src={cphstays} alt="mockup of the browser result" id='project_img' />
                        </div>
                        <div className="article-info">
                           <h3 className="project-title">Website for CPHStays</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a functional and interactive website that serves as a platform for users to search and book apartments, while also providing comprehensive information about CPHStays&apos; services and benefits. The website showcases my ability to handle complexity in terms of functionality, design - demonstrating my proficiency as multimedia designer and developer. To display the portfolio of apartments that CPH Stays offers, we used Wordpress as the CMS and it’s REST API and Pods plugin to create a database of apartments. 
                           </p>
                           <div className="tech-stack">
                            <p><span className='h5-style'>Tech Stack:</span>  Html | CSS | JavaScript | Wordpress | REST API | React | Next.js</p>
                           </div>
                           <div className="article-links">
                                <a href="https://cphstays-web-exam.vercel.app/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/cphstays-web-exam" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
        </section>
    </main>
    </>
  )
}

export default ProjectsPage