import { Link } from "react-router-dom";
import {
    ArrowRight,
    Award,
    BookOpen,
    Compass,
    Globe2,
    Handshake,
    Lightbulb,
    LineChart,
    Microscope,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

const pillars = [
    {
        title: "Research",
        value: "Evidence Generation",
    },
    {
        title: "Policy",
        value: "Strategic Advisory",
    },
    {
        title: "Systems",
        value: "Health Strengthening",
    },
    {
        title: "Capacity",
        value: "Institutional Growth",
    },
];

const values = [
    {
        title: "Excellence",
        description:
            "We pursue the highest standards of professionalism, technical quality, and service in every engagement. We are committed to delivering work that is rigorous, credible, and impactful.",
        icon: Award,
    },
    {
        title: "Integrity",
        description:
            "We conduct our work with honesty, transparency, accountability, and ethical responsibility. Trust remains the foundation of our relationships and partnerships.",
        icon: ShieldCheck,
    },
    {
        title: "Evidence",
        description:
            "We believe that effective decisions and sustainable solutions must be informed by credible evidence, research, data, and contextual understanding. Evidence is at the heart of our approach.",
        icon: Microscope,
    },
    {
        title: "Collaboration",
        description:
            "We recognize that meaningful progress is achieved through partnership, dialogue, and collective action. We value diverse perspectives and foster collaborative relationships that strengthen outcomes.",
        icon: Handshake,
    },
    {
        title: "Innovation",
        description:
            "We embrace curiosity, creativity, and continuous learning in the pursuit of solutions that respond to evolving challenges and opportunities.",
        icon: Lightbulb,
    },
    {
        title: "Impact",
        description:
            "We focus on creating lasting value by strengthening institutions, improving systems, empowering people, and contributing to healthier and more resilient communities.",
        icon: Target,
    },
];

const principles = [
    {
        title: "Evidence",
        description:
            "Understanding challenges through research, data, knowledge, and experience.",
        icon: Microscope,
    },
    {
        title: "Strategy",
        description:
            "Designing practical, context-sensitive, and scalable solutions.",
        icon: LineChart,
    },
    {
        title: "Impact",
        description:
            "Creating measurable improvements that strengthen systems and improve lives.",
        icon: Users,
    },
];

const approach = [
    {
        step: "01",
        title: "Understand",
        description:
            "We begin by understanding the context, stakeholders, challenges, data, and institutional priorities.",
    },
    {
        step: "02",
        title: "Design",
        description:
            "We develop evidence-based strategies, frameworks, programs, tools, and interventions that respond to real needs.",
    },
    {
        step: "03",
        title: "Implement",
        description:
            "We support practical implementation through technical assistance, capacity building, coordination, and advisory support.",
    },
    {
        step: "04",
        title: "Learn",
        description:
            "We help institutions monitor progress, evaluate results, document lessons, and improve future action.",
    },
];

const institutions = [
    "World Bank",
    "World Health Organization",
    "UNAIDS",
    "Royal Society of Tropical Medicine and Hygiene",
    "Heidelberg University",
    "University of Bonn",
    "Mandela Washington Fellowship",
];

const About = () => {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}

            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-5 md:gap-12 px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                    <div>
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            About Llorick Consulting
                        </div>

                        <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-white md:text-6xl">
                            A global health advisory firm built on evidence,
                            purpose, and sustainable impact.
                        </h1>

                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            Llorick Consulting helps institutions design
                            evidence-based solutions for stronger health
                            systems, better decisions, and healthier
                            communities. We bring together research, policy,
                            implementation, capacity building, and systems
                            thinking to help organizations move from evidence to
                            action.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/services"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Explore Our Services
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Discuss Your Project
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur md:p-6 lg:p-8">
                            <div className="mb-6 h-64 overflow-hidden rounded-[1.5rem] border border-white/10 sm:h-80 lg:h-64">
                                <div className="relative h-full w-full">
                                    <img
                                        src="/public-health.webp"
                                        alt="Global public health advisory"
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/40 via-transparent to-[#C9A24D]/20" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {pillars.map((item) => (
                                    <div
                                        key={item.title}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                    >
                                        <p className="text-sm font-semibold text-[#C9A24D]">
                                            {item.title}
                                        </p>

                                        <p className="mt-2 text-xs text-slate-400">
                                            {item.value}
                                        </p>

                                        <div className="mt-3 h-2 rounded-full bg-white/10">
                                            <div className="h-2 w-2/3 rounded-full bg-[#C9A24D]" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            <section className="py-6 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Who We Are
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Bridging research, policy, implementation, and
                            systems thinking.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Llorick Consulting is a global health, research,
                            policy, and development advisory firm committed to
                            helping institutions design evidence-based solutions
                            for stronger health systems and healthier
                            communities.
                        </p>

                        <p>
                            We support governments, development partners, NGOs,
                            research institutions, universities, healthcare
                            organizations, and private-sector actors in
                            addressing complex public health and development
                            challenges.
                        </p>

                        <p>
                            Our work brings together research, policy,
                            implementation, capacity building, and systems
                            thinking to help organizations move from evidence to
                            action.
                        </p>
                    </div>
                </div>
            </section>

            {/* Purpose / Mission / Vision */}
            <section className="bg-[#F8FAFC] py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 lg:grid-cols-3">
                        <article className="rounded-[1.5rem] bg-[#0F172A] p-8 text-white shadow-sm">
                            <div className="flex items-center gap-3">
                                <Compass className="h-9 w-9 text-[#C9A24D]" />

                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                    Our Purpose
                                </p>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold">
                                Bridging evidence, policy, and practice.
                            </h3>
                            <p className="mt-5 leading-7 text-slate-300">
                                Llorick Consulting exists to bridge evidence,
                                policy, and practice in order to strengthen
                                health systems, empower institutions, and
                                contribute to sustainable development outcomes
                                that improve lives and communities.
                            </p>
                        </article>

                        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Globe2 className="h-9 w-9 text-[#C9A24D]" />

                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                    Our Vision
                                </p>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-[#0F172A]">
                                Healthier, more resilient, and more equitable
                                societies.
                            </h3>
                            <p className="mt-5 leading-7 text-slate-600">
                                A world where evidence-driven decisions create
                                healthier, more resilient, and more equitable
                                societies. We envision a future where
                                governments, institutions, communities, and
                                development partners are equipped with the
                                knowledge, capacity, and systems needed to
                                address complex health and development
                                challenges effectively and sustainably.
                            </p>
                        </article>

                        <article className="rounded-[1.5rem] border border-slate-200 bg-white p-8 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Target className="h-9 w-9 text-[#C9A24D]" />

                                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                    Our Mission
                                </p>
                            </div>
                            <h3 className="mt-4 text-2xl font-bold text-[#0F172A]">
                                Advancing public health and sustainable
                                development.
                            </h3>
                            <p className="mt-5 leading-7 text-slate-600">
                                To advance public health and sustainable
                                development through evidence-based advisory,
                                research, capacity strengthening, and strategic
                                partnerships. We work with governments,
                                development agencies, research institutions,
                                healthcare organizations, and communities to
                                design practical solutions, strengthen systems,
                                generate knowledge, and create measurable
                                impact.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Core Values
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            The principles that guide our work and partnerships.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {values.map((value) => {
                            const Icon = value.icon;

                            return (
                                <article
                                    key={value.title}
                                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D] transition group-hover:bg-[#C9A24D] group-hover:text-[#0F172A]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight text-[#0F172A]">
                                            {value.title}
                                        </h3>
                                    </div>

                                    <div className="mt-5 h-px bg-slate-100" />

                                    <p className="mt-5 text-sm leading-7 text-slate-600">
                                        {value.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Guiding Principle */}
            <section className="bg-[#0F172A] py-6 md:py-16 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Our Guiding Principle
                            </p>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Evidence. Strategy. Impact.
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                These three principles define how we work.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {principles.map((principle) => {
                                const Icon = principle.icon;

                                return (
                                    <article
                                        key={principle.title}
                                        className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Icon className="h-7 w-7 shrink-0 text-[#C9A24D]" />

                                            <h3 className="text-xl font-bold leading-tight text-white">
                                                {principle.title}
                                            </h3>
                                        </div>

                                        <div className="mt-4 h-px bg-white/10" />

                                        <p className="mt-4 text-sm leading-7 text-slate-300">
                                            {principle.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Positioning */}
            <section className="py-6 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Positioning
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            At the intersection of global health, research,
                            policy, & implementation.
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Llorick Consulting exists at the intersection of
                            global health, research, policy, and implementation.
                        </p>

                        <p>
                            We understand that sustainable public health impact
                            requires more than technical knowledge. It requires
                            evidence, strategy, institutional capacity,
                            collaboration, and practical implementation.
                        </p>

                        <p>
                            Our role is to help institutions make better
                            decisions, design stronger programs, measure
                            progress, and deliver meaningful impact.
                        </p>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="bg-[#F8FAFC] py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Approach
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            A practical pathway from evidence to action.
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-4">
                        {approach.map((item) => (
                            <article
                                key={item.title}
                                className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#C9A24D]/30 bg-[#C9A24D]/10 text-sm font-bold text-[#C9A24D]">
                                        {item.step}
                                    </span>

                                    <h3 className="text-2xl font-bold leading-tight text-[#0F172A]">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="mt-5 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="py-6 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-white md:p-12">
                        <div className="flex items-center gap-3">
                            <BookOpen className="h-8 w-8 text-[#C9A24D]" />

                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Leadership
                            </p>
                        </div>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Led by global health experience and institutional
                            perspective.
                        </h2>

                        <Link
                            to="/leadership"
                            className="mt-8 inline-flex items-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                        >
                            View Leadership Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div>
                        <div className="space-y-4 md:space-y-6 text-lg leading-9 text-slate-600">
                            <p>
                                Llorick Consulting was founded by Erick Agure, a
                                global health and public health professional
                                with experience spanning international
                                development, research, policy engagement, health
                                systems, advocacy, monitoring and evaluation,
                                and capacity building.
                            </p>

                            <p>
                                His professional journey includes work and
                                engagements connected to leading global
                                institutions, including the World Bank, World
                                Health Organization, UNAIDS, Royal Society of
                                Tropical Medicine and Hygiene, Heidelberg
                                University, University of Bonn, and the Mandela
                                Washington Fellowship.
                            </p>

                            <p>
                                Through Llorick Consulting, this global
                                experience is translated into a structured
                                advisory platform serving institutions,
                                programs, and communities seeking sustainable
                                health impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Outlook */}
            <section className="bg-[#0F172A] py-6 md:py-16 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                        <div>
                            <div className="flex items-center gap-3">
                                <Sparkles className="h-8 w-8 text-[#C9A24D]" />

                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                    Our Global Outlook
                                </p>
                            </div>
                            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Global perspective. Grounded understanding.
                            </h2>
                        </div>

                        <div className="space-y-4 md:space-y-6 text-lg leading-9 text-slate-300">
                            <p>
                                Public health challenges are increasingly
                                interconnected. Climate change, nutrition,
                                infectious diseases, health systems, migration,
                                inequality, and sustainable development all
                                demand integrated and evidence-driven responses.
                            </p>

                            <p>
                                Llorick Consulting brings a global perspective
                                with a grounded understanding of local
                                realities, helping partners design solutions
                                that are technically sound, contextually
                                relevant, and practically implementable.
                            </p>

                            <Link
                                to="/contact"
                                className="inline-flex items-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Discuss a Partnership
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;
