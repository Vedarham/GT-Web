import React, { useState } from 'react';
import './FAQItem.style.css';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div className="faq-item">
      <div className="faq-question" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <span className="faq-toggle">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <p className="faq-answer">{answer}</p>}
    </div>
  );
}

export default FAQItem;
