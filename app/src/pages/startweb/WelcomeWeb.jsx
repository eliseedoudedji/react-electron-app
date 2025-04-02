import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from '../../components/web/NavBar/NavBar';
import MainSection from '../../components/web/MainComponent/MainSection';
import PresentationSection from '../../components/web/Presentation/PresentationSolution';
import FonctionalitiesSection from '../../components/web/Fonctionalities/Fonctionalities';
import ComparisonSection from '../../components/web/ComparisonSection/ComparisonSection';
import TestimonialsSection from '../../components/web/TestimonialsSection/TestimonialsSection';
import PricingSection from '../../components/web/PricingSection/PricingSection';
import FooterSection from '../../components/web/FooterSection/FooterSection';
export default function WelcomePage() {
  return (
    <div>

      <div className='container'>
        <NavBar />
        <div className='mt-5'>
          <MainSection />
        </div>


        <div className='mt-5 mb-5'>
          <PresentationSection />

        </div>
      </div>
      <div className='container'>
        <FonctionalitiesSection />
      </div>
      <div className='container'>
        <ComparisonSection />
      </div>
      <div className='container'>
        <TestimonialsSection />
      </div>
      <div className='container'>
        <PricingSection />
      </div>
      <div className='container'>
        
      </div>

      <Link to="/mainpages">Go to main pages</Link>
    </div>

  )
}
