import { Outlet } from "react-router-dom";
import NavBarWebView from "./NavBarWebView";
import bgVideo from "../assets/videos/bgVideo.mp4";
import NavBarMobileView from "./NavBarMobileView";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

function Layout() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative min-h-screen text-white mx-auto font-sourceSans max-w-6xl px-4 md:px-12">
            {/* Background */}
            
            <video 
                autoPlay 
                loop 
                muted 
                className="fixed inset-0 -z-10 w-full h-full object-cover"
            >
                <source src={bgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <header className="min-h-screen flex flex-col justify-center md:justify-end items-center text-center">
                <h1 className="text-3xl md:text-7xl font-extrabold">
                    NAVEEN KUMAR PALLAGANI
                </h1>
                <h2 className="text-2xl md:text-6xl font-extrabold mt-4">PORTFOLIO</h2>
                <img 
                    className="w-32 h-32 md:w-64 md:h-60 object-cover mt-4" 
                    src="./assets/pnk-logo.png"
                    alt="Portfolio Logo" 
                />
                <div className="fixed md:hidden top-0 right-0 text-white flex justify-end items-center gap-1.5 p-8">
                    <MdOutlineMenuOpen />
                    <button onClick={() => setIsOpen(!isOpen)} className=" font-extrabold">
                        Menu
                    </button>
                </div>
                <NavBarWebView />
                <NavBarMobileView 
                    isOpen={isOpen}
                    setIsOpen={() => setIsOpen(!isOpen)}
                />
            </header>

            {/* Main Content */}
            <main className="mx-auto bg-white text-black py-4">
                <Outlet /> 
            </main>
        </div>
    );
}

export default Layout;
