import React from 'react';
import Hero from './Hero';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import ScrollReveal from './ScrollReveal';

const Home = () => {
  return (
    <div className="home-page page-transition">
      <Hero />
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Projects /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Education /></ScrollReveal>
    </div>
  );
};

export default Home;
