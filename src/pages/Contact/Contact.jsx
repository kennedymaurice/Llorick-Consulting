import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    BarChart3,
    CheckCircle2,
    Globe2,
    GraduationCap,
    Handshake,
    Mail,
    MapPin,
    MessageSquare,
    Microscope,
    Phone,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";
import SEO from "../../components/seo/SEO";

const inquiryTypes = [
    {
        title: "Consultancy Services",
        description:
            "Seeking technical expertise, strategic advisory support, program design, health systems strengthening, policy development, or organizational capacity support.",
        icon: ShieldCheck,
    },
    {
        title: "Research Collaboration",
        description:
            "Interested in research partnerships, evidence generation, scientific publications, implementation science, data analysis, or knowledge-sharing initiatives.",
        icon: Microscope,
    },
    {
        title: "Monitoring, Evaluation and Learning",
        description:
            "Looking for support in monitoring systems, evaluations, impact assessments, learning frameworks, or performance measurement.",
        icon: BarChart3,
    },
    {
        title: "Training and Capacity Building",
        description:
            "Exploring customized workshops, professional development programs, leadership training, technical learning initiatives, or institutional capacity-strengthening services.",
        icon: GraduationCap,
    },
    {
        title: "Partnerships and Collaboration",
        description:
            "Interested in strategic partnerships, consortium opportunities, donor-funded projects, academic collaborations, or joint initiatives.",
        icon: Handshake,
    },
    {
        title: "Speaking Engagements",
        description:
            "Seeking expert contributions for conferences, workshops, symposiums, panel discussions, leadership forums, or public health events.",
        icon: MessageSquare,
    },
];

const areasOfInterest = [
    "Global Health",
    "Public Health",
    "Health Systems Strengthening",
    "Monitoring, Evaluation and Learning",
    "Research and Evidence Generation",
    "Policy and Governance",
    "Climate and Health",
    "Nutrition and Food Systems",
    "Sustainable Development",
    "Capacity Building and Leadership Development",
];

const reasons = [
    {
        title: "Evidence-Based",
        description:
            "We combine research, data, and practical experience to inform decision-making.",
        icon: Microscope,
    },
    {
        title: "Collaborative",
        description:
            "We work closely with partners to co-create solutions that respond to real needs.",
        icon: Users,
    },
    {
        title: "Global Perspective",
        description:
            "Our experience spans diverse regions, institutions, and development contexts.",
        icon: Globe2,
    },
    {
        title: "Impact-Oriented",
        description:
            "We focus on practical outcomes that strengthen systems and improve lives.",
        icon: Sparkles,
    },
];

const inquiryOptions = [
    "Consultancy Services",
    "Research Collaboration",
    "Monitoring, Evaluation and Learning",
    "Training and Capacity Building",
    "Partnerships and Collaboration",
    "Speaking Engagements",
    "General Inquiry",
];

