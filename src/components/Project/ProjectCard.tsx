"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RiLink } from "react-icons/ri";
import { ProjectCardInterface } from "@/types/Project";
import { smallScreen } from "@/utils/screen";
import { cardSizeClasses } from "@/utils/constants";

const ProjectCard: React.FC<ProjectCardInterface> = ({ data }) => {
  const { projectName, category, image, link, cardSize } = data;

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsSmallScreen(smallScreen(window.innerWidth)); // Check if screen is small
  }, []);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardSizeClass: string = cardSizeClasses[cardSize];
  
  return (
    <div
      className={`projectCard ${cardSizeClass} border-2 border-white`}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1.5s",
      }}
    >
            <div className="w-full h-full relative rounded-xl overflow-hidden">
                <Image
                    src={image}
                    alt="projectImage"
                    fill
                    className="projectImage object-cover"
                />

                <div className={`projectsModal w-full h-full absolute left-0 grid items-end text-white ${isSmallScreen ? "ps-2 pb-2" : "ps-3 pb-3"}`}>
                    <div>
                        <span className="projectsSubtitle">{category}</span>
                        <h3 className="projectsTitle">{projectName}</h3>
                        
                        <a
                            href={link}
                            rel="noreferrer"
                            className="projectLink inline-flex text-white items-center gap-2 rounded-lg transition duration-300 text-lg px-2 py-2"
                        >
                            <RiLink />
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard