import React from 'react';
import Hero from '../Components/Hero/Hero';
import ServiciosFune from '../Components/ServiciosFune';
import PlanesAfiliacion from '../Components/PlanesAfiliacion';
import Nosotros from '../Components/Nosotros';
import ContactoSection from '../Components/ContactoSection';

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <ServiciosFune></ServiciosFune>
      <PlanesAfiliacion></PlanesAfiliacion>
      <Nosotros></Nosotros>
      <ContactoSection></ContactoSection>
    </div>
  );
};

export default Home;
