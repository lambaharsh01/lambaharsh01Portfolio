"use client"

import ProjectCard from "./ProjectCard";

import { ProjectDataInterface } from "@/types/Project";
import { arrayShuffle } from "@/utils/shuffle";

import priority1 from "@/data/json/priority1.json" 
import priority2 from "@/data/json/priority2.json"
import { useState, useEffect } from "react";

const ProjectSection: React.FC = () => {

    const [projects, setProjects]= useState<ProjectDataInterface[]>([])

    useEffect(()=>{
        setProjects(arrayShuffle(priority1).concat(arrayShuffle(priority2)))
    }, [])


  return (
    <div className="mt-5 bg-white rounded-t-3xl">
      <div className=" pt-3 pb-20 rounded-3xl">
        <div className="projectContainer max-w-full relative">
          {projects.map((element, index) => (
            <ProjectCard key={"projectCard" + index} data={element} />
          ))}
        </div>
      </div>
    </div>
  )
}


export default ProjectSection