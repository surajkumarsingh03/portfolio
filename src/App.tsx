import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-800 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Contact />
            </main>
            <Footer />
            <ScrollToTop />
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;