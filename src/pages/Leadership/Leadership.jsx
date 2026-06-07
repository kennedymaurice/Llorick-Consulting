import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpenText,
    CheckCircle2,
    Globe2,
    GraduationCap,
    Handshake,
    Landmark,
    Leaf,
    Microscope,
    Network,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

const expertiseAreas = [
    "Global Health",
    "Public Health Systems",
    "Health Policy and Governance",
    "Monitoring, Evaluation and Learning",
    "Research and Evidence Generation",
    "Epidemiology and Implementation Science",
    "Strategic Communication and Advocacy",
    "Capacity Building and Leadership Development",
    "Climate, Nutrition and Health",
    "Sustainable Development",
];

const experienceAreas = [
    {
        title: "International Development and Global Health",
        description:
            "Supporting initiatives focused on public health, HIV response, health systems strengthening, strategic communication, policy engagement, and technical assistance.",
        icon: Globe2,
    },
    {
        title: "Research and Evidence Generation",
        description:
            "Contributing to research design, implementation, scientific communication, knowledge translation, and evidence-informed decision-making.",
        icon: Microscope,
    },
    {
        title: "Monitoring, Evaluation and Learning",
        description:
            "Supporting organizations in measuring performance, evaluating outcomes, strengthening accountability, and promoting organizational learning.",
        icon: BarChart3,
    },
    {
        title: "Capacity Building and Leadership Development",
        description:
            "Designing and facilitating learning opportunities that strengthen technical expertise, institutional effectiveness, and leadership capacity.",
        icon: GraduationCap,
    },
];

const regions = [
    {
        title: "Africa",
        description:
            "Public health programming, development initiatives, research, policy engagement, advocacy, and institutional strengthening.",
    },
    {
        title: "Europe",
        description:
            "Global health research, academic collaboration, sustainable development initiatives, and interdisciplinary learning.",
    },
    {
        title: "North America",
        description:
            "Leadership development, policy dialogue, international cooperation, and professional exchange programs.",
    },
];

const selectedInterests = [
    "Global Health and Development",
    "Health Systems Strengthening",
    "Climate Change and Health",
    "Nutrition and Food Systems",
    "Research and Implementation Science",
    "Public Health Policy",
    "Monitoring and Evaluation",
    "Leadership and Capacity Building",
    "Sustainable Development",
    "Evidence-Informed Decision-Making",
];

