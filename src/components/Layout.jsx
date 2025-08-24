import { Outlet } from "react-router-dom";
import NavBarWebView from "./NavBarWebView";
import bgVideo from "../assets/videos/bgVideo.mp4";
import NavBarMobileView from "./NavBarMobileView";
import { useEffect, useRef, useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";

function Layout() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const sentinelRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsSticky(!entry.isIntersecting);
            },
            { threshold: 0 }
        );

        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }

        return () => {
            if (sentinelRef.current) {
                observer.unobserve(sentinelRef.current);
            }
        };
    }, []);

    return (
        <div className="relative min-h-screen text-white font-sourceSans">
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

            {/* Header Section */}
            <header className="min-h-screen flex flex-col justify-center items-center text-center relative max-w-6xl mx-auto px-4 md:px-12">
                <h1 className="text-3xl md:text-7xl font-extrabold">
                    NAVEEN KUMAR PALLAGANI
                </h1>
                <h2 className="text-2xl md:text-6xl font-extrabold mt-4">PORTFOLIO</h2>
                <img
                    className="w-32 h-32 md:w-64 md:h-60 object-cover mt-4"
                    src="./assets/pnk-logo.png"
                    alt="Portfolio Logo"
                />

                {/* Mobile Menu Button */}
                <div className="fixed md:hidden top-0 right-0 text-white flex justify-end items-center gap-1.5 p-8">
                    <MdOutlineMenuOpen />
                    <button onClick={() => setIsOpen(!isOpen)} className="font-extrabold">
                        Menu
                    </button>
                </div>

                {/* ✅ Navbar initially inside header at bottom */}
                <div className="absolute bottom-0 left-0 w-full">
                    <NavBarWebView />
                </div>

                {/* Invisible sentinel (to detect when header ends) */}
                <div ref={sentinelRef} className="absolute bottom-0 w-full h-1"></div>
            </header>

            {/* ✅ Sticky navbar with same centered width */}
            {isSticky && (
                <div className="fixed top-0 left-0 w-full z-50">
                    <div className="max-w-6xl mx-auto bg-black/80">
                        <NavBarWebView />
                    </div>
                </div>
            )}

            {/* Mobile Nav */}
            <NavBarMobileView
                isOpen={isOpen}
                setIsOpen={() => setIsOpen(!isOpen)}
            />

            {/* Main Content */}
            <main className="mx-auto bg-white text-black py-4 max-w-6xl px-4 md:px-12">
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
