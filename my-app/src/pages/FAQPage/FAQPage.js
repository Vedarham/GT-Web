import React from 'react';
import FAQItem from './components/FAQItem.js';
import './FAQPage.style.css';

const faqData = [
  {
    category: 'Registration & Participation',
    questions: [
      {
        question: 'How do I register for a tournament?',
        answer: 'To register for a tournament, visit the tournament page on our website and click the "Register" button. You will need to create an account or log in. After that, you can select the tournament you want to participate in and complete your registration.'
      },
      {
        question: 'Do I need a team to register?',
        answer: 'It depends on the tournament format. Some tournaments allow solo players, while others require teams. Please check the tournament description for more details.'
      },
    ]
  },
  {
    category: 'Tournament Rules',
    questions: [
      {
        question: 'What are the rules for the tournament?',
        answer: 'Each tournament has its own specific rules, which can be found on the tournament registration page. We recommend reading the rules carefully to avoid disqualification.'
      },
      {
        question: 'Can I change my team members after registration?',
        answer: 'Typically, once the registration period ends, team rosters are locked. However, some tournaments may allow changes before the tournament starts. Check the tournament rules for specific details.'
      },
    ]
  },
  {
    category: 'Prizes & Rewards',
    questions: [
      {
        question: 'How are the prizes distributed?',
        answer: 'Prizes will be awarded to the top winners of each tournament. The distribution details (prizes, amounts, etc.) will be shared before the tournament starts and after the results are confirmed.'
      },
      {
        question: 'Can I choose my prize?',
        answer: 'Prize choices are generally predetermined based on the tournament. Please check the prize section of the specific tournament for more information.'
      },
    ]
  },
  {
    category: 'Technical Support',
    questions: [
      {
        question: 'What should I do if I encounter technical issues during the tournament?',
        answer: 'If you face technical issues during a match, please contact our support team immediately via the "Support" button available on your dashboard. Our team will assist you as quickly as possible.'
      },
      {
        question: 'Do you support all gaming platforms?',
        answer: 'We support multiple platforms for various games, including PC, console, and mobile. Specific platform support varies by tournament, so check the tournament details for confirmation.'
      },
    ]
  }
];

function FAQPage() {
  return (
    <div className="faq-page">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-content">
        {faqData.map((category, index) => (
          <div key={index} className="faq-category">
            <h2>{category.category}</h2>
            {category.questions.map((question, i) => (
              <FAQItem key={i} question={question.question} answer={question.answer} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQPage;
