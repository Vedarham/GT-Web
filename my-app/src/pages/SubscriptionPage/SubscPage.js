import React from 'react';
import './SubscPage.style.css';

const SubscriptionPage = () => {
  const tiers = [
    {
      title: 'Free',
      price: '₹0',
      description: 'Basic access to the platform with limited features.',
      features: ['Access to free tournaments', 'Basic profile customization'],
    },
    {
      title: 'Pro',
      price: '₹999/month',
      description: 'Get trophies and event passes every month.',
      features: ['100 Trophies Monthly', '2 Event Passes', 'Priority Support'],
    },
    {
      title: 'Ultimate',
      price: '₹1999/month',
      description: 'Get higher trophies and exclusive event passes.',
      features: [
        '300 Trophies Monthly',
        '5 Exclusive Event Passes',
        'Exclusive Skins & Badges',
      ],
    },
    {
      title: 'Organizer',
      price: '₹4999/year',
      description:
        'Ideal for frequent event organizers. Get discounted annual or monthly plans.',
      features: [
        'Unlimited Event Hosting',
        'Discount on Event Fees',
        'Exclusive Organizer Badge',
      ],
    },
  ];

  return (
    <div className="subscription-page">
      <h1>Choose Your Subscription</h1>
      <div className="tiers">
        {tiers.map((tier, index) => (
          <div key={index} className="tier-card">
            <h2>{tier.title}</h2>
            <p className="price">{tier.price}</p>
            <p className="description">{tier.description}</p>
            <ul className="features">
              {tier.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="subscribe-btn">Subscribe Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPage;
