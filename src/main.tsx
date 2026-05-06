import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Experience } from "./pages/Experience";
import { Work } from "./pages/Work";
import { WorkDetail } from "./pages/WorkDetail";
import { About } from "./pages/About";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<Layout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/work/:id" element={<WorkDetail />} />
                        <Route path="/about" element={<About />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
