import React from 'react';
import Education from '../components/Education';
import TechnicalSkills from '../components/TechnicalSkills';
import Certifications from '../components/Certifications';

function About() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <div className="relative z-10 w-full p-6 backdrop-blur-sm">
        <h1 className="text-3xl md:text-6xl font-bold my-4 mb-8 text-center font-sourceSans">
          ABOUT ME
        </h1>
        <Education />
        <TechnicalSkills />
        <Certifications />

      </div>
    </div>
  );
}

export default About;