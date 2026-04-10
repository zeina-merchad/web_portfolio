import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import Writing from "./components/Writing";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BlogPostPage from "./components/BlogPostPage";

const Home: React.FC = () => (
  <div className="min-h-screen bg-ink-50">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Writing />
      <Skills />
      <Contact />
    </main>
    <Footer />
  </div>
);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