const Leadership = () => {
    return (
        <main className="bg-white text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto grid max-w-7xl gap-14 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-32">
                    <div>
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Leadership & Expertise
                        </div>

                        <h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">
                            Bridging Research, Policy, and Practice to Advance
                            Global Health.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Erick Agure is a global health professional,
                                researcher, policy advisor, and development
                                practitioner whose work spans public health,
                                international development, health systems
                                strengthening, research, monitoring and
                                evaluation, strategic communication, and
                                capacity building.
                            </p>

                            <p>
                                With experience across Africa, Europe, and North
                                America, he has contributed to initiatives that
                                strengthen institutions, inform policy, generate
                                evidence, and improve health outcomes for
                                communities and populations.
                            </p>

                            <p>
                                As Founder and Lead Consultant of Llorick
                                Consulting, Erick provides strategic leadership
                                and technical oversight across the firm&apos;s
                                advisory, research, training, and development
                                engagements.
                            </p>
                        </div>
                    </div>
                    <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl backdrop-blur">
                        <div className="relative">
                            <img
                                src="/eric.jpg"
                                alt="Erick Agure"
                                className="h-[320px] w-full object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/30 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#C9A24D]">
                                    Founder & Lead Consultant
                                </p>

                                <h2 className="mt-3 text-4xl font-bold text-white">
                                    Erick Agure
                                </h2>
                            </div>
                        </div>

                        <div className="p-8">
                            <p className="leading-8 text-slate-300">
                                Global health professional, researcher, policy
                                advisor, and development practitioner with
                                experience across Africa, Europe, and North
                                America.
                            </p>

                            <div className="mt-8 grid grid-cols-2 gap-3">
                                {[
                                    "Global Health",
                                    "Research",
                                    "Policy Advisory",
                                    "Health Systems",
                                    "MEL",
                                    "Capacity Building",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-center"
                                    >
                                        <p className="text-sm font-semibold text-slate-200">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 rounded-2xl border border-[#C9A24D]/20 bg-[#C9A24D]/10 p-5">
                                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                    Guiding Principle
                                </p>

                                <p className="mt-3 text-lg font-semibold text-white">
                                    Evidence. Strategy. Impact.
                                </p>
                            </div>
                        </div>
                    </aside>{" "}
                </div>
            </section>

            {/* Global Perspective */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <Globe2 className="h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            A Global Perspective on Health and Development
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Working at the intersection of public health,
                            research, policy, and sustainable development.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Throughout his career, Erick has worked at the
                            intersection of public health, research, policy, and
                            sustainable development.
                        </p>

                        <p>
                            His professional journey has included engagements
                            with international organizations, development
                            agencies, academic institutions, and public health
                            initiatives focused on strengthening systems,
                            improving outcomes, and promoting evidence-based
                            decision-making.
                        </p>

                        <p>
                            This experience has enabled him to develop a
                            multidisciplinary perspective that combines
                            technical expertise, practical implementation
                            experience, and an appreciation of the broader
                            social, economic, and environmental factors that
                            influence health and development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="bg-[#F8FAFC] py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
                    <div className="lg:sticky lg:top-28">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Areas of Expertise
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            A multidisciplinary practice spanning research,
                            policy, systems, and development.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            Erick&apos;s work focuses on a broad set of
                            interconnected global health and public health
                            priorities.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {expertiseAreas.map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                <p className="font-medium leading-7 text-slate-700">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Experience */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Professional Experience
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                Experience across public institutions,
                                international organizations, development
                                agencies, research institutions, and academic
                                environments.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                His professional engagements have included
                                contributions in several key areas of public
                                health and development.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {experienceAreas.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article
                                        key={item.title}
                                        className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
                                    >
                                        <div className="flex gap-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-[#0F172A]">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-3 leading-7 text-slate-600">
                                                    {item.description}
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

            {/* International Exposure */}
            <section className="bg-[#0F172A] py-24 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <Network className="h-10 w-10 text-[#C9A24D]" />

                            <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                International Exposure and Collaboration
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Collaboration, learning, research, and
                                professional engagement across diverse global
                                contexts.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Erick&apos;s work and academic engagements have
                                provided opportunities to collaborate with
                                professionals, researchers, policymakers, and
                                institutions across diverse global contexts.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {regions.map((region) => (
                                <article
                                    key={region.title}
                                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                                >
                                    <h3 className="text-2xl font-bold text-white">
                                        {region.title}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        {region.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-8">
                        <p className="text-lg leading-8 text-slate-300">
                            This international exposure informs a broader
                            understanding of global health challenges while
                            maintaining sensitivity to local realities and
                            priorities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Academic Background */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <BookOpenText className="h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Academic and Research Background
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            A strong commitment to evidence, learning, and
                            innovation.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Erick&apos;s academic journey reflects a strong
                            commitment to evidence, learning, and innovation.
                        </p>

                        <p>
                            His educational and research interests focus on
                            strengthening health systems, improving public
                            health outcomes, and understanding the
                            interconnected relationships between climate change,
                            nutrition, sustainability, and population health.
                        </p>

                        <p>
                            His work emphasizes the role of evidence in
                            informing policy, improving programs, and supporting
                            sustainable development.
                        </p>
                    </div>
                </div>
            </section>

            {/* Thought Leadership */}
            <section className="bg-[#F8FAFC] py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Thought Leadership and Knowledge Sharing
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Promoting dialogue, learning, and knowledge
                            exchange.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Beyond technical engagements, Erick is passionate
                            about promoting dialogue, learning, and knowledge
                            exchange.
                        </p>

                        <p>
                            He has participated in conferences, workshops,
                            symposiums, professional forums, and leadership
                            initiatives that bring together researchers,
                            practitioners, policymakers, and development
                            professionals to address emerging global health
                            challenges.
                        </p>

                        <p>
                            His commitment to knowledge sharing reflects a
                            belief that meaningful progress depends on
                            collaboration, continuous learning, and the
                            effective translation of evidence into action.
                        </p>
                    </div>
                </div>
            </section>

            {/* Leadership Philosophy */}
            <section className="py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-white md:p-12">
                        <Handshake className="h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Leadership Philosophy
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Technical excellence, humility, collaboration, and
                            service.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Erick believes that effective leadership requires a
                            combination of technical excellence, humility,
                            collaboration, and service.
                        </p>

                        <p>
                            His approach is grounded in the conviction that
                            sustainable impact is achieved when institutions are
                            strengthened, communities are empowered, and
                            decisions are informed by credible evidence.
                        </p>

                        <p>
                            Through Llorick Consulting, he seeks to contribute
                            to solutions that improve health outcomes,
                            strengthen systems, and create opportunities for
                            healthier and more resilient communities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Selected Areas of Interest */}
            <section className="bg-[#F8FAFC] py-24">
                <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
                    <div className="lg:sticky lg:top-28">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Selected Areas of Interest
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Focus areas shaping his advisory, research, and
                            development work.
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {selectedInterests.map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                            >
                                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                <p className="font-medium leading-7 text-slate-700">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Looking Forward */}
            <section className="py-24">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-center text-white md:p-16">
                        <Sparkles className="mx-auto h-10 w-10 text-[#C9A24D]" />

                        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Looking Forward
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Advancing solutions that create lasting public
                            health and development impact.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            The future of public health will require stronger
                            collaboration, innovative thinking, evidence-based
                            action, and resilient systems capable of responding
                            to emerging challenges.
                        </p>

                        <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
                            Through Llorick Consulting, Erick remains committed
                            to working alongside governments, institutions,
                            development partners, researchers, and communities
                            to advance solutions that create lasting impact.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Connect With Erick
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Explore Collaboration Opportunities
                            </Link>

                            <Link
                                to="/about"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Learn More About Llorick Consulting
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Leadership;
