import { aboutData } from '../assets/json/aboutData';

const Education = () => {
    return (
        <section className="mb-6">
            <h2 className="text-xl md:text-3xl font-semibold text-left my-0 font-sourceSans text-black">
                EDUCATION
            </h2>
            <hr className="mb-4 h-0.75 bg-black" />
            {aboutData.education.map((edu, index) => (
                <div key={index} className="flex md:ml-12 font-sans-serif">
                    <div className="flex items-center flex-col mr-4">
                        <img
                            src={edu.logo}
                            alt={`${edu.institution} logo`}
                            className="max-w-8 max-h-8 md:w-12 md:h-12 rounded-md shadow-md"
                        />
                        {index < aboutData.education.length - 1 && (
                            <div className="w-1 flex-grow bg-black"></div>
                        )}
                    </div>
                    <div className="text-lg font-Merriweather mb-3 md:mb-6">
                        <h3 className="font-bold text-base md:text-2xl font-sourceSans text-black">
                            {edu.degree}
                        </h3>
                        <p className="text-xs md:text-sm text-gray-700">
                            <span>{edu.grade.split(':')[0]}</span>:
                            <span className="font-extrabold italic text-gray-800">
                                {edu.grade.split(':')[1]}
                            </span>
                        </p>
                        <p className="text-sm md:text-base font-sourceSans font-medium italic text-gray-700">
                            {edu.institution}
                        </p>
                        <p className="text-xs md:text-sm text-gray-700">{edu.year}</p>
                    </div>
                </div>
            ))}
        </section>
    );
}
export default Education;