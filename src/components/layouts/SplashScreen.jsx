// src/components/layout/SplashScreen.jsx

import { motion } from "framer-motion";

const SplashScreen = () => {
    return (
        <motion.div
            className="relative flex h-screen flex-col items-center justify-center overflow-hidden bg-[#0F172A] px-6 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5 }}
        >
            <div className="absolute inset-0">
                <div className="absolute -left-24 top-20 h-80 w-80 rounded-full bg-[#C9A24D]/20 blur-3xl" />
                <div className="absolute -right-24 bottom-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,77,0.22),transparent_35%)]" />
            </div>

            <motion.div
                className="relative rounded-[1.5rem] border border-white/10 bg-white/10 px-8 py-7 shadow-2xl shadow-black/30 backdrop-blur"
                initial={{ scale: 0.92, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    type: "spring",
                    stiffness: 120,
                }}
            >
                <div className="text-center">
                    <img
                        src="/llorick-logo-horizontal-white.png"
                        alt="Llorick Consulting"
                        className="h-14 w-auto"
                    />
                </div>
            </motion.div>

            <motion.div
                className="relative mt-7 h-1 w-32 rounded-full bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.35, duration: 0.7 }}
            />

            <motion.h1
                className="relative mt-7 text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
            >
                Llorick Consulting
            </motion.h1>

            <motion.p
                className="relative mt-3 max-w-xl text-center text-sm leading-6 text-slate-300 sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
            >
                Global Health • Research • Policy • Development Advisory
            </motion.p>

            <motion.div
                className="relative mt-8 h-12 w-12 rounded-full border-4 border-white/10 border-t-[#C9A24D]"
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: "linear",
                }}
            />

            <motion.p
                className="relative mt-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-slate-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
            >
                Loading Advisory Platform...
            </motion.p>
        </motion.div>
    );
};

export default SplashScreen;
