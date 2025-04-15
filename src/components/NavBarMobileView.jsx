import { navLinks } from "../assets/json/navBarData";
import { VscChromeClose } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

// Assume isOpen is passed as a prop to control visibility
const NavBarMobileView = ({ isOpen, setIsOpen }) => {
  const socialLinks = [
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
    <section
      className={`fixed top-0 right-0 w-[300px] h-screen bg-white text-black flex flex-col md:hidden z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={setIsOpen}>
          <VscChromeClose className="text-2xl" />
        </button>
      </div>
      <div className="px-6">
        {navLinks.map((link, index) => (
          <div
            key={link.id}
            className={`flex justify-center items-center h-16 ${
              index < navLinks.length - 1 ? "border-b" : ""
            } border-gray-300 hover:bg-gray-100 transition-colors`}
          >
            <Link
              to={link.link}
              className="w-full text-center text-lg font-bold text-black"
              onClick={setIsOpen} // Close menu on link click
            >
              {link.name}
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-auto px-6 py-4 flex justify-center gap-6">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-black hover:text-gray-600"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
};

export default NavBarMobileView;