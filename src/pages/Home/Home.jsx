import { Link } from "react-router-dom";
import {
    ArrowRight,
    Globe2,
    Landmark,
    Microscope,
    Network,
    GraduationCap,
    BarChart3,
    Leaf,
    ShieldCheck,
    Users,
    LineChart,
} from "lucide-react";

const services = [
    {
        title: "Global Health Advisory",
        description:
            "Strategic technical assistance for public health programs, development initiatives, and institutional health priorities.",
        icon: Globe2,
    },
    {
        title: "Health Systems Strengthening",
        description:
            "Support for organizations seeking to improve service delivery, workforce capacity, governance, and health system performance.",
        icon: ShieldCheck,
    },
    {
        title: "Research, Evidence & Learning",
        description:
            "Research design, epidemiological studies, operational research, implementation science, and evidence synthesis.",
        icon: Microscope,
    },
    {
        title: "Monitoring, Evaluation & Learning",
        description:
            "MEL frameworks, program evaluations, impact assessments, performance tracking, and learning systems.",
        icon: BarChart3,
    },
    {
        title: "Policy & Governance Advisory",
        description:
            "Policy analysis, strategic planning, stakeholder engagement, governance frameworks, and institutional advisory support.",
        icon: Landmark,
    },
    {
        title: "Capacity Building & Training",
        description:
            "Professional training, leadership development, technical workshops, mentorship, and organizational learning programs.",
        icon: GraduationCap,
    },
    {
        title: "Climate, Nutrition & Sustainable Development",
        description:
            "Advisory support at the intersection of climate change, nutrition, food systems, sustainability, and public health.",
        icon: Leaf,
    },
];

const credibility = [
    "World Bank consulting exposure",
    "WHO research and documentation experience",
    "UNAIDS regional advocacy and policy engagement",
    "RSTMH global health ambassadorship",
    "Mandela Washington Fellowship",
    "European academic and research training",
];

const framework = [
    {
        title: "Evidence",
        description:
            "We generate, interpret, and apply research and data to support informed decision-making.",
        icon: Microscope,
    },
    {
        title: "Strategy",
        description:
            "We help institutions design practical, context-sensitive, and scalable public health solutions.",
        icon: LineChart,
    },
    {
        title: "Impact",
        description:
            "We support implementation, learning, and systems improvement to create sustainable outcomes.",
        icon: Users,
    },
];

