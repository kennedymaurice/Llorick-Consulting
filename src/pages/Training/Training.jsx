import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    BookOpenText,
    CheckCircle2,
    ClipboardList,
    GraduationCap,
    Landmark,
    Leaf,
    Lightbulb,
    LineChart,
    Microscope,
    MonitorPlay,
    Network,
    Presentation,
    Target,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const philosophy = [
    {
        title: "Practical",
        description:
            "We focus on knowledge and skills that can be immediately applied in professional settings.",
        icon: Target,
    },
    {
        title: "Evidence-Based",
        description:
            "Training content is informed by current research, global best practices, and emerging trends.",
        icon: Microscope,
    },
    {
        title: "Participatory",
        description:
            "We encourage engagement, collaboration, dialogue, and peer learning.",
        icon: Users,
    },
    {
        title: "Context-Sensitive",
        description:
            "Programs are adapted to the realities and priorities of each organization, sector, and audience.",
        icon: Network,
    },
    {
        title: "Impact-Oriented",
        description:
            "Learning outcomes are linked to improved performance, decision-making, and organizational effectiveness.",
        icon: LineChart,
    },
];

const trainingAreas = [
    {
        title: "Public Health Leadership",
        description:
            "Developing leaders capable of navigating complex health challenges and driving organizational transformation.",
        topics: [
            "Leadership and Management",
            "Strategic Thinking",
            "Decision-Making",
            "Health Sector Leadership",
            "Change Management",
            "Stakeholder Engagement",
        ],
        icon: GraduationCap,
    },
    {
        title: "Monitoring, Evaluation and Learning (MEL)",
        description:
            "Strengthening the ability of organizations to measure results, demonstrate accountability, and foster continuous learning.",
        topics: [
            "Monitoring Framework Development",
            "Indicator Design",
            "Data Collection and Management",
            "Evaluation Methods",
            "Impact Measurement",
            "Learning Systems",
        ],
        icon: BarChart3,
    },
    {
        title: "Research Methods and Evidence Generation",
        description:
            "Equipping participants with the skills needed to design, conduct, interpret, and communicate research.",
        topics: [
            "Research Design",
            "Epidemiology",
            "Quantitative Methods",
            "Qualitative Methods",
            "Scientific Writing",
            "Research Ethics",
            "Knowledge Translation",
        ],
        icon: Microscope,
    },
    {
        title: "Health Systems Strengthening",
        description:
            "Building capacity to improve health system performance and service delivery.",
        topics: [
            "Health Systems Thinking",
            "Service Delivery Improvement",
            "Workforce Development",
            "Quality Improvement",
            "Governance and Accountability",
            "Health Policy",
        ],
        icon: Network,
    },
    {
        title: "Program Design and Management",
        description:
            "Supporting organizations in planning, implementing, and managing effective programs.",
        topics: [
            "Program Planning",
            "Project Management",
            "Theory of Change",
            "Risk Management",
            "Stakeholder Coordination",
            "Results-Based Management",
        ],
        icon: ClipboardList,
    },
    {
        title: "Data for Decision-Making",
        description:
            "Helping institutions use data effectively to improve strategy, operations, and impact.",
        topics: [
            "Data Analysis",
            "Data Visualization",
            "Evidence Interpretation",
            "Reporting and Communication",
            "Decision-Making Frameworks",
            "Performance Monitoring",
        ],
        icon: LineChart,
    },
    {
        title: "Climate, Nutrition and Sustainable Development",
        description:
            "Building awareness and technical understanding of emerging global challenges and opportunities.",
        topics: [
            "Climate and Health",
            "Nutrition Programming",
            "Sustainable Food Systems",
            "Environmental Health",
            "Community Resilience",
            "Sustainable Development Goals",
        ],
        icon: Leaf,
    },
    {
        title: "Policy and Governance",
        description:
            "Strengthening institutional understanding of policy processes and governance systems.",
        topics: [
            "Policy Development",
            "Policy Analysis",
            "Governance Frameworks",
            "Public Sector Leadership",
            "Regulatory Environments",
            "Strategic Planning",
        ],
        icon: Landmark,
    },
];

const formats = [
    {
        title: "Workshops",
        description:
            "Interactive sessions focused on practical learning and problem-solving.",
        icon: Presentation,
    },
    {
        title: "Short Courses",
        description:
            "Structured learning programs designed to build specific competencies.",
        icon: BookOpenText,
    },
    {
        title: "Technical Training Programs",
        description:
            "Specialized learning interventions tailored to professional audiences.",
        icon: GraduationCap,
    },
    {
        title: "Leadership Development Programs",
        description: "Programs designed for current and emerging leaders.",
        icon: Lightbulb,
    },
    {
        title: "Webinars and Virtual Learning",
        description:
            "Accessible online learning opportunities for geographically diverse participants.",
        icon: MonitorPlay,
    },
    {
        title: "Conferences and Knowledge-Sharing Forums",
        description:
            "Facilitated discussions, expert panels, and learning events that promote dialogue and collaboration.",
        icon: Users,
    },
    {
        title: "Mentorship and Coaching",
        description:
            "Personalized support for professionals seeking growth, leadership development, or technical guidance.",
        icon: Network,
    },
];

