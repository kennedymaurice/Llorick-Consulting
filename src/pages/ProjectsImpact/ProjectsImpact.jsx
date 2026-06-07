// src/pages/ProjectsImpact/ProjectsImpact.jsx

import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe2, Sparkles } from "lucide-react";
import {
    engagementAreas,
    engagementThemes,
    geographicReach,
    impactPrinciples,
    partnerValue,
} from "../../data/impact";
import SEO from "../../components/seo/SEO";

const ProjectsImpact = () => {
    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Projects & Impact"
                description="Discover how Llorick Consulting contributes to public health, research, policy, capacity building, health systems strengthening, and sustainable development initiatives across diverse contexts."
                path="/projects-impact"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Projects & Impact
                        </div>
                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Delivering Meaningful Impact Through Evidence,
                            Collaboration, and Action.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Llorick Consulting supports organizations
                                working to improve health outcomes, strengthen
                                systems, generate evidence, build capacity, and
                                advance sustainable development.
                            </p>

                            <p>
                                From research and technical assistance to
                                advocacy, capacity building, and systems
                                strengthening, our work is driven by a
                                commitment to creating measurable and lasting
                                impact.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Impact Approach */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Our Approach to Impact
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                Sustainable change happens when evidence,
                                strategy, and implementation work together.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                Every engagement is guided by four principles
                                that shape how we think, collaborate, and
                                deliver value.
                            </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                            {impactPrinciples.map((principle) => {
                                const Icon = principle.icon;

                                return (
                                    <article
                                        key={principle.title}
                                        className="group rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D] transition group-hover:bg-[#C9A24D] group-hover:text-[#0F172A]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <h3 className="text-xl font-bold leading-tight text-[#0F172A]">
                                                {principle.title}
                                            </h3>
                                        </div>

                                        <p className="mt-4 text-sm leading-7 text-slate-600">
                                            {principle.description}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Areas of Engagement */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Areas of Engagement
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Supporting complex assignments across health,
                            research, systems, policy, and development.
                        </h2>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 lg:grid-cols-2">
                        {engagementAreas.map((area) => {
                            const Icon = area.icon;

                            return (
                                <article
                                    key={area.title}
                                    className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm"
                                >
                                    <div className="border-b border-slate-200 p-5 md:p-8">
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

                                    <div className="p-4 md:p-8">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]">
                                            Representative areas include
                                        </p>

                                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                            {area.areas.map((item) => (
                                                <div
                                                    key={item}
                                                    className="flex gap-3 rounded-2xl bg-[#F8FAFC] p-4"
                                                >
                                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A24D]" />
                                                    <p className="text-sm font-medium leading-6 text-slate-700">
                                                        {item}
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

            {/* Illustrative Themes */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                        <div className="lg:sticky lg:top-28">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Illustrative Engagement Themes
                            </p>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                Thematic areas where our expertise contributes
                                to meaningful impact.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                These examples represent the types of
                                assignments and thematic areas in which Llorick
                                Consulting has developed expertise.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {engagementThemes.map((theme) => {
                                const Icon = theme.icon;

                                return (
                                    <article
                                        key={theme.title}
                                        className="rounded-[1.5rem] border border-slate-200 bg-white p-7 shadow-sm"
                                    >
                                        <div className="flex gap-5">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#0F172A] text-[#C9A24D]">
                                                <Icon className="h-5 w-5" />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-bold text-[#0F172A]">
                                                    {theme.title}
                                                </h3>

                                                <p className="mt-3 leading-7 text-slate-600">
                                                    {theme.description}
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

            {/* Geographic Reach */}
            <section className="bg-[#0F172A] py-6 md:py-12 lg:py-16 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
                        <div>
                            <div className="flex items-center gap-3">
                                <Globe2 className="h-10 w-10 text-[#C9A24D]" />

                                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                    Geographic Reach
                                </p>
                            </div>

                            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                                Global perspective informed by diverse regional
                                experience.
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                Llorick Consulting brings experience informed by
                                work, collaborations, research, training, and
                                professional engagements across multiple
                                regions.
                            </p>
                        </div>

                        <div className="grid gap-5 md:grid-cols-3">
                            {geographicReach.map((item) => (
                                <article
                                    key={item.region}
                                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                                >
                                    <h3 className="text-2xl font-bold text-white">
                                        {item.region}
                                    </h3>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        {item.description}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 md:mt-12 rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-8">
                        <p className="text-lg leading-8 text-slate-300">
                            This global perspective enables us to combine
                            international best practices with local realities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Creating Value */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-6 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Creating Value for Partners
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Designed to help partners strengthen performance,
                            learning, and long-term impact.
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {partnerValue.map((item) => (
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

            {/* Looking Ahead */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-white p-6 md:p-14">
                        <div className="grid gap-6 md:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
                            <div>
                                <div className="flex items-center gap-3">
                                    <Sparkles className="h-10 w-10 text-[#C9A24D]" />

                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                        Looking Ahead
                                    </p>
                                </div>

                                <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                                    Transforming evidence into action and action
                                    into lasting impact.
                                </h2>
                            </div>

                            <div className="space-y-4 md:space-y-6 text-lg leading-9 text-slate-600">
                                <p>
                                    The challenges facing health systems and
                                    communities continue to evolve. Climate
                                    change, emerging diseases, health
                                    inequities, workforce constraints, and
                                    development pressures require innovative and
                                    evidence-based responses.
                                </p>

                                <p>
                                    Llorick Consulting remains committed to
                                    supporting organizations that seek
                                    practical, sustainable, and impactful
                                    solutions to these challenges.
                                </p>

                                <p>
                                    Together, we can transform evidence into
                                    action and action into lasting impact.
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
                            Work With Us
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                            Ready to design stronger programs, generate
                            evidence, or build sustainable impact?
                        </h2>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
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

export default ProjectsImpact;
