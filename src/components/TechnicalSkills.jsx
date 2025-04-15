import { aboutData } from '../assets/json/aboutData';
// Import icons
import {
    DiJava,
    DiPython,
    DiJavascript1,
    DiNodejs,
    DiReact,
    DiDjango,
    DiGit,
    DiLinux,
    DiMysql,
} from 'react-icons/di';
import { FaCode } from 'react-icons/fa';
import {
    SiCplusplus,
    SiTypescript,
    SiMongodb,
    SiNextdotjs,
    SiPostman,
    SiTailwindcss,
    SiBootstrap,
    SiMicrodotblog,
    SiMinutemailer,
    SiApachespark,
} from 'react-icons/si';

const TechnicalSkills = () => {

    // Icon map
    const iconMap = {
        DiJava: <DiJava className="text-2xl" />,
        DiPython: <DiPython className="text-2xl" />,
        DiJavascript1: <DiJavascript1 className="text-2xl" />,
        DiNodejs: <DiNodejs className="text-2xl" />,
        DiReact: <DiReact className="text-2xl" />,
        DiDjango: <DiDjango className="text-2xl" />,
        DiGit: <DiGit className="text-2xl" />,
        DiLinux: <DiLinux className="text-2xl" />,
        DiMysql: <DiMysql className="text-2xl" />,
        FaCode: <FaCode className="text-2xl" />,
        SiCplusplus: <SiCplusplus className="text-2xl" />,
        SiTypescript: <SiTypescript className="text-2xl" />,
        SiMongodb: <SiMongodb className="text-2xl" />,
        SiNextdotjs: <SiNextdotjs className="text-2xl" />,
        SiPostman: <SiPostman className="text-2xl" />,
        SiTailwindcss: <SiTailwindcss className="text-2xl" />,
        SiBootstrap: <SiBootstrap className="text-2xl" />,
        SiMicrodotblog: <SiMicrodotblog className="text-2xl" />,
        SiMinutemailer: <SiMinutemailer className="text-2xl" />,
        SiApachespark: <SiApachespark className="text-2xl" />,
    };

    return (
        <section className="mb-12">
            <h2 className="text-xl md:text-3xl font-semibold text-left font-sourceSans">TECHNICAL SKILLS</h2>
            <hr className="mb-4 h-0.75 bg-black" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(aboutData.technicalSkills).map(([sectionTitle, items]) => (
                    <div
                        key={sectionTitle}
                        className="bg-gray-50 bg-opacity-10 backdrop-blur-sm rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <h3 className="text-base md:text-xl font-semibold mb-3 capitalize text-center font-sourceSans">
                            {sectionTitle.replace(/([A-Z])/g, ' $1').trim()}
                        </h3>
                        <ul className="flex flex-wrap justify-center gap-3">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full text-xs md:text-sm font-Merriweather hover:bg-gray-300 transition-colors duration-200"
                                >
                                    {iconMap[item.icon]}
                                    <span>{item.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>

    );
}
export default TechnicalSkills;