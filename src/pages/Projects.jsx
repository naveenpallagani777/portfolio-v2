import React, { useState } from 'react';
import { projectsData } from '../assets/json/projectsData.js';
import { IoLogoGithub } from "react-icons/io";
import { IoIosLink } from "react-icons/io";
import ImagesSlider from '../components/ImagesSlider.jsx';

const Projects = () => {

    const [expanded, setExpanded] = useState({});

    const toggleDescription = (index) => {
        setExpanded(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <div className="min-h-screen p-3 md:p-6">
            <h1 className="text-3xl md:text-6xl font-bold text-center mb-4 md:mb-8">
                PROJECTS
            </h1>
            <div className="max-w-6xl mx-auto">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="rounded-lg p-6 transition-shadow mb-6 bg-white"
                    >
                        <div className='flex items-center'>
                            <h2 className="text-xl md:text-3xl font-semibold text-left my-0 font-sourceSans">
                                {project.name}
                            </h2>
                            <div className='flex items-center ml-auto'>
                                {project.links.github && (
                                    <a
                                        href={project.links.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 bg-gray-200 p-1 rounded-sm hover:bg-gray-300 transition-colors"
                                        aria-label="GitHub repository"
                                    >
                                        <IoLogoGithub className='text-black w-4 h-4 md:h-6 md:w-6' />
                                    </a>
                                )}
                                {project.links.live && (
                                    <a
                                        href={project.links.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ml-2 bg-gray-200 p-1 rounded-sm hover:bg-gray-300 transition-colors"
                                        aria-label="Live project link"
                                    >
                                        <IoIosLink className='text-black w-4 h-4 md:h-6 md:w-6' />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="text-sm text-gray-400 italic mb-1 line-clamp-1">
                            {project.technologies.join(', ')}
                        </p>
                        <hr className="mb-4 h-0.75 bg-black" />
                        <ImagesSlider images={project.images} />
                        <h3 className="text-lg font-bold mt-4 md:mt-6 mb-2 text-gray-800">Description</h3>
                        <div className={expanded[index] ? '' : 'line-clamp-2'}>
                            {project.description.map((desc, descIndex) => (
                                <p
                                    key={descIndex}
                                    className="mb-2 indent-[1rem] md:indent-[3rem] text-gray-600 leading-relaxed"
                                >
                                    {desc}
                                </p>
                            ))}
                        </div>
                        <div className='w-full'>
                            {project.description.length > 1 && (
                                <button
                                    onClick={() => toggleDescription(index)}
                                    className="text-blue-600 transition-colors"
                                >
                                    {expanded[index] ? '...less' : '...more'}
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;