import React from 'react';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import ProductsServices from './components/ProductsServices';
import ProjectsPortfolio from './components/ProjectsPortfolio';
import WhyChooseUs from './components/WhyChooseUs';
import ClientsPartners from './components/ClientsPartners';
import Testimonials from './components/Testimonials';
import BlogInsights from './components/BlogInsights';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <AboutUs />
      <ProductsServices />
      <ProjectsPortfolio />
      <WhyChooseUs />
      <ClientsPartners />
      <Testimonials />
      <BlogInsights />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
