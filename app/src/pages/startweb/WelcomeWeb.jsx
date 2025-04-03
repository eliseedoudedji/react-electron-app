import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBar from '../../components/web/NavBar/NavBar';
import MainSection from '../../components/web/MainComponent/MainSection';
import PresentationSolution from '../../components/web/Presentation/PresentationSolution';
import FonctionalitiesSection from '../../components/web/Fonctionalities/Fonctionalities';
import ComparisonSection from '../../components/web/ComparisonSection/ComparisonSection';
import TestimonialsSection from '../../components/web/TestimonialsSection/TestimonialsSection';
import PricingSection from '../../components/web/PricingSection/PricingSection';
import FooterSection from '../../components/web/FooterSection/FooterSection';

export default function WelcomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>

      <div className='container'>
        <NavBar />
        <div className='mt-5' data-aos="fade-up">
          <MainSection />
        </div>


        <div className='mt-5 mb-5' data-aos="fade-up" data-aos-delay="200">
          <PresentationSolution />

        </div>
      </div>
      <div className='container' data-aos="fade-up" data-aos-delay="400">
        <FonctionalitiesSection />
      </div>
      <div className='container' data-aos="fade-up" data-aos-delay="600">
        <ComparisonSection />
      </div>
      <div className='container' data-aos="fade-up" data-aos-delay="800">
        <TestimonialsSection />
      </div>
      <div className='container' data-aos="fade-up" data-aos-delay="1000">
        <PricingSection />
      </div>
      <div className='container'>
        
      </div>

      <FooterSection data-aos="fade-up" data-aos-delay="1200" />
    </div>

  )
}
