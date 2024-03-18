import { React, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import arrow from '../media/arrowup.svg'
import { useTranslation } from "react-i18next";

function ProjectCard({projectTitle, projectLabel, uniqueId, projectDescription, projectUrl, projectGithub, projectTechStack, cssClass}) {
  const [projImg, setProjImg] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);

  const {t} = useTranslation();
  const { labelPersonal, labelSchool, liveDemo, projectEha, ehaDescription, projectTravelDest, travelDestDescription, projectComwell, comwellDescription, projectHogwarts, hogwartsDescription, projectCphStays, cphStaysDescription, projectFoofest, foofestDescription } = t("projectsPage");

  // Translate the project label
  const labelTranslations = {
    "Personal project": labelPersonal,
    "School project": labelSchool
  };
  
  const titleTranslations = {
    "Landing page for Eha": { title: projectEha, description: ehaDescription },
    "Travel Destinations": { title: projectTravelDest, description: travelDestDescription },
    "Comwell hotels": { title: projectComwell, description: comwellDescription },
    "Hogwarts admin site": { title: projectHogwarts, description: hogwartsDescription },
    "Website for CPHStays": { title: projectCphStays, description: cphStaysDescription },
    "Festival companion app": { title: projectFoofest, description: foofestDescription }

  };
  
  projectLabel = labelTranslations[projectLabel] || projectLabel;
  const titleTranslation = titleTranslations[projectTitle];
  
  if (titleTranslation) {
    projectTitle = titleTranslation.title || projectTitle;
    projectDescription = titleTranslation.description || projectDescription;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
       const response = await fetch(`https://reisikk.dk/portfolio-wp/wp-json/wp/v2/media?parent=${uniqueId}`)
        const jsonData = await response.json();
  
        // Extract the array of images and their source URLs
        const images = jsonData.map(image => image.source_url);
  
        // Update the state with the fetched image URLs
        setProjImg(images);
        setImageUrls(images);
      } catch (error) {
        console.error('Error fetching image data:', error);
      }
    };
  
    fetchData();
  }, [setImageUrls, uniqueId]);

  let techStack = projectTechStack.split(",");
  return (
    <>
      <motion.article
                      className={cssClass}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true, amount: 0.175 }}
                      >
                    <a href={projectUrl} target='_blank' rel='noreferrer' className='article-right'>
                        <img src={projImg} alt="mockup of the browser result" id='project_img' />
                        </a>
                        <div className="article-left">
                           <h3 className="project-title">{projectTitle}</h3>
                           <div id="labels-cont">
                            <div>
                            <label className='label'>{projectLabel}</label>
                            </div>
                            <div id="tech-stack">
                             <div id="tech-labels">
                              {techStack.map((tech) => {
                                return (
                                <label className='tech-label'>{tech}</label>
                                )
                              })}
                             </div>
                           </div>
                           </div>
                           <p className="project-desc">
                           {projectDescription}
                           </p>
                         {/*   <div className="article-links">
                                <a href={projectUrl} target='_blank' rel='noreferrer'>Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                                <a href={projectGithub} target='_blank' rel='noreferrer'>Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span></a>
                           </div> */}
                           <div className="article-links">
                             {projectUrl && (
                               <a href={projectUrl} target='_blank' rel='noreferrer'>
                                 Live project<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span>
                               </a>
                             )}
                             <a href={projectGithub} target='_blank' rel='noreferrer'>
                               Github<span><img src={arrow} alt="arrow for link element" className='arrow-up' /></span>
                             </a>
                           </div>
                        </div>
     </motion.article>
    </>
  )
}

export default ProjectCard