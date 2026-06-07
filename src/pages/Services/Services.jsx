import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "../../data/services";
import SEO from "../../components/seo/SEO";

const Services = () => {
    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Global Health Consulting Services"
                description="Explore Llorick Consulting's services in global health advisory, health systems strengthening, research, monitoring and evaluation, policy advisory, capacity building, and sustainable development."
                path="/services"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16">
                    <div className="max-w-4xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Service Portfolio
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Advisory services for stronger systems, better
                            evidence, and sustainable impact.
                        </h1>

                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                            Llorick Consulting provides technical advisory,
                            research, policy, training, monitoring and
                            evaluation, and development support for institutions
                            working to improve public health and development
                            outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-xl">
                        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
                            {/* Image */}

                            <div className="relative">
                                <img
                                    src="/about.webp"
                                    alt="Global health advisory and development consulting"
                                    className="h-full min-h-[450px] w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/80 via-[#0F172A]/20 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-6 md:p-10">
                                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#C9A24D]">
                                        What We Offer
                                    </p>

                                    <h2 className="mt-4 max-w-xl text-3xl font-bold text-white md:text-5xl">
                                        Evidence-Based Solutions for Complex
                                        Health and Development Challenges.
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}

                            <div className="p-6 md:p-8 lg:p-10">
                                <p className="text-lg leading-8 text-slate-600">
                                    Our services are designed for governments,
                                    development agencies, NGOs, healthcare
                                    organizations, research institutions,
                                    universities, foundations, and
                                    private-sector actors seeking evidence-based
                                    solutions.
                                </p>

                                <p className="mt-4 text-lg leading-8 text-slate-600">
                                    We combine global health expertise, research
                                    capability, policy insight, monitoring and
                                    evaluation, systems thinking, and practical
                                    implementation support to help institutions
                                    move from evidence to action.
                                </p>

                                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                                    {[
                                        "Global Health Advisory",
                                        "Health Systems Strengthening",
                                        "Research & Evidence",
                                        "Monitoring & Evaluation",
                                        "Policy & Governance",
                                        "Capacity Building",
                                    ].map((item) => (
                                        <div
                                            key={item}
                                            className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                                        >
                                            <p className="font-semibold text-[#0F172A]">
                                                {item}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6 rounded-[1.5rem] bg-[#0F172A] p-6 text-white">
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                        Our Approach
                                    </p>

                                    <p className="mt-3 text-lg leading-8 text-slate-300">
                                        We help institutions move from evidence
                                        to action through research, strategy,
                                        implementation support, and continuous
                                        learning.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Areas of Expertise
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Llorick Consulting Service Portfolio
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-10 space-y-8">
                        {services.map((service, index) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    key={service.title}
                                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
                                        <div className="bg-[#0F172A] p-6 text-white md:p-10">
                                            <div className="flex items-center justify-between gap-6">
                                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A24D] text-[#0F172A]">
                                                    <Icon className="h-6 w-6" />
                                                </div>

                                                <span className="text-5xl font-black text-white/10">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </span>
                                            </div>

                                            <h3 className="mt-8 text-3xl font-bold tracking-tight md:text-4xl">
                                                {service.title}
                                            </h3>

                                            <p className="mt-4 text-lg font-semibold text-[#C9A24D]">
                                                {service.subtitle}
                                            </p>

                                            <div className="mt-7 space-y-5 text-sm leading-7 text-slate-300 md:text-base md:leading-8">
                                                {service.description.map(
                                                    (paragraph) => (
                                                        <p key={paragraph}>
                                                            {paragraph}
                                                        </p>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="p-6 md:p-10">
                                            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                                Areas of Support
                                            </p>

                                            <div className="mt-7 grid gap-4 sm:grid-cols-2">
                                                {service.supportAreas.map(
                                                    (area) => (
                                                        <div
                                                            key={area}
                                                            className="flex gap-3 rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4"
                                                        >
                                                            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                                            <p className="text-sm font-medium leading-6 text-slate-700">
                                                                {area}
                                                            </p>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Integrated Support
                        </p>
                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Built for institutions that need more than isolated
                            technical input.
                        </h2>
                    </div>

                    <div className="space-y-6 text-lg leading-9 text-slate-600">
                        <p>
                            Public health and development challenges often
                            require integrated solutions that combine research,
                            policy, program design, monitoring, communication,
                            implementation, and institutional strengthening.
                        </p>

                        <p>
                            Llorick Consulting brings these capabilities
                            together so partners can access coordinated
                            technical support across the full project lifecycle.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-6 md:pb-12 lg:pb-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#0F172A] p-8 text-center text-white md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Work With Us
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Looking for technical support on a public health or
                            development assignment?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                            Whether you are designing a program, strengthening
                            systems, conducting research, evaluating impact,
                            developing policy, or building institutional
                            capacity, Llorick Consulting can support your next
                            step.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                            >
                                Discuss Your Needs
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>

                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
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

export default Services;
