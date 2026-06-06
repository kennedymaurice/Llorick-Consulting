// src/pages/Associates/Associates.jsx

import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    GraduationCap,
    Landmark,
    Leaf,
    Megaphone,
    Microscope,
    Network,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

const expertiseAreas = [
    {
        title: "Global Health Specialists",
        description:
            "Professionals with experience in international health programs, technical assistance, disease prevention, health promotion, and health systems strengthening.",
        areas: [
            "Global Health Strategy",
            "Public Health Programming",
            "International Development",
            "Technical Advisory Services",
            "Health Equity and Access",
        ],
        icon: Network,
    },
    {
        title: "Public Health Practitioners",
        description:
            "Experts with practical experience designing, implementing, and evaluating public health interventions across diverse contexts.",
        areas: [
            "Community Health",
            "Disease Prevention",
            "Health Promotion",
            "Population Health",
            "Public Health Surveillance",
        ],
        icon: ShieldCheck,
    },
    {
        title: "Researchers and Academics",
        description:
            "Researchers and scholars supporting evidence generation, scientific inquiry, implementation science, and knowledge dissemination.",
        areas: [
            "Epidemiology",
            "Research Design",
            "Operational Research",
            "Scientific Writing",
            "Knowledge Translation",
            "Implementation Science",
        ],
        icon: Microscope,
    },
    {
        title: "Monitoring, Evaluation and Learning Specialists",
        description:
            "Professionals dedicated to measuring results, generating insights, and strengthening accountability.",
        areas: [
            "Monitoring Systems",
            "Evaluation Design",
            "Impact Assessment",
            "Learning Frameworks",
            "Data Analytics",
            "Results Measurement",
        ],
        icon: BarChart3,
    },
    {
        title: "Policy and Governance Advisors",
        description:
            "Experts supporting institutions to strengthen policy frameworks, governance structures, and strategic decision-making processes.",
        areas: [
            "Policy Development",
            "Policy Analysis",
            "Strategic Planning",
            "Governance Assessments",
            "Regulatory Frameworks",
            "Institutional Reform",
        ],
        icon: Landmark,
    },
    {
        title: "Capacity Building and Learning Professionals",
        description:
            "Specialists focused on strengthening individual, organizational, and system-wide capabilities.",
        areas: [
            "Leadership Development",
            "Adult Learning",
            "Organizational Development",
            "Professional Training",
            "Technical Capacity Building",
            "Mentorship and Coaching",
        ],
        icon: GraduationCap,
    },
    {
        title: "Climate, Nutrition and Sustainability Experts",
        description:
            "Professionals working at the intersection of environmental sustainability, nutrition, resilience, and population health.",
        areas: [
            "Climate and Health",
            "Sustainable Food Systems",
            "Nutrition Programming",
            "Environmental Health",
            "Resilience Building",
            "Sustainable Development",
        ],
        icon: Leaf,
    },
    {
        title: "Strategic Communication and Knowledge Management Specialists",
        description:
            "Experts supporting organizations in communicating evidence, influencing policy dialogue, and strengthening stakeholder engagement.",
        areas: [
            "Strategic Communication",
            "Knowledge Management",
            "Advocacy",
            "Public Engagement",
            "Technical Writing",
            "Data Visualization",
        ],
        icon: Megaphone,
    },
];

