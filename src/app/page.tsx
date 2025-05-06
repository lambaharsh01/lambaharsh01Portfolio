"use client"
import ProjectSection from "@/components/Project/ProvectSection";

// // Variant C: Glass Blur Style Cards
export default function GlassSkills() {
  const skills = [
    { name: "React", desc: "Dynamic user interfaces" },
    { name: "Next.js", desc: "Full-stack React framework" },
    { name: "Tailwind CSS", desc: "Utility-first CSS" },
    { name: "Node.js", desc: "Backend with JavaScript" },
    { name: "Go", desc: "Compiled backend services" },
    { name: "Docker", desc: "Containerization platform" },
  ];

  return (
    // <section className="bg-[#f0f4f8] py-20 px-6 backdrop-blur-sm" id="skills">
    //   <div className="max-w-6xl mx-auto text-center">
        <ProjectSection/>
    //     <h2 className="text-3xl font-serif font-bold text-gray-800 mb-12">
    //       My Current Stack
    //     </h2>
    //     <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
    //       {skills.map((skill, idx) => (
    //         <div
    //           key={idx}
    //           className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition text-left"
    //         >
    //           <h3 className="text-lg font-semibold text-gray-800 mb-1">
    //             {skill.name}
    //           </h3>
    //           <p className="text-sm text-gray-600">{skill.desc}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}



// // // Variant 4: Hover Reveal Grid
// // export default function SkillsInteractiveGrid() {
// //   const skills = [
// //     { name: "React", desc: "UI library for interactive interfaces" },
// //     { name: "Next.js", desc: "React framework with SSR & routing" },
// //     { name: "Tailwind CSS", desc: "Utility-first CSS framework" },
// //     { name: "Node.js", desc: "Backend JavaScript runtime" },
// //     { name: "Go", desc: "Compiled language for performance" },
// //     { name: "Docker", desc: "Containerization and environment setup" },
// //   ];

// //   return (
// //     <section className="bg-white py-20 px-4" id="skills">
// //       <div className="max-w-5xl mx-auto text-center">
// //         <h2 className="text-3xl font-serif font-semibold text-gray-800 mb-10">
// //           Skills Overview
// //         </h2>
// //         <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {skills.map((skill, idx) => (
// //             <div
// //               key={idx}
// //               className="group border border-gray-200 rounded-lg p-6 text-left bg-gray-50 hover:bg-white hover:shadow-md transition"
// //             >
// //               <h4 className="text-lg font-semibold text-gray-700 group-hover:text-indigo-600 transition">
// //                 {skill.name}
// //               </h4>
// //               <p className="text-sm text-gray-500 mt-1">{skill.desc}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
