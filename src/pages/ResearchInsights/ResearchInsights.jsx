import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpenText,
    Brain,
    CheckCircle2,
    Globe2,
    Landmark,
    Leaf,
    Microscope,
    Network,
    Sparkles,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const focusAreas = [
    {
        title: "Global Health",
        description:
            "Exploring emerging issues, innovations, and trends shaping health outcomes across local, regional, and international contexts.",
        topics: [
            "Universal Health Coverage",
            "Global Health Governance",
            "Health Equity",
            "Infectious Disease Control",
            "Pandemic Preparedness",
            "International Development",
        ],
        icon: Globe2,
    },
    {
        title: "Health Systems Strengthening",
        description:
            "Examining approaches that improve health service delivery, workforce performance, governance, financing, and institutional resilience.",
        topics: [
            "Health Workforce Development",
            "Service Delivery Improvement",
            "Quality of Care",
            "Health Financing",
            "Primary Healthcare",
            "Health Leadership",
        ],
        icon: Network,
    },
    {
        title: "Research, Evidence & Implementation Science",
        description:
            "Sharing insights on how evidence can be generated, interpreted, translated, and applied to improve decision-making and outcomes.",
        topics: [
            "Operational Research",
            "Epidemiology",
            "Implementation Science",
            "Knowledge Translation",
            "Scientific Communication",
            "Research Methods",
        ],
        icon: Microscope,
    },
    {
        title: "Monitoring, Evaluation & Learning",
        description:
            "Supporting organizations to measure progress, demonstrate results, and strengthen learning cultures.",
        topics: [
            "Program Evaluation",
            "Impact Measurement",
            "Data for Decision-Making",
            "Learning Frameworks",
            "Results-Based Management",
            "Adaptive Programming",
        ],
        icon: BarChart3,
    },
    {
        title: "Climate, Nutrition & Sustainable Development",
        description:
            "Investigating the growing intersection between environmental change, nutrition, food systems, and population health.",
        topics: [
            "Climate and Health",
            "Sustainable Food Systems",
            "Nutrition Security",
            "Community Resilience",
            "Sustainable Development Goals",
            "Environmental Health",
        ],
        icon: Leaf,
    },
    {
        title: "Policy & Governance",
        description:
            "Analyzing policies, regulatory environments, and governance structures that influence public health and development outcomes.",
        topics: [
            "Health Policy",
            "Governance and Accountability",
            "Strategic Planning",
            "Public Sector Reform",
            "Stakeholder Engagement",
            "Institutional Strengthening",
        ],
        icon: Landmark,
    },
];

