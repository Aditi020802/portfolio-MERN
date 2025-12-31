import { BrowserRouter, Routes, Route } from "react-router-dom";

/* Portfolio Components */
import Navbar from "./components/Navbar";
import CanvasBG from "./components/CanvasBG";
import Footer from "./sections/Footer";

/* Sections */
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

/* Admin Pages */
import AdminLoginRedirect from "./pages/AdminLoginRedirect";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function PortfolioLayout() {
  return (
    <>
      <CanvasBG />
      <Navbar />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        

        {/* Portfolio */}
        <Route path="/" element={<PortfolioLayout />} />

        {/* Admin Login */}
        <Route path="/admin-login" element={<AdminLoginRedirect />} />

        {/* Protected Admin Dashboard */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
