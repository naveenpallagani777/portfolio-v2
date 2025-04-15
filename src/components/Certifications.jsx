import { aboutData } from '../assets/json/aboutData';

const Certifications = () => {
    return (
        <section className="mb-12">
            <h2 className="text-xl md:text-3xl font-semibold text-left font-sourceSans">
                CERTIFICATIONS
            </h2>
            <hr className="mb-4 h-0.75 bg-black" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {aboutData.certifications.map((cert, index) => (
                    <div
                        key={index}
                        className="bg-white bg-opacity-90 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
                    >
                        <img
                            src={cert.image}
                            alt={`${cert.name} Certificate`}
                            className="w-full max-w-xs h-auto rounded-md mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-blue-800 font-sourceSans text-center">
                            {cert.name}
                        </h3>
                        <p className="text-base text-gray-600 font-Merriweather text-center">
                            Provided by: {cert.provided_by}
                        </p>
                        <a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-blue-500 hover:underline text-center mt-2"
                        >
                            View Certificate
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;