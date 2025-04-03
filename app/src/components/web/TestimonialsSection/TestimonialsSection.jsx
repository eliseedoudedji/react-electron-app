import React, { useState, useEffect, useRef } from "react";
import "./TestimonialsSection.css";

const TestimonialsSection = () => {
  // État pour suivre l'index du témoignage actif
  const [activeIndex, setActiveIndex] = useState(0);
  // Référence pour l'autoplay
  const autoplayRef = useRef(null);

  // Données des témoignages
  const testimonials = [
    {
      quote: "Avec TalismanPro, ma comptabilité est 100x plus rapide !",
      author: "Jean Dupont",
      position: "Entrepreneur",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/41.jpg"
    },
    {
      quote: "Un outil simple et puissant pour gérer toutes mes finances !",
      author: "Marie Lefevre",
      position: "Comptable",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      quote: "L'intégration avec ma banque est top, tout est automatisé !",
      author: "Marc Dubois",
      position: "PME",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "Depuis que j'utilise TalismanPro, je gagne 5 heures par semaine !",
      author: "Sophie Martin",
      position: "Directrice Financière",
      rating: 5,
      avatar: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    {
      quote: "Interface intuitive et fonctionnalités complètes, je recommande !",
      author: "Thomas Petit",
      position: "Consultant",
      rating: 4,
      avatar: "https://randomuser.me/api/portraits/men/15.jpg"
    }
  ];

  // Fonction pour passer au témoignage suivant
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Fonction pour passer au témoignage précédent
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Fonction pour sélectionner un témoignage spécifique
  const goToTestimonial = (index) => {
    setActiveIndex(index);
  };

  // Effet pour l'autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, []);

  // Fonction pour générer les étoiles de notation
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? 'filled' : 'empty'}`}>
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section className="testimonials-section" style={{ marginTop: "100px" }}>
      <div className="container">
        {/* Titre */}
        <h2 className="section-title">
          Témoignages
        </h2>

        {/* Carousel de témoignages */}
        <div className="testimonial-carousel">
          {/* Flèche précédente */}
          <button 
            className="carousel-arrow prev-arrow" 
            onClick={prevTestimonial}
            aria-label="Témoignage précédent"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
            </svg>
          </button>
          
          {/* Conteneur des témoignages */}
          <div className="testimonial-container">
            <div 
              className="testimonial-track" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-content">
                    <div className="quote-icon">
                      <svg width="42" height="36" viewBox="0 0 42 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.0156 0.9375L9.79688 0.9375C7.64062 0.9375 5.85938 1.6875 4.45312 3.1875C3.04688 4.6875 2.34375 6.5 2.34375 8.625V15.375C2.34375 17.5 3.04688 19.3125 4.45312 20.8125C5.85938 22.3125 7.64062 23.0625 9.79688 23.0625H13.5156C14.0469 23.0625 14.4844 23.2188 14.8281 23.5312C15.1719 23.8438 15.3438 24.25 15.3438 24.75V25.5C15.3438 26.9375 14.8594 28.1562 13.8906 29.1562C12.9219 30.1562 11.7188 30.6562 10.2812 30.6562H9C8.5 30.6562 8.07812 30.8281 7.73438 31.1719C7.39062 31.5156 7.21875 31.9375 7.21875 32.4375V34.5C7.21875 35 7.39062 35.4219 7.73438 35.7656C8.07812 36.1094 8.5 36.2812 9 36.2812H10.2812C12.0312 36.2812 13.6406 35.9375 15.1094 35.25C16.5781 34.5625 17.8125 33.6562 18.8125 32.5312C19.8125 31.4062 20.5781 30.0938 21.1094 28.5938C21.6406 27.0938 21.9062 25.5 21.9062 23.8125V8.0625C21.9062 5.9375 21.2031 4.125 19.7969 2.625C18.3906 1.125 16.5469 0.9375 16.0156 0.9375ZM37.0781 0.9375L30.8594 0.9375C28.7031 0.9375 26.9219 1.6875 25.5156 3.1875C24.1094 4.6875 23.4062 6.5 23.4062 8.625V15.375C23.4062 17.5 24.1094 19.3125 25.5156 20.8125C26.9219 22.3125 28.7031 23.0625 30.8594 23.0625H34.5781C35.1094 23.0625 35.5469 23.2188 35.8906 23.5312C36.2344 23.8438 36.4062 24.25 36.4062 24.75V25.5C36.4062 26.9375 35.9219 28.1562 34.9531 29.1562C33.9844 30.1562 32.7812 30.6562 31.3438 30.6562H30.0625C29.5625 30.6562 29.1406 30.8281 28.7969 31.1719C28.4531 31.5156 28.2812 31.9375 28.2812 32.4375V34.5C28.2812 35 28.4531 35.4219 28.7969 35.7656C29.1406 36.1094 29.5625 36.2812 30.0625 36.2812H31.3438C33.0938 36.2812 34.7031 35.9375 36.1719 35.25C37.6406 34.5625 38.875 33.6562 39.875 32.5312C40.875 31.4062 41.6406 30.0938 42.1719 28.5938C42.7031 27.0938 42.9688 25.5 42.9688 23.8125V8.0625C42.9688 5.9375 42.2656 4.125 40.8594 2.625C39.4531 1.125 37.6094 0.9375 37.0781 0.9375Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <p className="testimonial-quote">{testimonial.quote}</p>
                    <div className="testimonial-rating">
                      {renderStars(testimonial.rating)}
                    </div>
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <img src={testimonial.avatar} alt={testimonial.author} />
                      </div>
                      <div className="author-info">
                        <h4 className="author-name">{testimonial.author}</h4>
                        <p className="author-position">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flèche suivante */}
          <button 
            className="carousel-arrow next-arrow" 
            onClick={nextTestimonial}
            aria-label="Témoignage suivant"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </button>
        </div>

        {/* Indicateurs */}
        <div className="testimonial-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Témoignage ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
