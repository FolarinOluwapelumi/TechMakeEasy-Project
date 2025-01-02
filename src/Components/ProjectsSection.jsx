import React from "react";
import Button from "./Button";
import ProjectCard from "./ProjectCard";
import Project from "../assets/Project.jpg";


const ProjectsSection = () => {
  const projects = [
    {
      image: Project,
      delay: 0,
    }
  ];

  return (
    <section className="py-12 px-4 md:px-32 bg-white">
      <h2 className="text-3xl font-bold text-purple-500 mb-4">Products we built</h2>
      <p className="text-gray-700 text-lg mb-3 max-w-[17rem] md:max-w-full">
        We deliver reliable, high-quality software with the perfect blend of
        skills and experience.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-start">
        <Button
          href="/case-studies"
          className="w-fit text-center border-2 border-gray-400 border-l-0 border-r-0 border-t-0"
        >
          View all case studies
        </Button>
        <div className="flex items-center ">
        <a
          href="/book-call"
          className="hover:text-purple-500 text-blue-500 font-bold"
        >
          Book Strategy Call →
        </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
