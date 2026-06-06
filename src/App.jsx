import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import SplashScreen from "./components/layouts/SplashScreen";
import MainLayout from "./layouts/MainLayout";
import ScrollToTop from "./components/layouts/ScrollToTop";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ResearchInsights from "./pages/ResearchInsights/ResearchInsights";
import ProjectsImpact from "./pages/ProjectsImpact/ProjectsImpact";
import Training from "./pages/Training/Training";
import Partnerships from "./pages/Partnerships/Partnerships";
import Associates from "./pages/Associates/Associates";
import Leadership from "./pages/Leadership/Leadership";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1800);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <SplashScreen />;
    }

    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route
                        path="/research-insights"
                        element={<ResearchInsights />}
                    />
                    <Route
                        path="/projects-impact"
                        element={<ProjectsImpact />}
                    />
                    <Route path="/training" element={<Training />} />
                    <Route path="/partnerships" element={<Partnerships />} />
                    <Route path="/associates" element={<Associates />} />
                    <Route path="/leadership" element={<Leadership />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
