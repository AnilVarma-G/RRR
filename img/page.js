import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Slider from "./components/Slider";
import Gallery from '../app/components/Gallery';
import Welcome from '../app/components/Welcome'
import Founder from '../app/components/Founder';
import Facilities from '../app/components/Facilities'
import ActivitiesComponent from '../app/components/Activities'
import FixedIcons from '../app/components/Fixedicons'
import VideoList from './components/VideoList'
import FeedbackList from '../app/components/feeback'
import ImageSlider from '../app/components/Webelief'



export default function Home() {
  return (
    <main className="overflow-x-hidden"> 
      <Navbar />
      <div className="mt-24 container mx-auto bg-red-50 ">
        {/* <HeroSection /> */}
        <Slider />
        <Welcome />
        <ImageSlider />
        <AchievementsSection />
        <AboutSection />
        <Founder />
        <Gallery />
        <Facilities />
        <ActivitiesComponent />
        {/* <ProjectsSection /> */}
        <FixedIcons />
        <VideoList />
        <FeedbackList />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
