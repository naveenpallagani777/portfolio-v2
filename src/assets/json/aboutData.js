// src/assets/json/aboutData.js
import AnitsLogo from '../images/anits-logo.png';
import AANMLogo from '../images/aanm-vvrsr-logo.png';
import ZPHSLogo from '../images/zphs-logo.png';

import responsiveWebDesignUsingFlexbox from '../images/certifications/responsiveWebDesignUsingFlexbox.jpg';
import programmingFoundationsWithPython from '../images/certifications/programmingFoundations.jpg';
import nodeJS from '../images/certifications/nodeJS.jpg';
import javaScriptEssentials from '../images/certifications/javascriptEssentials.jpg';
import introductionToDatabases from '../images/certifications/introductionToDatabases.jpg';
import developerFoundations from '../images/certifications/developerFoundations.jpg';
import buildYourOwnStaticWebsite from '../images/certifications/buildYourOwnStaticWebsite.jpg';
import avrMicrocontrollerProgramming from '../images/certifications/avrMicrocontrollerProgramming.jpg';
import crashCourseOnPython from '../images/certifications/crashCourseOnPython.jpg';
import objectOrientedProgrammingInJava from '../images/certifications/objectOrientedProgrammingInJava.jpg';
import buildYourOwnResponsiveWebsite from '../images/certifications/buildYourOwnResponsiveWebsite.jpg';
import buildYourOwnDynamicWebApplication from '../images/certifications/buildYourOwnDynamicWebApplication.jpg';

export const aboutData = {
    education: [
        {
            degree: 'Bachelor of Technology, Electronics and Communications Engineering',
            institution: 'Anil Neerukonda Institute of Technology & Sciences (ANITS), Visakhapatnam',
            year: '2021 - 2024',
            grade: 'Grade: 8.6 CGPA',
            logo: AnitsLogo,
        },
        {
            degree: 'Diploma, Electronics and Communications Engineering',
            institution: 'AANM & VVRSR Polytechnic, Gudlavalleru',
            year: '2018 - 2021',
            grade: 'Percentage: 89.9%',
            logo: AANMLogo,
        },
        {
            degree: 'Secondary Education (10th), SSC',
            institution: 'Zilla Parishad High Schools, Agiripalli',
            year: '2017 - 2018',
            grade: 'Grade: 9.2 GPA',
            logo: ZPHSLogo,
        },
    ],
    technicalSkills: {
        languages: [
            { name: 'C/C++', icon: 'SiCplusplus' },
            { name: 'JavaScript', icon: 'DiJavascript1' },
            { name: 'TypeScript', icon: 'SiTypescript' },
            { name: 'Java', icon: 'DiJava' },
            { name: 'Python', icon: 'DiPython' },
            { name: 'SQL', icon: 'DiMysql' },
        ],
        frameworks: [
            { name: 'React JS', icon: 'DiReact' },
            { name: 'Node JS', icon: 'DiNodejs' },
            { name: 'Next JS', icon: 'SiNextdotjs' },
            { name: 'Express JS', icon: 'SiMinutemailer' },
            { name: 'Django', icon: 'DiDjango' },
            { name: 'Bootstrap', icon: 'SiBootstrap' },
            { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
        ],
        databases: [
            { name: 'MySQL', icon: 'DiMysql' },
            { name: 'MongoDB', icon: 'SiMongodb' },
        ],
        design: [
            { name: 'Microservices', icon: 'SiMicrodotblog' },
            { name: 'Monolithic', icon: 'SiApachespark' },
        ],
        softwareTools: [
            { name: 'Git', icon: 'DiGit' },
            { name: 'Jupyter Notebook', icon: 'FaCode' },
            { name: 'Linux', icon: 'DiLinux' },
            { name: 'Postman', icon: 'SiPostman' },
            { name: 'VS Code', icon: 'FaCode' },
        ],
        others: [
            { name: 'Data Structures & Algorithms', icon: 'FaCode' },
            { name: 'Competitive Coding & Problem Solving', icon: 'FaCode' },
        ],
    },
    certifications: [
        {
            name: "Crash Course on Python",
            provided_by: "Google via Coursera",
            link: "https://www.coursera.org/account/accomplishments/records/Z9OHVA1F0DCM",
            image: crashCourseOnPython
        },
        {
            name: "Object Oriented Programming in Java",
            provided_by: "UC San Diego via Coursera",
            link: "https://www.coursera.org/account/accomplishments/verify/AIY09CJG0ILE",
            image: objectOrientedProgrammingInJava
        },
        {
            name: "Build Your Own Static Website",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/static-website?id=HKTVQOCPOF",
            image: buildYourOwnStaticWebsite,
            technologies: "HTML, CSS, Bootstrap"
        },
        {
            name: "Build Your Own Responsive Website",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/responsive-website?id=XZRRQCUGBS",
            image: buildYourOwnResponsiveWebsite,
            technologies: "HTML, CSS, Bootstrap"
        },
        {
            name: "Programming Foundations",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/programming-foundations?id=AOKPPJBIFE",
            image: programmingFoundationsWithPython,
            technologies: "Python"
        },
        {
            name: "Introduction to Databases",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=RLIVLFWEJT",
            image: introductionToDatabases,
            technologies: "SQL"
        },
        {
            name: "Developer Foundations",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/developer-foundations?id=TUKLBPGVSS",
            image: developerFoundations,
            technologies: "Git, Commandline"
        },
        {
            name: "Build Your Own Dynamic Web Application",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=FFPUGPVDLA",
            image: buildYourOwnDynamicWebApplication,
            technologies: "HTML, CSS, JavaScript"
        },
        {
            name: "JavaScript Essentials",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=WFAKCLDCDC",
            image: javaScriptEssentials,
            technologies: "JavaScript"
        },
        {
            name: "Responsive Web Design Using Flexbox",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/flexbox?id=PWZQKRGRFM",
            image: responsiveWebDesignUsingFlexbox,
            technologies: "Flexbox"
        },
        {
            name: "Node JS",
            provided_by: "NxtWave",
            link: "https://certificates.ccbp.in/intensive/node-js?id=ZAXMCHSYTV",
            image: nodeJS,
            cycle: "Growth Cycle - 3",
            duration: "Mar 03 - May 01 (52 Days)",
            completion: "69%"
        },
        {
            name: "AVR Microcontroller Programming",
            provided_by: "Microchip Academic Program & EduSkills",
            link: "https://eduskills.com/certificate/LFju1KIZHP",
            image: avrMicrocontrollerProgramming
        }
    ],
};