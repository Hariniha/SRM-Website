import AboutSection from '../components/AboutSection';
import FooterSection from '../components/FooterSection';
import HeroSection from '../components/HeroSection';
import NewsTestimonialsSection from '../components/NewsTestimonialsSection';
import ProgramsSection from '../components/ProgramsSection';
import ResearchSection from '../components/ResearchSection';
import WhyChooseSection from '../components/WhyChooseSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <WhyChooseSection />
      <NewsTestimonialsSection />
      <ResearchSection />
      <FooterSection />
    </>
  );
};

export default HomePage;