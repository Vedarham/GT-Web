import React from 'react';
// import { Quote } from 'lucide-react';
import './Testimonials.style.css';

const testimonials = [
  {
    quote: "The platform has completely transformed how we approach competitive gaming. It's not just about playing anymore - it's about growing together.",
    author: "Alex Thompson",
    role: "Professional Gamer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
  },
  {
    quote: "The community here is unlike anything I've experienced before. The support and opportunities for growth are incredible.",
    author: "Maria Garcia",
    role: "Tournament Organizer",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80"
  },
  {
    quote: "As a game developer, seeing our games thrive in this ecosystem has been remarkable. The platform's infrastructure is top-notch.",
    author: "James Wilson",
    role: "Game Developer",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&q=80"
  }
];

export function Testimonials() {
  return (
    <div className="testimonials-container">
      <div className="testimonials-content">
        <h2 className="testimonials-title">What Others Say About Us</h2>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              {/* <Quote className="quote-icon" /> */}
              
              <blockquote className="testimonial-quote">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="testimonial-author">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="author-image"
                />
                <div className="author-info">
                  <div className="author-name">{testimonial.author}</div>
                  <div className="author-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}