"use client"
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { TechStackDataInterface } from "@/types/TechStack";


const TechStackCard: React.FC<TechStackDataInterface> = ({ image, title, description, threshold }) => {

    const [isHovered, setIsHovered] = useState<boolean>(false);

    const { ref, inView } = useInView({
      threshold,
    });
  
    return (

    <div
      className="relative flex-shrink-0  projectCard overflow-hidden p-1 m-2.5 bg-white/40 backdrop-blur-md border border-white/50 rounded-xs shadow-lg transition duration-300 hover:transform hover:-translate-y-1 hover:bg-white/60 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 2s",
      }}
    >
      <img 
        src={image} 
        alt="text-stack-icon" 
        className={`techStackImageHeight w-auto object-contain`}
        loading="lazy"
      />
      
      <div 
        className={`absolute inset-0 bg-white p-4 flex flex-col justify-center transition-transform duration-300 ease-in-out ${ isHovered ? 'translate-x-0' : '-translate-x-full' }`}
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
        
        <div className={`transition-opacity duration-300 delay-150 ${ isHovered ? 'opacity-100' : 'opacity-0' }`}>   
          <h3 className="projectsTitle font-extrabold text-gray-800 mb-2 text">{title}</h3>
          <p className="projectsSubtitle font-bold text-gray-600">{description}</p>
        </div>
      </div>
    </div>
    );
  };

  export default TechStackCard