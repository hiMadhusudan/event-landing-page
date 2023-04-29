import Header from './components/Header';
import HeroSection from './components/Hero';
import Features from './components/Features';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import RegistrationForm from './components/RegistrationForm';
import Footer from './components/Footer';
import './App.css';
import React, { useRef } from 'react';

function App() {
  const featuresRef = useRef(null);
  const scheduleRef = useRef(null);
  const speakersRef = useRef(null);
  const registrationRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="App">
      <Header
      scrollToSection={scrollToSection}
      featuresRef={featuresRef}
      scheduleRef={scheduleRef}
      speakersRef={speakersRef}
      />
      <HeroSection 
      scrollToSection={scrollToSection}
      registrationRef={registrationRef}
      />
      <section ref={featuresRef}>
        <Features />
      </section>
      <section ref={scheduleRef}>
        <Schedule />
      </section>
      <section ref={speakersRef}>
        <Speakers />
      </section>
      <Sponsors />
      <section ref={registrationRef}>
        <RegistrationForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
