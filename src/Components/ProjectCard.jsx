import React from 'react'

function ProjectCard({projectTitle, projectLabel}) {
  return (
    <>
    <h1>{projectTitle}</h1>
    <h2>{projectLabel}</h2>
    </>
  )
}

export default ProjectCard