const Contact = () => {
    const WHATSAPP_NUMBER = "254112400961";

    const [formData, setFormData] = useState({
        fullName: "",
        organization: "",
        position: "",
        country: "",
        email: "",
        phone: "",
        inquiryType: "",
        subject: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const requiredFields = {
            fullName: "Full name is required",
            organization: "Organization is required",
            country: "Country is required",
            email: "Email address is required",
            phone: "Phone number is required",
            inquiryType: "Type of inquiry is required",
            subject: "Subject is required",
            message: "Message is required",
        };

        const validationErrors = {};

        Object.entries(requiredFields).forEach(([field, message]) => {
            if (!formData[field].trim()) {
                validationErrors[field] = message;
            }
        });

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const whatsappMessage = `
Hello Llorick Consulting,

I would like to make an inquiry.

- Full Name: ${formData.fullName}
- Organization: ${formData.organization}
- Position/Title: ${formData.position || "Not provided"}
- Country: ${formData.country}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Type of Inquiry: ${formData.inquiryType}

Subject: ${formData.subject}

Message:
${formData.message}
    `.trim();

        const encodedMessage = encodeURIComponent(whatsappMessage);
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="bg-white text-slate-900">
            <SEO
                title="Contact Llorick Consulting"
                description="Get in touch with Llorick Consulting for global health advisory, research collaboration, monitoring and evaluation, training, policy support, and partnership opportunities."
                path="/contact"
            />
            {/* Hero */}
            <section className="relative overflow-hidden bg-[#0F172A]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,162,77,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />

                <div className="relative mx-auto max-w-7xl px-5 pt-24 pb-5 lg:px-8 lg:pt-32 lg:pb-16">
                    <div className="max-w-5xl">
                        <div className="mb-5 font-semibold uppercase inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#C9A24D] backdrop-blur">
                            Contact Llorick Consulting
                        </div>

                        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-6xl">
                            Let&apos;s Start a Meaningful Conversation.
                        </h1>

                        <div className="mt-7 max-w-4xl space-y-5 text-lg leading-8 text-slate-300 md:text-xl">
                            <p>
                                Whether you are seeking technical advisory
                                support, research collaboration, training
                                services, policy expertise, or strategic
                                partnership opportunities, Llorick Consulting is
                                ready to explore how we can work together to
                                create sustainable impact.
                            </p>

                            <p>
                                We welcome inquiries from governments,
                                development agencies, NGOs, research
                                institutions, universities, healthcare
                                organizations, foundations, and private-sector
                                partners.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inquiry Types */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="md:text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            How Can We Support You?
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Select the area that best matches your inquiry.
                        </h2>

                        <p className="mt-6 text-lg leading-8 text-slate-600">
                            To help us respond effectively, please select the
                            area that best matches your inquiry.
                        </p>
                    </div>

                    <div className="mt-6 md:mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {inquiryTypes.map((item) => {
                            const Icon = item.icon;

                            return (
                                <article
                                    key={item.title}
                                    className="group rounded-[1.5rem] border border-slate-200 bg-white p-5 md:p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A24D]/60 hover:shadow-xl"
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

            {/* Work With Us / Form */}
            <section className="bg-[#F8FAFC] py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
                    <div className="lg:sticky lg:top-28">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Work With Us
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Delivering expertise, thought leadership, and
                            practical solutions.
                        </h2>

                        <div className="mt-7 space-y-4 md:space-y-6 text-lg leading-8 text-slate-600">
                            <p>
                                Llorick Consulting collaborates with
                                organizations and institutions operating across
                                public health, development, research,
                                sustainability, policy, and social impact
                                sectors.
                            </p>

                            <p>
                                We welcome opportunities to contribute technical
                                expertise, thought leadership, and collaborative
                                solutions that address complex challenges and
                                generate measurable results.
                            </p>
                        </div>

                        <div className="mt-6 md:mt-10 rounded-[2rem] bg-[#0F172A] p-8 text-white">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                                Connect With Our Team
                            </p>

                            <p className="mt-5 leading-8 text-slate-300">
                                For inquiries, collaborations, or partnership
                                opportunities, please complete the contact form
                                or reach out directly.
                            </p>

                            <div className="mt-8 space-y-4">
                                <div className="flex gap-4">
                                    <Mail className="mt-1 h-5 w-5 text-[#C9A24D]" />
                                    <div>
                                        <p className="font-semibold text-white">
                                            Email
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            info@llorickconsulting.com
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Phone className="mt-1 h-5 w-5 text-[#C9A24D]" />
                                    <div>
                                        <p className="font-semibold text-white">
                                            Phone
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            +254 112 400 961
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <MapPin className="mt-1 h-5 w-5 text-[#C9A24D]" />
                                    <div>
                                        <p className="font-semibold text-white">
                                            Location
                                        </p>
                                        <p className="text-sm text-slate-300">
                                            Nairobi, Kenya • Global Engagements
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8"
                    >
                        <div>
                            <p
                                id="contact-form"
                                className="text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A24D]"
                            >
                                Contact Form
                            </p>

                            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0F172A]">
                                Send an inquiry
                            </h3>
                        </div>

                        <div className="mt-8 grid gap-5 md:grid-cols-2">
                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Your full name"
                                />
                                {errors.fullName && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.fullName}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Organization
                                </label>
                                <input
                                    type="text"
                                    name="organization"
                                    value={formData.organization}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Organization name"
                                />
                                {errors.organization && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.organization}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Position/Title
                                </label>
                                <input
                                    type="text"
                                    name="position"
                                    value={formData.position}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Your role"
                                />
                                {errors.position && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.position}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Country
                                </label>
                                <input
                                    type="text"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Country"
                                />
                                {errors.country && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.country}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-slate-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="+254..."
                                />
                                {errors.phone && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.phone}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Type of Inquiry
                                </label>
                                <select
                                    name="inquiryType"
                                    value={formData.inquiryType}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                >
                                    <option value="">
                                        Select inquiry type
                                    </option>
                                    {inquiryOptions.map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>
                                {errors.inquiryType && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.inquiryType}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Brief subject"
                                />
                                {errors.subject && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.subject}
                                    </p>
                                )}
                            </div>

                            <div className="md:col-span-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="6"
                                    className="mt-2 w-full resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#C9A24D] focus:ring-4 focus:ring-[#C9A24D]/10"
                                    placeholder="Tell us about your inquiry, project, partnership idea, or support need."
                                />
                                {errors.message && (
                                    <p className="mt-2 text-xs font-semibold text-red-600">
                                        {errors.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                        >
                            Submit Inquiry
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </form>
                </div>
            </section>

            {/* Areas of Interest */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto grid max-w-7xl gap-6 md:gap-14 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 md:p-12">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Areas of Interest
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Our work commonly supports initiatives across public
                            health, development, policy, and systems
                            strengthening.
                        </h2>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {areasOfInterest.map((item) => (
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

            {/* Why Organizations Choose */}
            <section className="bg-[#0F172A] py-6 md:py-12 lg:py-16 text-white">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Why Organizations Choose Llorick Consulting
                        </p>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                            Evidence-based, collaborative, globally informed,
                            and impact-oriented.
                        </h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;

                            return (
                                <article
                                    key={reason.title}
                                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7"
                                >
                                    <div className="flex items-center gap-4">
                                        <Icon className="h-8 w-8 shrink-0 text-[#C9A24D]" />

                                        <h3 className="text-xl font-bold leading-tight text-white">
                                            {reason.title}
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-sm leading-7 text-slate-300">
                                        {reason.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Looking Forward */}
            <section className="py-6 md:py-12 lg:py-16">
                <div className="mx-auto max-w-7xl px-5 lg:px-8">
                    <div className="rounded-[2rem] bg-[#F8FAFC] p-8 text-center md:p-16">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C9A24D]">
                            Looking Forward
                        </p>

                        <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight text-[#0F172A] md:text-5xl">
                            Every impactful partnership begins with a
                            conversation.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                            Whether you are designing a new initiative,
                            strengthening an existing program, exploring
                            research opportunities, or seeking expert support,
                            we would be pleased to discuss how Llorick
                            Consulting can contribute to your goals.
                        </p>

                        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center rounded-full bg-[#0F172A] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#C9A24D] hover:text-[#0F172A]"
                            >
                                Start a Conversation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </a>

                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Request a Consultation
                            </a>

                            <Link
                                to="/partnerships"
                                className="inline-flex items-center justify-center rounded-full border border-slate-300 px-7 py-4 text-sm font-bold text-[#0F172A] transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                            >
                                Explore Collaboration Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
