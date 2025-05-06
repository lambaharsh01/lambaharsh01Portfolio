"use client";

import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { RiLink } from "react-icons/ri";
import { ProjectDataInterface } from "@/types/Project";
import { smallScreen } from "@/utils/screen";
import { cardSizeClasses } from "@/utils/constants";

const ProjectCard: React.FC<ProjectDataInterface> = ({ projectName, category, image, link, cardSize }) => {

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    setIsSmallScreen(smallScreen(window.innerWidth));
  }, []);
  
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardSizeClass: string = cardSizeClasses[cardSize];
  
  return (
    <div
      className={`projectCard my-[17px] mx-[13px] rounded-xs ${cardSizeClass} border-2 border-white`}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1.5s",
      }}
    >
            <div className="w-full h-full relative overflow-hidden">
                <Image
                    src={image}
                    alt="projectImage"
                    fill
                    className="projectImage object-cover"
                />

                <div className={`projectsModal w-full h-full absolute left-0 grid items-end text-white ${isSmallScreen ? "ps-2 pb-2" : "ps-3 pb-3"}`}>
                    <div>
                        <span className="projectsSubtitle font-bold">{category}</span>
                        <h3 className="projectsTitle mb-2 font-extrabold">{projectName}</h3>
                        
                        <a
                            href={link}
                            rel="noreferrer"
                            className="projectLink inline-flex text-white font-bold items-center gap-2 rounded-sm transition duration-300 text-lg px-2 py-2 bg-gradient-to-r from-indigo-500 to-purple-500"
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