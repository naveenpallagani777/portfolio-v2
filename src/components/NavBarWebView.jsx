import { Link } from "react-router-dom";
import { navLinks } from "../assets/json/navBarData";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const NavBarWebView = () => {

    const socialLinks = [
        {
            name: 'GitHub',
            link: 'https://github.com/naveenpallagani777',
            icon: <FaGithub />,
        },
        {
            name: 'LinkedIn',
            link: 'https://www.linkedin.com/in/naveen-pallagani-b23845259/',
            icon: <FaLinkedin />,
        }
    ];

    return (
        <div className="w-full">
            <nav className="mt-6 mx-auto justify-between bg-white/20 hidden md:flex">
            <ul className="flex h-16 flex-col md:flex-row justify-start items-center ">
                {navLinks.map((link) => (
                    <li key={link.id} className="hover:bg-white/10 h-full">
                        <Link to={link.link} className="h-full px-8 text-xs font-bold text-white transition-colors flex justify-center items-center">
                            {link.name}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex h-16 flex-col md:flex-row justify-end items-center mr-8">
                {socialLinks.map((link) => (
                    <li key={link.id} className="h-full flex justify-center items-center px-4">
                        <a href={link.link} target="_blank" className="text-xl font-bold text-white transition-colors hover:text-cyan-400">
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
        </div>
    );
}

export default NavBarWebView;