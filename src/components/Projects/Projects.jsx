import React, { useEffect, useState } from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import ProjectSkeleton from "./ProjectSkeleton";



const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetch("https://api.github.com/users/vivek-Kr97/repos")
      .then((response) => response.json())
      .then((data) => {
        const fetchReadmes = data.map(async (project) => {
          const readmeUrl = `https://api.github.com/repos/vivek-Kr97/${project.name}/readme`;
          try {
            const readmeResponse = await fetch(readmeUrl);
            if (!readmeResponse.ok) throw new Error("README not found");
            
            const readmeData = await readmeResponse.json();
            const readmeContent = atob(readmeData.content);
            const livePreviewMatch = readmeContent.match(/https?:\/\/[^\s]+/);
            
            return { ...project, livePreview: livePreviewMatch ? livePreviewMatch[0] : null };
          } catch (error) {
            return { ...project, livePreview: null };
          }finally {
          setLoading(false); // <-- stop the skeleton
          }
        });

        Promise.all(fetchReadmes).then((projectsWithPreview) => 
          setProjects(projectsWithPreview));
          setProjects(finalProjects);
        
      })
      .catch((error) => console.error("Error fetching repos:", error));
  }, []);

  return (
    <div className="p-6  bg-gray-900 min-h-screen text-white pb-10 pd:mb-16 lg:pb-24"
         id="Projects">
      <div className="text-center mb-12">
      <h2 className="lg:text-4xl text-3xl font-bold mb-4">My Projects </h2>
      </div>
      <div className="flex flex-col gap-10">



      {
      loading
      ? Array(3).fill(0).map((_, index) => (
        <ProjectSkeleton/>
        ))
      :
      projects.map((project) => (    
      <div
        key={project.id}
        className="border border-gray-700 rounded-xl p-6 shadow-lg bg-gray-800 flex flex-col md:flex-row w-full gap-6"
      >
            <div className="w-full md:w-2/5 p-4 flex flex-col">
              <h2 className="text-2xl font-semibold mb-3 text-white">{project.name}</h2>
              <p className="text-gray-300 text-base mb-4">
                {project.description || "No description available."}
              </p>
              <div className="flex flex-wrap justify-start  items-center gap-3">
                <span className="text-base text-gray-400">⭐ {project.stargazers_count}</span>
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg lg:text-base  text-[0.8rem] hover:bg-blue-600 transition-colors flex items-center justify-center gap-x-3"
                >
                  <FaGithub />
                  View on GitHub
                </a>
                {project.livePreview && (
                  <a
                    href={project.livePreview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg text-[0.8rem] text-base hover:bg-blue-600 w-auto transition-colors flex items-center justify-center gap-x-3"
                  >
                    <CiLink />
                  Live Preview
                  </a>
                )}
              </div>
            </div>
            {project.livePreview && (
              <div className="w-full md:w-3/5  ">
                <div className="relative w-full pt-[56.25%] rounded-lg overflow-hidden h-full ">
                  <iframe
                    src={project.livePreview}
                    title={project.name}
                    className="absolute top-0 left-0 w-full h-full border rounded-lg bg-white "
                    sandbox="allow-scripts allow-same-origin"
                  
                  ></iframe>
                </div>
              </div>
            )}
        </div>
))}
      </div>
      
      </div>
  );
};

export default Projects;