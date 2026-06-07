import { Link } from "react-router-dom";
import { ArrowLeft, Compass, Home } from "lucide-react";
import SEO from "../../components/seo/SEO";

const NotFound = () => {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0F172A] px-5 py-20">
            <SEO
                title="Page Not Found"
                description="The page you are looking for could not be found."
                path=""
                noindex
            />
            <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex h-24 w-24 items-center justify-center rounded-full border border-[#C9A24D]/30 bg-[#C9A24D]/10">
                    <Compass className="h-10 w-10 text-[#C9A24D]" />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-[#C9A24D]">
                    404 Error
                </p>

                <h1 className="mt-5 text-6xl font-bold tracking-tight text-white md:text-8xl">
                    Page Not Found
                </h1>

                <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                    The page you are looking for may have been moved, renamed,
                    or no longer exists. Let us help you navigate back to the
                    right place.
                </p>

                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center rounded-full bg-[#C9A24D] px-8 py-4 text-sm font-bold text-[#0F172A] transition hover:bg-white"
                    >
                        <Home className="mr-2 h-4 w-4" />
                        Return Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="inline-flex items-center justify-center rounded-full border border-white/15 px-8 py-4 text-sm font-bold text-white transition hover:border-[#C9A24D] hover:text-[#C9A24D]"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Go Back
                    </button>
                </div>

                <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur">
                    <h2 className="text-xl font-bold text-white">
                        Need assistance?
                    </h2>

                    <p className="mt-4 leading-8 text-slate-300">
                        If you were looking for information about our services,
                        research, partnerships, training programs, or consulting
                        support, please visit our homepage or contact our team
                        directly.
                    </p>

                    <Link
                        to="/contact"
                        className="mt-6 inline-flex items-center text-sm font-semibold text-[#C9A24D] transition hover:text-white"
                    >
                        Contact Llorick Consulting
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
