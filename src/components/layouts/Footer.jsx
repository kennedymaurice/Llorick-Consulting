// src/components/layout/Footer.jsx

import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import {
    FaFacebookF,
    FaLinkedinIn,
    FaXTwitter,
    FaInstagram,
    FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects & Impact", path: "/projects-impact" },
    { name: "Research & Insights", path: "/research-insights" },
    { name: "Contact", path: "/contact" },
];

const expertiseLinks = [
    { name: "Training & Capacity Building", path: "/training" },
    { name: "Partnerships", path: "/partnerships" },
    { name: "Associates & Experts", path: "/associates" },
    { name: "Leadership", path: "/leadership" },
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/erick-agure-826a1265/",
        icon: FaLinkedinIn,
    },
    { name: "Facebook", href: "#", icon: FaFacebookF },
    { name: "X", href: "#", icon: FaXTwitter },
    { name: "Instagram", href: "#", icon: FaInstagram },
    { name: "YouTube", href: "#", icon: FaYoutube },
];

const Footer = () => {
    return (
        <footer className="bg-[#0F172A] text-white">
            <section className="border-b border-[#B8923F] bg-gradient-to-r from-[#C9A24D] via-[#D6B56A] to-[#C9A24D]">
                <div className="mx-auto grid max-w-7xl gap-10 px-5 py-8 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0F172A]">
                            Evidence • Strategy • Impact
                        </p>

                        <h2 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Advancing global health through research, policy,
                            and strategic advisory.
                        </h2>
                    </div>

                    <div className="lg:text-right">
                        <Link
                            to="/contact"
                            className="inline-flex items-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-slate-900"
                        >
                            Start a Conversation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            <section>
                <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_0.9fr_1fr] lg:px-8">
                    <div>
                        <Link to="/" className="inline-flex flex-col">
                            <img
                                src="/llorick-logo-horizontal-white.png"
                                alt="Llorick Consulting"
                                className="h-14 w-auto"
                            />
                        </Link>

                        <p className="mt-6 max-w-md leading-8 text-slate-300">
                            Llorick Consulting is a global health, research,
                            policy, and development advisory firm supporting
                            institutions to translate evidence into practical
                            solutions and sustainable impact.
                        </p>

                        <div className="mt-8 flex items-center gap-3">
                            {socialLinks.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={item.name}
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-[#C9A24D] hover:bg-[#C9A24D] hover:text-[#0F172A]"
                                    >
                                        <Icon className="h-4 w-4" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Company
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {quickLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-sm font-medium text-slate-300 transition hover:text-[#C9A24D]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Expertise
                        </h3>

                        <div className="mt-6 flex flex-col gap-4">
                            {expertiseLinks.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className="text-sm font-medium text-slate-300 transition hover:text-[#C9A24D]"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Contact
                        </h3>

                        <div className="mt-6 space-y-5 text-sm text-slate-300">
                            <div className="flex gap-4">
                                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                <span>info@llorickconsulting.com</span>
                            </div>

                            <div className="flex gap-4">
                                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                <span>+254 112 400 961</span>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                <span>Nairobi, Kenya • Global Engagements</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-white/10">
                <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between lg:px-8">
                    <p>
                        © {new Date().getFullYear()} Llorick Consulting. All
                        rights reserved.
                    </p>

                    <p className="flex flex-wrap items-center gap-1">
                        Designed & Developed by
                        <a
                            href="https://kennedymaurice.co.ke"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center font-semibold text-[#C9A24D] transition hover:text-white"
                        >
                            Kennedy Maurice
                            <ArrowRight className="ml-1 h-3 w-3" />
                        </a>
                    </p>
                </div>
            </section>
        </footer>
    );
};

export default Footer;
