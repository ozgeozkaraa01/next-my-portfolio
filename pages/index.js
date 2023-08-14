import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-[#F6FFDE] dark:bg-gray-900 overflow-y-scroll">
      <Head>
        <title>Özgenur Özkara</title>
        <meta
          name="description"
          content="Personal portfolio website of Özgenur Özkara"
        />
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/D4D03AQFCbGuqUohg5w/profile-displayphoto-shrink_800_800/0/1671976917166?e=2147483647&v=beta&t=jqC4evYtmj4UJRpJosBclfifHwWjCLWKzyyDoiWFkuE"
        />
      </Head>
      <Header />
      <HeroSection />
      <section id="aboutme">
        <AboutMe />
      </section>
    </div>
  );
}
