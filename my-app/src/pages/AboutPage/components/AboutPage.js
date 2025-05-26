import React from 'react';
import { AboutHero } from './components/AboutHero/AboutHero.js';
import { OurStory } from './components/OurStory/OurStory.js';
import { MissionVision } from './components/MissionVision/MissionVision.js';
import { Team } from './components/Team/Team.js';
import { Testimonials } from './components/Testimonials/Testimonials.js';
import { CallToAction } from './components/CallToAction/CallToAction.js';

function AboutPage() {
  return (
    <div>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <Team />
      <Testimonials />
      <CallToAction />
    </div>
  );
}

export default AboutPage;