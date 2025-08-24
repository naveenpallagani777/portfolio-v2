import React from 'react';
import { experienceData } from '../assets/json/experienceData';
import ExperienceDetails from '../components/ExperienceDetails';

const Experience = () => {
  return (
    <div className="relative z-10 w-full p-3 md:p-6 backdrop-blur-sm">
      <h1 className="text-3xl md:text-6xl font-bold my-4 mb-4 md:mb-8 text-center font-sourceSans">
        EXPERIENCE
      </h1>

      <div className="space-y-12">
        {experienceData.map((exp, index) => (
          <div key={index}>
            <ExperienceDetails exp={exp} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
