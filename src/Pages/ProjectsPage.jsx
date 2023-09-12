
import arrow from '../media/arrowup.svg'
import hogwarts from '../media/hogwartsmock.webp'
import cphstays from '../media/cphstays.webp'
import foofest from '../media/foofest-mock.webp'
import portfolio from '../media/portfolio1.webp'


function ProjectsPage() {
  return (
    <>
    <header className='projects-header'>
        <h1>Projects</h1>
        <h2 className="h4-style">UI / UX / Web Development</h2>
    </header>
    <main>
        <section className="projects-grid">
                    <article  className="img-right">
                    <a href="http://reisikk.dk/Hacked_Hogwarts_Student_List/" target='_blank' rel='noreferrer' className='article-right'>
                        <img src={hogwarts} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-left">
                           <h3 className="project-title">Hacked Hogwarts</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a “hacking” function which is triggered by typing out a certain key combination. The motivation for this assignment was to work with array methods and to plan and execute the development of a more complex website. This was an individual project where the goal was to learn all the basics of JavaScript.
                           </p>
                           <div className="tech-stack">
                            <p><span className='condensed'>Tech Stack:</span>  Html | CSS | Vanilla JavaScript</p>
                           </div>
                           <div className="article-links">
                                <a href="http://reisikk.dk/Hacked_Hogwarts_Student_List/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/Hacked_Hogwarts_Student_List" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
                    <article  className="img-left">
                        <a className="article-left" href='https://cphstays-web-exam.vercel.app/' target='_blank' rel='noreferrer'>
                            <img src={cphstays} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-info">
                           <h3 className="project-title">Website for CPHStays</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a functional and interactive website that serves as a platform for users to search and book apartments, while also providing comprehensive information about CPHStays&apos; services and benefits. As I was responsible for the website development it showcases my ability to handle complexity in terms of functionality, design - demonstrating my proficiency as multimedia designer and developer. To display the portfolio of apartments that CPH Stays offers, we used Wordpress as the CMS and it’s REST API and Pods plugin to create a database of apartments. 
                           </p>
                           <div className="tech-stack">
                            <p><span className='condensed'>Tech Stack:</span>  Html | CSS | JavaScript | Wordpress | REST API | React | Next.js</p>
                           </div>
                           <div className="article-links">
                                <a href="https://cphstays-web-exam.vercel.app/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/cphstays-web-exam" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
                    <article  className="img-right">
                        <a className="article-right" href="https://cosmic-twilight-40378f.netlify.app/" target='_blank' rel='noreferrer'>
                        <img src={foofest} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-left">
                           <h3 className="project-title">Festival companion app</h3>
                           <div className="labels-cont">
                            <label className='label'>School project</label>
                           </div>
                           <p className="project-desc">
                           This was an an exam assignment for the 3rd semester Frontend Design elective and the task was to create a booking site and a companion app for a fictional festival. This website is meant to act as a companion app for people with a ticket. The website provides more in-depth information about things like the festival schedule and bands currently playing live. The website is built with React and uses the React Router to navigate between pages. This project was done in a a team of 2 people. Among other tasks, I contributed most to the design of the website and the feature which displays the current band playing live. This was the first bigger project where I worked with React. 
                           </p>
                           <div className="tech-stack">
                            <p><span className='condensed'>Tech Stack:</span>  Html | CSS | React | Sass</p>
                           </div>
                           <div className="article-links">
                                <a href="https://cosmic-twilight-40378f.netlify.app/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/FooFestival-app-v2-Rei" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
                    <article  className="img-left">
                        <a className="article-left" href='https://reisikk.dk/portfolio/' target='_blank' rel='noreferrer'>
                            <img src={portfolio} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-info">
                           <h3 className="project-title">Personal Portfolio website</h3>
                           <div className="labels-cont">
                            <label className='label'>Personal project</label>
                           </div>
                           <p className="project-desc">
                           A project built entirely by me to showcase my skills as a multimedia designer and developer. I used this portfolio website to apply to internship positions in the winter of 2022/23. In this project I used the MotionOne animations library to create the animations and add a bit of flair to the website.
                           </p>
                           <div className="tech-stack">
                            <p><span className='condensed'>Tech Stack:</span>  Html | CSS | JavaScript | MotionOne </p>
                           </div>
                           <div className="article-links">
                                <a href="https://reisikk.dk/portfolio/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/portfolioSite" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </article>
        </section>
    </main>
    </>
  )
}

export default ProjectsPage