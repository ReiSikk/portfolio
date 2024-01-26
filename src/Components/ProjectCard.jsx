import { React, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import arrow from '../media/arrowup.svg'
import hogwarts from '../media/hogwartsmock.webp'
import cphstays from '../media/cphstays.webp'
import foofest from '../media/foofest-mock.webp'
import portfolio from '../media/portfolio1.webp'

function ProjectCard({projectTitle, projectLabel, uniqueId, projectDescription, projectUrl, projectGithub}) {
  const [projImg, setProjImg] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await fetch(`https://reisikk.dk/portfolio-wp/wp-json/wp/v2/media?parent=${key}`)
        const jsonData = await response.json();
  
        // Extract the array of images and their source URLs
        const images = jsonData.map(image => image.source_url);

  
        // Update the state with the fetched image URLs
        setProjImg(images);
        setImageUrls(images);
        /* searchParams.set('images', imagesString); */
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
  
    fetchData();
  }, [setImageUrls, uniqueId]);
  return (
    <>
      <motion.article
                      className="img-right"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.8 }}
                      >
                    <a href="http://reisikk.dk/Hacked_Hogwarts_Student_List/" target='_blank' rel='noreferrer' className='article-right'>
                        <img src={hogwarts} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-left">
                           <h3 className="project-title">{projectTitle}</h3>
                           <div id="labels-cont">
                            <div>
                            <label className='label'>School project</label>
                            </div>
                            <div id="tech-stack">
                             <div id="tech-labels">
                                <label className='tech-label'>Html</label>
                                <label className='tech-label'>CSS</label>
                                <label className='tech-label'>Vanilla JS</label>
                             </div>
                           </div>
                           </div>
                           <p className="project-desc">
                           This project was all about JavaScript where looks were not of the most importance. The task was to create an admin page for Hogwarts where it is possible to search, filter, sort and add students to certain lists. An extra feature we had to implement was a “hacking” function which is triggered by typing out a certain key combination. The motivation for this assignment was to work with array methods and to plan and execute the development of a more complex website. This was an individual project where the goal was to learn all the basics of JavaScript.
                           </p>
                           <div className="article-links">
                                <a href="http://reisikk.dk/Hacked_Hogwarts_Student_List/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/Hacked_Hogwarts_Student_List" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </motion.article>
                    <motion.article  
                    className="img-left"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}>
                        <a className="article-left" href='https://cphstays-web-exam.vercel.app/' target='_blank' rel='noreferrer'>
                            <img src={cphstays} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-info">
                           <h3 className="project-title">Website for CPHStays</h3>
                           <div id="labels-cont">
                            <div>
                            <label className='label'>School project</label>
                            </div>
                            <div id="tech-stack">
                             <div id="tech-labels">
                                <label className='tech-label'>CSS</label>
                                <label className='tech-label'>Vanilla JS</label>
                                <label className='tech-label'>WordPress</label>
                                <label className='tech-label'>REST API</label>
                                <label className='tech-label'>React</label>
                                <label className='tech-label'>Next.js</label>
                             </div>
                           </div>
                           </div>
                           <p className="project-desc">
                           A 4th semester final exam project in collaboration with CPHStays, which is a newly established branch of ManageMyAir, a rental property management company in Copenhagen. The proposed solution, done in collaboration with a fellow student, is a functional and interactive website that serves as a platform for users to search and book apartments, while also providing comprehensive information about CPHStays&apos; services and benefits. As I was responsible for the website development it showcases my ability to handle complexity in terms of functionality, design - demonstrating my proficiency as multimedia designer and developer. To display the portfolio of apartments that CPH Stays offers, we used Wordpress as the CMS and it’s REST API and Pods plugin to create a database of apartments. 
                           </p>
                           <div className="article-links">
                                <a href="https://cphstays-web-exam.vercel.app/" target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href="https://github.com/ReiSikk/cphstays-web-exam" target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div>
                        </div>
                    </motion.article>
    <h1>{projectTitle}</h1>
    <h2>{projectLabel}</h2>
    <a href={projectGithub}>Github repo</a>
    </>
  )
}

export default ProjectCard