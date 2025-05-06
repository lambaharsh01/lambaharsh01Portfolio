"use client"

import { useState, useEffect } from "react";

import priority1 from "@/data/json/projects/priority1.json" 
import priority2 from "@/data/json/projects/priority2.json"

import ProjectCard from "./ProjectCard";

import { ProjectDataInterface } from "@/types/Project";
import { arrayShuffle } from "@/utils/shuffle";


const ProjectSection: React.FC = () => {

    const [projects, setProjects]= useState<ProjectDataInterface[]>([])

    useEffect(()=>{
        setProjects(arrayShuffle(priority1).concat(arrayShuffle(priority2)))
    }, [])


  return (
    <div className="mt-5 bg-white">
      <div className=" pt-3 pb-20">
        <div className="projectContainer max-w-full relative">
          {projects.map((elem, index) => (
            <ProjectCard 
              key={"projectCard" + index} 
              projectName= {elem.projectName}
              category= {elem.category}
              cardSize= {elem.cardSize}
              image= {elem.image}
              link= {elem.link}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProjectSection