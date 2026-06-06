// src/components/layout/Navbar.jsx

import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

const expertiseLinks = [
    { name: "Training & Capacity Building", path: "/training" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Associates & Experts", path: "/associates" },
    { name: "Leadership", path: "/leadership" },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);

        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const closeMobile = () => setMobileOpen(false);

    const navLinkClass = ({ isActive }) =>
        `text-sm font-semibold transition duration-200 ${
            isActive ? "text-[#C9A24D]" : "text-white hover:text-[#C9A24D]"
        }`;

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                    scrolled
                        ? "bg-[#0F172A]/95 shadow-2xl backdrop-blur-xl"
                        : "bg-transparent"
                }`}
            >
                {scrolled && (
                    <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
                )}

                <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
                    <Link to="/" className="group flex flex-col">
                        <span className="text-2xl font-semibold tracking-[0.04em] text-white">
                            LLORICK
                        </span>
                        <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A24D]">
                            CONSULTING
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-8 lg:flex">
                        <NavLink to="/" className={navLinkClass}>
                            Home
                        </NavLink>

                        <NavLink to="/about" className={navLinkClass}>
                            About
                        </NavLink>

                        <NavLink to="/services" className={navLinkClass}>
                            Services
                        </NavLink>

                        <NavLink to="/projects-impact" className={navLinkClass}>
                            Projects & Impact
                        </NavLink>

                        <NavLink
                            to="/research-insights"
                            className={navLinkClass}
                        >
                            Research & Insights
                        </NavLink>

                        <div
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button
                                type="button"
                                className="flex items-center gap-1 text-sm font-semibold text-white transition hover:text-[#C9A24D]"
                            >
                                Expertise
                                <ChevronDown
                                    size={16}
                                    className={`transition-transform duration-200 ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            {dropdownOpen && (
                                <div className="absolute left-1/2 top-full w-[420px] -translate-x-1/2 pt-6">
                                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_30px_80px_rgba(2,6,23,0.15)]">
                                        <div className="border-b border-slate-100 px-6 py-5">
                                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A24D]">
                                                Expertise
                                            </p>
                                            <h3 className="mt-2 text-lg font-bold text-slate-900">
                                                Specialized Advisory Areas
                                            </h3>
                                        </div>

                                        <div className="p-3">
                                            {expertiseLinks.map((item) => (
                                                <Link
                                                    key={item.path}
                                                    to={item.path}
                                                    onClick={() =>
                                                        setDropdownOpen(false)
                                                    }
                                                    className="group flex items-center justify-between rounded-2xl px-5 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-[#C9A24D]"
                                                >
                                                    {item.name}
                                                    <ArrowRight className="h-4 w-4 opacity-0 transition group-hover:translate-x-1 group-hover:opacity-100" />
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <NavLink to="/contact" className={navLinkClass}>
                            Contact
                        </NavLink>
                    </nav>

                    <div className="hidden lg:block">
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full bg-[#C9A24D] px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileOpen(true)}
                        className="text-white lg:hidden"
                        aria-label="Open menu"
                    >
                        <Menu size={28} />
                    </button>
                </div>
            </header>

            <div
                className={`fixed inset-0 z-[60] transition duration-300 ${
                    mobileOpen ? "visible opacity-100" : "invisible opacity-0"
                }`}
            >
                <button
                    type="button"
                    className="absolute inset-0 bg-black/60"
                    onClick={closeMobile}
                    aria-label="Close menu"
                />

                <div
                    className={`absolute right-0 top-0 h-full w-[90%] max-w-sm bg-[#0F172A] p-6 transition-transform duration-300 ${
                        mobileOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                >
                    <div className="flex items-center justify-between">
                        <Link
                            to="/"
                            onClick={closeMobile}
                            className="flex flex-col"
                        >
                            <span className="text-2xl font-semibold tracking-[0.04em] text-white">
                                LLORICK
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.45em] text-[#C9A24D]">
                                CONSULTING
                            </span>
                        </Link>

                        <button
                            type="button"
                            onClick={closeMobile}
                            className="text-white"
                            aria-label="Close menu"
                        >
                            <X />
                        </button>
                    </div>

                    <nav className="mt-10 flex flex-col gap-5">
                        <NavLink
                            to="/"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/about"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            About
                        </NavLink>

                        <NavLink
                            to="/services"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            Services
                        </NavLink>

                        <NavLink
                            to="/projects-impact"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            Projects & Impact
                        </NavLink>

                        <NavLink
                            to="/research-insights"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            Research & Insights
                        </NavLink>

                        <div className="mt-5 border-t border-white/10 pt-5">
                            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Expertise
                            </p>

                            <div className="flex flex-col gap-4">
                                {expertiseLinks.map((item) => (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={closeMobile}
                                        className={navLinkClass}
                                    >
                                        {item.name}
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <NavLink
                            to="/contact"
                            onClick={closeMobile}
                            className={navLinkClass}
                        >
                            Contact
                        </NavLink>

                        <Link
                            to="/contact"
                            onClick={closeMobile}
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-6 py-3 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navbar;
