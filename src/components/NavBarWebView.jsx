import { NavLink } from "react-router-dom";
import { navLinks } from "../assets/json/navBarData";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Resume from '../assets/pdf/NaveenPallaganiResumeSD.pdf';

const NavBarWebView = () => {
    const socialLinks = [
        {
            name: "Resume",
            link: Resume,
            icon: <FaFileAlt />,
        },
        {
            name: "GitHub",
            link: "https://github.com/naveenpallagani777",
            icon: <FaGithub />,
        },
        {
            name: "LinkedIn",
            link: "https://www.linkedin.com/in/naveen-pallagani-b23845259/",
            icon: <FaLinkedin />,
        },
    ];

    return (
        <nav
            className="w-full sticky top-0 z-50 mx-auto justify-between 
      bg-white/20 backdrop-blur-md hidden md:flex"
        >
            {/* Nav Links */}
            <ul className="flex h-16 flex-col md:flex-row justify-start items-center">
                {navLinks.map((link) => (
                    <li key={link.id} className="h-full transition-colors">
                        <NavLink
                            to={link.link}
                            className={({ isActive }) =>
                                `h-full px-8 text-xs font-bold flex justify-center items-center transition-colors ${
                                    isActive
                                        ? "bg-white/30 text-cyan-400"
                                        : "text-white hover:text-cyan-400 hover:bg-white/10"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Social Links */}
            <ul className="flex h-16 flex-col md:flex-row justify-end items-center mr-8">
                {socialLinks.map((link) => (
                    <li
                        key={link.name}
                        className="h-full flex justify-center items-center px-4"
                    >
                        <a
                            href={link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link.name}   // ✅ Tooltip on hover
                            className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
                        >
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBarWebView;