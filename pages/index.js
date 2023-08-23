import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F6FFDE] dark:bg-gray-900 overflow-y-scroll">
      <Header />
      <HeroSection />
      <section id="aboutme">
        <AboutMe />
      </section>
    </div>
  );
}
