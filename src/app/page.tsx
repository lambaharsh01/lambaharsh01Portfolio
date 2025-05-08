"use client"

import CountdownSection from "@/components/Countdown/CountdownSection";
import ProjectSection from "@/components/Project/ProjectSection";

import TechStackSection from "@/components/TechStack/TechStackSection";

export default function EnhancedGlassSkills() {

  return (
    <section>

      <CountdownSection />

      <section className="text-center py-12 bg-gray-100 px-1.5">
        <h1 className="sectionHeading font-extrabold text-gray-900 mb-4">
          My Projects
        </h1>
        <p className="sectionTextContent text-gray-600 px-4 max-w-6xl mx-auto">
          A curated collection of projects built with purpose and passion.
        </p>
      </section>

      <ProjectSection />

      <section className="text-center py-12 px-1.5 bg-gray-100 mb-14">
        <h1 className="sectionHeading font-extrabold text-gray-900 mb-4">
          My Experience
        </h1>
        <p className="sectionTextContent text-justify text-gray-600 px-4 max-w-6xl mx-auto">
          Over the years, I have honed my skills in backend development, working extensively with technologies like Go, Node.js, and databases such as MySQL and OracleDB.
          I have led various projects, ensuring smooth coordination between project managers, and developers, while focusing on performance, scalability, and maintainability.
          Mentoring juniors has been a fulfilling part of my journey, where I guide and support them in developing strong coding practices and achieving their professional growth.
        </p>
        <a
          href="/files/lambaharsh01.pdf"
          className="inline-block mt-4 px-6 py-2 text-white font-semibold sectionTextContent bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xs"
          download
        >
          Download My Resume
        </a>
      </section>

      <section className="text-center py-12 bg-gray-100 px-1.5">
        <h1 className="sectionHeading font-extrabold text-gray-900 mb-4">
          Tech Stack
        </h1>
        <p className="sectionTextContent text-gray-600 px-4 max-w-6xl mx-auto">
          Tools and technologies I use to build fast, scalable, and modern applications.
        </p>
      </section>


      <TechStackSection />


      <section className="text-center py-12 px-1.5 mt-20 mb-10">
        <h1 className="sectionHeading font-extrabold text-gray-900 mb-4">
          Fun Fact
        </h1>
        <p className="sectionTextContent text-gray-600 px-4 max-w-6xl mx-auto">
          I enjoy naming variables more than naming pets.
        </p>
      </section>


      {/* <section className="text-center py-12 bg-gray-100 px-1.5 mt-10">
        <h1 className="sectionHeading font-extrabold text-gray-900 mb-4">
          Reach Out To Me
        </h1>
        <p className="sectionTextContent text-gray-600 px-4 max-w-6xl mx-auto">
          Would love to hear from you. Feel free to contact.
        </p>

        <div className="max-w-6xl mx-auto text-center mt-14">
          <div className="flex flex-col md:flex-row justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <a href="tel:+918287868558" className="text-base mt-1 text-blue-600 hover:underline">
                +91 8287868558
              </a>
            </div>

            <div className="mt-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <a href="mailto:lambaharsh01@gmail.com" className="text-base mt-1 text-blue-600 hover:underline block">
                lambaharsh01@gmail.com
              </a>
              <a href="mailto:lambaharsh0101@gmail.com" className="text-base mt-1 text-blue-600 hover:underline block">
                lambaharsh0101@gmail.com
              </a>
            </div>

          </div>
        </div>

      </section> */}





      <footer className=" text-white text-center">
        <div className="bg-gray-800">
          <div className="h-5" />

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-8">
            <a href="https://github.com/lambaharsh01" target="_blank" rel="noopener noreferrer" className="hover:underline">
              GitHub
            </a>
            <a href=" https://www.linkedin.com/in/harsh-lamba-1b185b214" target="_blank" rel="noopener noreferrer" className="hover:underline">
              LinkedIn
            </a>
            <a href="mailto:lambaharsh01@gmail.com" className="hover:underline">
              Email
            </a>
            <a href="tel:+918287868558" className="hover:underline">
              Phone
            </a>
          </div>

          <p className="text-sm mt-8">
            © 2025 Harsh Lamba.
          </p>
          <div className="h-10" />

        </div>
      </footer>


    </section>
  );
}

