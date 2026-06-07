import { Link } from "react-router-dom";
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    GraduationCap,
    Handshake,
    HeartHandshake,
    Landmark,
    Lightbulb,
    Microscope,
    Network,
    Scale,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const philosophy = [
    {
        title: "Shared Purpose",
        description:
            "A commitment to improving health outcomes, strengthening institutions, and creating sustainable impact.",
        icon: Target,
    },
    {
        title: "Mutual Respect",
        description:
            "Valuing diverse perspectives, expertise, and experiences.",
        icon: HeartHandshake,
    },
    {
        title: "Technical Excellence",
        description:
            "Delivering high-quality work informed by evidence, innovation, and best practices.",
        icon: ShieldCheck,
    },
    {
        title: "Accountability",
        description:
            "Maintaining transparency, integrity, and responsibility throughout every engagement.",
        icon: Scale,
    },
    {
        title: "Long-Term Impact",
        description:
            "Focusing on solutions that generate meaningful and lasting results.",
        icon: Sparkles,
    },
];

const partners = [
    {
        title: "Governments and Public Institutions",
        description:
            "We support ministries, departments, agencies, and public institutions in designing evidence-based strategies, strengthening systems, improving service delivery, and advancing public health goals.",
        areas: [
            "Policy development",
            "Strategic planning",
            "Health systems strengthening",
            "Monitoring and evaluation",
            "Capacity development",
            "Research and evidence generation",
        ],
        icon: Landmark,
    },
    {
        title: "Development Partners and Donor Agencies",
        description:
            "We collaborate with development organizations seeking technical expertise, research support, program design, implementation assistance, and learning solutions.",
        areas: [
            "Program development",
            "Technical assistance",
            "Impact assessment",
            "Capacity building",
            "Knowledge management",
            "Learning and adaptation",
        ],
        icon: Network,
    },
    {
        title: "Non-Governmental Organizations",
        description:
            "We support local, regional, and international NGOs working across health, development, nutrition, sustainability, and community empowerment.",
        areas: [
            "Program implementation support",
            "Monitoring and evaluation",
            "Organizational strengthening",
            "Research and learning",
            "Strategic communication",
            "Training and mentorship",
        ],
        icon: Users,
    },
    {
        title: "Research and Academic Institutions",
        description:
            "Research and innovation play a critical role in advancing public health and development. We collaborate with universities, think tanks, research centers, and academic institutions to generate evidence, strengthen knowledge translation, and promote interdisciplinary learning.",
        areas: [
            "Research projects",
            "Publications",
            "Knowledge dissemination",
            "Capacity strengthening",
            "Student mentorship",
            "Scientific communication",
        ],
        icon: Microscope,
    },
    {
        title: "Healthcare Organizations",
        description:
            "We support healthcare providers and health-focused organizations seeking to improve service quality, strengthen systems, build workforce capacity, and enhance organizational performance.",
        areas: [
            "Health systems improvement",
            "Workforce development",
            "Strategic planning",
            "Quality improvement",
            "Monitoring and evaluation",
        ],
        icon: Building2,
    },
    {
        title: "Foundations and Philanthropic Organizations",
        description:
            "We partner with foundations seeking evidence-informed approaches to maximize social impact and strengthen development outcomes.",
        areas: [
            "Program design",
            "Impact measurement",
            "Strategic advisory",
            "Research and learning",
            "Capacity development",
        ],
        icon: HeartHandshake,
    },
    {
        title: "Private Sector Organizations",
        description:
            "The private sector plays an important role in advancing health and sustainable development. Llorick Consulting works with businesses and social enterprises interested in creating positive social impact through responsible, evidence-based initiatives.",
        areas: [
            "Corporate social responsibility programs",
            "Health promotion initiatives",
            "Sustainability programs",
            "Community engagement",
            "Impact evaluation",
        ],
        icon: Building2,
    },
];

const partnershipModels = [
    {
        title: "Technical Advisory Partnerships",
        description:
            "Providing specialized expertise to strengthen programs, projects, policies, and institutional initiatives.",
        icon: ShieldCheck,
    },
    {
        title: "Consortium Partnerships",
        description:
            "Participating in multidisciplinary teams and consortium arrangements for large-scale assignments and development programs.",
        icon: Network,
    },
    {
        title: "Research Collaborations",
        description:
            "Working jointly on research projects, publications, evidence generation, and knowledge dissemination.",
        icon: Microscope,
    },
    {
        title: "Capacity Building Partnerships",
        description:
            "Designing and delivering learning programs, workshops, mentorship initiatives, and institutional strengthening activities.",
        icon: GraduationCap,
    },
    {
        title: "Knowledge and Innovation Partnerships",
        description:
            "Promoting innovation, thought leadership, policy dialogue, and knowledge exchange.",
        icon: Lightbulb,
    },
];