const Associates = () => {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
                    <div className="max-w-5xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Associates & Experts
                        </div>

                        <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                            Diverse Expertise. Shared Purpose. Collective
                            Impact.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Llorick Consulting brings together a
                                multidisciplinary network of professionals,
                                researchers, technical specialists, policy
                                advisors, trainers, and development
                                practitioners committed to advancing public
                                health and sustainable development.
                            </p>

                            <p>
                                Our collaborative model enables us to assemble
                                the right expertise for every assignment,
                                ensuring that clients benefit from a broad range
                                of perspectives, skills, and experience tailored
                                to their specific needs.
                            </p>

                            <p>
                                Together, we work to transform evidence into
                                action and action into lasting impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Network Approach */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <Network className="h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Network Approach
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Flexible expertise for complex public health and
                            development assignments.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Today&apos;s challenges are increasingly
                            interconnected.
                        </p>

                        <p>
                            Public health outcomes are influenced by governance,
                            research, climate change, nutrition, economics,
                            policy, education, community systems, and
                            institutional capacity.
                        </p>

                        <p>
                            No single discipline can adequately address these
                            complexities.
                        </p>

                        <p>
                            Llorick Consulting operates through a flexible and
                            collaborative network model that allows us to engage
                            specialists from diverse fields to deliver
                            comprehensive and context-appropriate solutions.
                        </p>

                        <p>
                            This approach strengthens the quality of our work
                            while enabling us to respond effectively to
                            assignments of varying scope, scale, and complexity.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="bg-[#F8FAFC] py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Areas of Expertise Within Our Network
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            A multidisciplinary expert network aligned to
                            institutional priorities.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 lg:grid-cols-2">
                        {expertiseAreas.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="border-b border-slate-200 p-8">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="mt-6 text-2xl font-bold text-[#0F172A]">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 leading-7 text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>

                                    <div className="bg-white p-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                            Areas of expertise may include
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            {item.areas.map((area) => (
                                                <div
                                                    key={area}
                                                    className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4"
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

            {/* How We Work */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            How We Work
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Assembling the right expertise for each assignment.
                        </h2>
                    </div>

                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <div className="space-y-6 text-lg leading-9 text-slate-600">
                            <p>
                                For each assignment, Llorick Consulting
                                identifies the expertise required to achieve the
                                desired outcomes.
                            </p>

                            <p>
                                Depending on the nature of the project,
                                engagements may involve individual specialists,
                                multidisciplinary teams, or broader
                                collaborative arrangements that bring together
                                complementary technical expertise.
                            </p>

                            <p>
                                This model allows us to remain agile while
                                maintaining high standards of quality,
                                professionalism, and accountability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Leadership */}
            <section className="bg-[#0F172A] py-24 text-white">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <div className="relative mb-8 h-36 w-36 overflow-hidden rounded-[2rem] border border-[#C9A24D]/30 bg-white/5 shadow-2xl">
                            <img
                                src="/erick.jpg"
                                alt="Erick Agure"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Leadership
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Erick Agure
                        </h2>

                        <p className="mt-4 text-xl font-semibold text-[#C9A24D]">
                            Founder & Lead Consultant
                        </p>

                        <Link
                            to="/leadership"
                            className="mt-8 inline-flex items-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                        >
                            View Leadership Profile
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-300">
                        <p>
                            Erick Agure is a global health professional,
                            researcher, policy advisor, and development
                            practitioner with experience spanning public health,
                            international development, research, monitoring and
                            evaluation, policy engagement, strategic
                            communication, and capacity building.
                        </p>

                        <p>
                            His professional journey includes engagements,
                            collaborations, and leadership experiences across
                            Africa, Europe, and North America, contributing to
                            initiatives involving global health, development,
                            research, sustainability, and institutional
                            strengthening.
                        </p>

                        <p>
                            As Founder and Lead Consultant, he provides
                            strategic direction, technical leadership, and
                            quality oversight across Llorick Consulting&apos;s
                            work.
                        </p>
                    </div>
                </div>
            </section>

            {/* Collaborating for Greater Impact */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <Sparkles className="h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Collaborating for Greater Impact
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Meaningful change is achieved through collaboration.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Llorick Consulting recognizes that meaningful change
                            is achieved through collaboration.
                        </p>

                        <p>
                            We actively seek opportunities to engage with
                            consultants, researchers, institutions, trainers,
                            policy specialists, development practitioners, and
                            technical experts who share our commitment to
                            evidence-based solutions and sustainable impact.
                        </p>

                        <p>
                            By bringing together diverse expertise and
                            perspectives, we strengthen our collective ability
                            to address complex challenges and create lasting
                            value for the communities and organizations we
                            serve.
                        </p>
                    </div>
                </div>
            </section>

            {/* Join Network CTA */}
            <section className="pb-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-center text-white md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Join Our Expert Network
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Collaborate on future assignments, research
                            initiatives, training programs, and development
                            projects.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            We welcome expressions of interest from
                            professionals and institutions interested in
                            collaborating on future assignments, research
                            initiatives, training programs, and development
                            projects.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Explore Opportunities
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Become an Associate
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Connect With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Associates;