const ResearchInsights = () => {
    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Research & Insights"
                description="Evidence-based insights on global health, public health policy, monitoring and evaluation, health systems strengthening, climate and health, nutrition, and sustainable development."
                path="/research-insights"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
                    <div>
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Research & Insights
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Insights That Inform Better Decisions.
                        </h1>

                        <div className="mt-7 max-w-3xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                At Llorick Consulting, we believe that evidence
                                is the foundation of sustainable progress. Our
                                Research & Insights platform serves as a hub for
                                thought leadership, evidence-based analysis,
                                practical reflections, and emerging perspectives
                                in global health, public health, development,
                                policy, and sustainability.
                            </p>

                            <p>
                                We share knowledge that bridges research,
                                policy, and implementation—helping
                                decision-makers, practitioners, researchers, and
                                institutions navigate complex challenges and
                                identify meaningful opportunities for impact.
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 md:p-8 shadow-2xl backdrop-blur">
                        <div className="flex items-center gap-4">
                            <Brain className="h-12 w-12 shrink-0 text-[#C9A24D]" />

                            <h2 className="text-3xl font-bold text-white">
                                Evidence for action.
                            </h2>
                        </div>

                        <p className="mt-5 leading-8 text-slate-300">
                            Translating complex evidence into accessible,
                            practical, and decision-ready knowledge for
                            institutions and leaders.
                        </p>

                        <div className="mt-8 grid gap-4">
                            {[
                                "Research",
                                "Policy",
                                "Implementation",
                                "Learning",
                                "Knowledge Translation",
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[#C9A24D]" />
                                    <span className="text-sm font-semibold text-slate-200">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Research Matters */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 md:p-8 lg:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Why Research Matters
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Better evidence leads to stronger decisions, better
                            programs, and greater accountability.
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-lg leading-8 text-slate-600">
                        <p>
                            Public health challenges continue to evolve in
                            complexity. From climate change and disease
                            outbreaks to health systems resilience and nutrition
                            security, today&apos;s decisions require robust
                            evidence, multidisciplinary thinking, and contextual
                            understanding.
                        </p>

                        <p>
                            Research not only generates knowledge—it strengthens
                            accountability, informs policy, improves programs,
                            and drives innovation.
                        </p>

                        <p>
                            At Llorick Consulting, we are committed to
                            contributing to conversations that shape healthier
                            communities, stronger institutions, and more
                            equitable societies.
                        </p>
                    </div>
                </div>
            </section>

            {/* Focus Areas */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Areas of Focus
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Themes shaping our research, commentary, and
                            knowledge-sharing.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {focusAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <article
                                    key={area.title}
                                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="border-b border-slate-200 p-6 md:p-8">
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <h3 className="text-2xl font-bold leading-tight text-[#0F172A]">
                                                {area.title}
                                            </h3>
                                        </div>

                                        <p className="mt-4 leading-7 text-slate-600">
                                            {area.description}
                                        </p>
                                    </div>

                                    <div className="p-6 md:p-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                            Topics may include
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            {area.topics.map((topic) => (
                                                <div
                                                    key={topic}
                                                    className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                                    <p className="text-sm font-medium leading-6 text-slate-700">
                                                        {topic}
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

            {/* Featured Publications */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Featured Publications and Commentary
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Translating complex evidence into accessible,
                            actionable knowledge.
                        </h2>

                        <Link
                            to="/insights"
                            className="mt-8 inline-flex items-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                        >
                            View Insights
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <div className="flex items-center gap-3">
                            <BookOpenText className="h-10 w-10 shrink-0 text-[#C9A24D]" />

                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Publications & Commentary
                            </p>
                        </div>

                        <div className="mt-7 space-y-6 text-lg leading-8 text-slate-600">
                            <p>
                                Llorick Consulting publishes evidence-informed
                                articles, policy commentaries, research
                                summaries, and technical insights designed to
                                support professionals, institutions, and
                                decision-makers.
                            </p>

                            <p>
                                Our publications aim to translate complex
                                evidence into accessible, actionable knowledge.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge for Action */}
            <section className="bg-[#0F172A] py-6 md:py-12 lg:py-16 text-white">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
                    <div>
                        <div className="flex items-center gap-3">
                            <Sparkles className="h-10 w-10 shrink-0 text-[#C9A24D]" />

                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Knowledge for Action
                            </p>
                        </div>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Research has the greatest value when it informs
                            meaningful action.
                        </h2>
                    </div>

                    <div className="space-y-4 md:space-y-6 text-lg leading-8 text-slate-300">
                        <p>
                            Through our insights platform, we seek to foster
                            informed dialogue, encourage evidence-based
                            decision-making, and contribute to practical
                            solutions that improve health and development
                            outcomes.
                        </p>

                        <p>
                            Whether you are a policymaker, researcher,
                            development practitioner, healthcare professional,
                            donor, or student, we invite you to engage with
                            ideas that advance healthier systems and stronger
                            communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Collaborate With Us */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 text-center md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Collaborate With Us
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Interested in research collaboration, publication
                            partnerships, policy dialogue, or knowledge-sharing
                            initiatives?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            We welcome opportunities to work with institutions,
                            researchers, development organizations, and
                            technical experts committed to advancing
                            evidence-driven impact.
                        </p>

                        <h3 className="mt-10 text-2xl font-bold text-[#0F172A]">
                            Let&apos;s turn evidence into action.
                        </h3>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                            >
                                Start a Collaboration
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Explore Partnerships
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ResearchInsights;