const Partnerships = () => {
    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Partnerships & Collaboration"
                description="Partner with Llorick Consulting through technical advisory, research collaborations, consortium partnerships, capacity-building initiatives, and development programs."
                path="/partnerships"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Partnerships
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Advancing Impact Through Strategic Partnerships.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Complex public health and development challenges
                                cannot be solved by a single organization
                                working alone.
                            </p>

                            <p>
                                Llorick Consulting believes that sustainable
                                progress is achieved through collaboration,
                                shared expertise, collective action, and
                                meaningful partnerships.
                            </p>

                            <p>
                                We work alongside governments, development
                                agencies, NGOs, research institutions,
                                universities, healthcare organizations,
                                foundations, and private-sector actors to design
                                and implement solutions that strengthen systems
                                and improve lives.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnership Philosophy */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Our Partnership Philosophy
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                We view partnerships as more than contractual
                                relationships.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Strong partnerships are built on shared purpose,
                                mutual respect, technical excellence,
                                accountability, and long-term impact.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {philosophy.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="group rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D] transition group-hover:bg-[#C9A24D] group-hover:text-[#0F172A]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <h3 className="text-xl font-bold leading-tight text-[#0F172A]">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            {item.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Partner With */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Who We Partner With
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Collaboration across public health, research,
                            development, and institutional systems.
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-2">
                        {partners.map((partner) => {
                            const Icon = partner.icon;

                            return (
                                <article
                                    key={partner.title}
                                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="border-b border-slate-200 p-6 md:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <h3 className="text-2xl font-bold leading-tight text-[#0F172A]">
                                                {partner.title}
                                            </h3>
                                        </div>

                                        <p className="mt-4 leading-7 text-slate-600">
                                            {partner.description}
                                        </p>
                                    </div>

                                    <div className="bg-[#F8FAFC] p-5 md:p-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                            Potential areas of collaboration
                                            include
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            {partner.areas.map((area) => (
                                                <div
                                                    key={area}
                                                    className="flex gap-3 rounded-2xl bg-white p-4"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                                    <p className="text-sm font-medium leading-6 text-slate-700">
                                                        {area}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Partnership Models */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Partnership Models
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                Flexible collaboration models tailored to
                                specific objectives and contexts.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Recognizing that every collaboration is unique,
                                we offer partnership approaches that respond to
                                the needs, scale, and strategic goals of each
                                engagement.
                            </p>
                        </div>

                        <div className="grid gap-5">
                            {partnershipModels.map((model) => {
                                const Icon = model.icon;

                                return (
                                    <article
                                        key={model.title}
                                        className="rounded-[1.5rem] border border-slate-200 bg-white p-5 md:p-7 shadow-sm"
                                    >
                                        <div className="flex gap-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-[#0F172A]">
                                                    {model.title}
                                                </h3>

                                                <p className="mt-3 leading-7 text-slate-600">
                                                    {model.description}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Global Perspective */}
            <section className="bg-[#0F172A] py-6 md:py-12 lg:py-16 text-white">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <div className="flex items-center gap-4">
                            <Handshake className="h-8 w-8 shrink-0 text-[#C9A24D]" />

                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                Global Perspective, Local Understanding
                            </p>
                        </div>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Technically sound solutions that remain responsive
                            to local realities.
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-lg leading-9 text-slate-300">
                        <p>
                            Our work is informed by experience and collaboration
                            across diverse cultural, institutional, and
                            geographic contexts.
                        </p>

                        <p>
                            We understand that effective solutions must be
                            technically sound while remaining responsive to
                            local realities, priorities, and stakeholder needs.
                        </p>

                        <p>
                            This perspective enables us to contribute
                            meaningfully to initiatives that operate at local,
                            national, regional, and global levels.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 text-center md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Let&apos;s Work Together
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Building partnerships that create measurable value
                            and lasting impact.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Whether you are seeking a technical advisor,
                            research collaborator, consortium partner, training
                            provider, or strategic thought partner, Llorick
                            Consulting is committed to building partnerships
                            that create measurable value and lasting impact.
                        </p>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                            We welcome opportunities to collaborate with
                            organizations that share a commitment to stronger
                            health systems, evidence-based decision-making, and
                            sustainable development.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                            >
                                Explore Collaboration Opportunities
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Discuss a Partnership
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Connect With Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Partnerships;