const audiences = [
    "Government Ministries and Agencies",
    "NGOs and Civil Society Organizations",
    "Research Institutions",
    "Universities and Academic Institutions",
    "Healthcare Organizations",
    "Professional Associations",
    "Community-Based Organizations",
    "Private Sector Organizations",
];

const Training = () => {
    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Training & Capacity Building"
                description="Professional training, leadership development, monitoring and evaluation training, research methods, public health capacity building, and institutional strengthening programs."
                path="/training"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Training & Capacity Building
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Building Knowledge. Strengthening Capacity. Creating
                            Impact.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Sustainable development depends on capable
                                individuals, resilient institutions, and strong
                                systems.
                            </p>

                            <p>
                                Llorick Consulting designs and delivers
                                high-quality training, technical learning
                                programs, workshops, mentorship initiatives, and
                                capacity-strengthening interventions that
                                empower professionals, organizations, and
                                communities to achieve meaningful and lasting
                                impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Capacity Building Matters */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Why Capacity Building Matters
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Strong organizations depend on capable people,
                            resilient systems, and continuous learning.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-8 text-slate-600">
                        <p>
                            Organizations are only as effective as the people
                            who lead, manage, and implement their programs.
                        </p>

                        <p>
                            As public health and development challenges become
                            increasingly complex, institutions require
                            professionals who can analyze evidence, adapt to
                            change, strengthen systems, and drive innovation.
                        </p>

                        <p>
                            Llorick Consulting helps bridge knowledge gaps,
                            strengthen competencies, and build institutional
                            resilience through tailored learning solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Training Philosophy */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Our Training Philosophy
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Learning designed for practical application and
                            measurable value.
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
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
            </section>

            {/* Training Areas */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Training Areas
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Technical learning programs for public health,
                            development, and institutional performance.
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-2">
                        {trainingAreas.map((area) => {
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

                                    <div className="bg-[#F8FAFC] p-4 md:p-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                            Topics may include
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            {area.topics.map((topic) => (
                                                <div
                                                    key={topic}
                                                    className="flex gap-3 rounded-2xl bg-white p-4"
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

            {/* Training Formats */}
            <section className="bg-[#0F172A] py-6 md:py-12 lg:py-16 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Training Formats
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Flexible learning models for diverse
                                institutional needs.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Recognizing that learning needs vary across
                                institutions and contexts, we offer flexible
                                delivery models.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-2">
                            {formats.map((format) => {
                                const Icon = format.icon;

                                return (
                                    <article
                                        key={format.title}
                                        className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                                    >
                                        <div className="flex items-center gap-4">
                                            <Icon className="h-7 w-7 shrink-0 text-[#C9A24D]" />

                                            <h3 className="text-xl font-bold leading-tight text-white">
                                                {format.title}
                                            </h3>
                                        </div>

                                        <p className="mt-3 text-sm leading-7 text-slate-300">
                                            {format.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Who We Work With */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Who We Work With
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Capacity-building support for institutions,
                            professionals, and development actors.
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {audiences.map((item) => (
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

            {/* Tailored Learning Solutions */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-white p-6 shadow-sm md:p-14">
                        <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                    Tailored Learning Solutions
                                </p>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                    Customized programs aligned with
                                    institutional priorities.
                                </h2>
                            </div>

                            <div className="space-y-4 md:space-y-6 text-lg leading-8 text-slate-600">
                                <p>
                                    Every organization faces unique challenges.
                                </p>

                                <p>
                                    Llorick Consulting works closely with
                                    clients to design customized learning
                                    programs that align with strategic
                                    priorities, workforce needs, and
                                    organizational objectives.
                                </p>

                                <p>
                                    Whether supporting a national health
                                    initiative, strengthening a development
                                    program, or building leadership capacity
                                    within an institution, our goal is to
                                    deliver learning experiences that create
                                    measurable value.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-6 text-center text-white md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Let&apos;s Strengthen Capacity Together
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Strong systems begin with capable people.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Llorick Consulting is committed to helping
                            organizations build the knowledge, skills, and
                            leadership needed to address today&apos;s challenges
                            and shape tomorrow&apos;s opportunities.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Request a Training Program
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Discuss Capacity Building Needs
                            </Link>

                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Partner With Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Training;