const Home = () => {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-5 md:gap-12 px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
                    <div>
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            <Globe2 className="h-4 w-4 text-[#C9A24D]" />
                            Global Health • Research • Policy • Development
                            Advisory
                        </div>

                        <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Advancing Global Health Through Evidence, Strategy,
                            and Impact.
                        </h1>

                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            Llorick Consulting partners with governments,
                            development agencies, NGOs, research institutions,
                            and healthcare organizations to design
                            evidence-based solutions that strengthen systems,
                            inform policy, and improve population health
                            outcomes.
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Explore About Us
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
                                        src="/hero.webp"
                                        alt="Global public health advisory"
                                        className="h-full w-full object-cover"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/50 via-transparent to-[#C9A24D]/25" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Evidence",
                                    "Strategy",
                                    "Partnerships",
                                    "Impact",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                    >
                                        <p className="text-sm font-semibold text-[#C9A24D]">
                                            {item}
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

            {/* Credibility Strip */}
            <section className="bg-[#F8FAFC] py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-5 md:gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Institutional Experience
                            </p>
                            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0F172A] md:text-4xl">
                                Global health. Research. Policy. Development
                                advisory.
                            </h2>
                            <p className="mt-5 text-base leading-8 text-slate-600">
                                Experience informed by work across international
                                development, public health research, policy
                                engagement, health systems, monitoring and
                                evaluation, and capacity-building initiatives.
                            </p>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            {credibility.map((item) => (
                                <div
                                    key={item}
                                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                >
                                    <p className="flex gap-3 text-sm font-semibold text-slate-700">
                                        <span className="mt-1 h-2 w-2 rounded-full bg-[#C9A24D]" />
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Preview */}
            <section className="bg-white py-6 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-7 md:gap-12 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
                    <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                        <img
                            src="/about.webp"
                            alt="Public health leadership and advisory"
                            className="h-[500px] w-full object-cover"
                        />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A24D]">
                            About Llorick Consulting
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            A Global Health Advisory Firm Built on Evidence and
                            Purpose.
                        </h2>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Llorick Consulting is a public health, research,
                            policy, and development advisory firm supporting
                            institutions to translate evidence into practical
                            solutions. We work across the public health and
                            development ecosystem to strengthen programs,
                            improve decision-making, support implementation, and
                            build institutional capacity.
                        </p>

                        <p className="mt-5 text-lg leading-8 text-slate-600">
                            Our work is grounded in technical expertise, global
                            exposure, community understanding, and a deep
                            commitment to sustainable health outcomes.
                        </p>

                        <Link
                            to="/about"
                            className="mt-6 inline-flex items-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                        >
                            Learn About Llorick
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="bg-[#F8FAFC] py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            What We Do
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Core Service Areas
                        </h2>
                    </div>

                    <div className="mt-7 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.title}
                                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D] transition group-hover:bg-[#C9A24D] group-hover:text-[#0F172A]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="text-xl font-bold leading-tight text-[#0F172A]">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <div className="mt-5 h-px w-full bg-slate-200" />

                                    <p className="mt-5 text-sm leading-7 text-slate-600">
                                        {service.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Signature Framework */}
            <section className="py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Signature Framework
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Evidence. Strategy. Impact.
                        </h2>
                    </div>

                    <div className="mt-7 md:mt-12 grid gap-6 md:grid-cols-3">
                        {framework.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-[1.5rem] border border-slate-200 p-6"
                                >
                                    <div className="flex items-center gap-5">
                                        <Icon className="h-7 w-7 shrink-0 text-[#C9A24D]" />

                                        <h3 className="text-2xl font-bold leading-tight text-[#0F172A]">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-5 leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Global Experience */}
            <section className="bg-slate-50 py-6 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-7 md:gap-12 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A24D]">
                            Global Experience
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Informed by Global Public Health Practice.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Llorick Consulting draws from experience across
                            Africa, Europe, and North America, with exposure to
                            global health institutions, development agencies,
                            research environments, community health systems, and
                            policy platforms.
                        </p>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            This unique perspective enables us to understand
                            public health challenges from the community level to
                            the global policy level.
                        </p>

                        <div className="mt-6 md:mt-10 grid gap-5 sm:grid-cols-3">
                            {["Africa", "Europe", "North America"].map(
                                (region) => (
                                    <div
                                        key={region}
                                        className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
                                    >
                                        <p className="font-semibold text-[#0F172A]">
                                            {region}
                                        </p>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] shadow-2xl">
                        <img
                            src="/global-experience.webp"
                            alt="Global public health collaboration"
                            className="h-[550px] w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Insights Preview */}
            <section className="bg-white py-6 md:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 shadow-xl">
                        <div className="h-[350px] overflow-hidden">
                            <img
                                src="/research-insights.webp"
                                alt="Research and evidence generation"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="p-6 md:p-12">
                            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A24D]">
                                Research & Insights
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                Thinking for Healthier Systems and Stronger
                                Communities.
                            </h2>

                            <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
                                Explore insights on global health, health
                                systems, monitoring and evaluation, public
                                health policy, nutrition, climate and health,
                                and sustainable development.
                            </p>

                            <Link
                                to="/research-insights"
                                className="mt-8 inline-flex items-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                            >
                                View Insights
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="pb-6 md:pb-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-center text-white md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Work With Us
                        </p>
                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Looking for a Strategic Public Health Partner?
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Whether you are designing a health program,
                            strengthening institutional capacity, developing
                            policy, conducting research, or evaluating impact,
                            Llorick Consulting provides the expertise to support
                            your next step.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Start a Conversation
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
