import { FaLinkedin } from "react-icons/fa";

const ExperienceDetails = ({ exp }) => {
    return (
        <div className="bg-white/10 backdrop-blur-sm px-3 md:px-6 pb-3 md:pb-6 rounded-lg hover:shadow-lg mb-6">
            <div className="flex items-center mb-3">
                <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover mr-4 border-2 border-blue-500"
                />
                <div className='w-full'>
                    <div className='flex items-center justify-between'>
                        <h2 className="text-base md:text-2xl font-semibold">{exp.company}</h2>
                        <a
                            href={exp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            <FaLinkedin className="inline-block text-2xl" />
                        </a>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400">{exp.location}</p>
                </div>
            </div>
            <hr className="mb-3 h-0.75 bg-black" />
            {exp.positions.map((position, posIndex) => (
                <div key={position.title} className='flex ml-6'>
                    <div className='flex flex-col items-center relative top-2 mr-3'>
                        <div className='w-3 h-3 bg-black rounded-md'></div>
                        {posIndex < exp.positions.length - 1 && <div className='flex-grow bg-black w-0.5'></div>}
                    </div>
                    <div key={posIndex} className="mb-3">
                        <h3 className="text-base md:text-xl font-medium">{position.title}</h3>
                        <p className="text-xs md:text-sm text-gray-400 italic">{position.duration}</p>
                        <p className="mt-1 text-sm md:text-base">{position.description}</p>
                    </div>
                </div>
            ))}

            <div className="">
                <h4 className="text-lg font-medium mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                        <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-600/30 rounded-full text-sm hover:bg-blue-500/50 transition-colors duration-200"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ExperienceDetails;