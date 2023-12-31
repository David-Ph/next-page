import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Contact from "./components/sections/contact/Contact";
import Intro from "./components/sections/intro/Intro";
import Info from "./components/sections/info/Info";
import Experience from "./components/sections/experience/Experience";
import Tech from "./components/sections/tech/Tech";
import Project from "./components/sections/project/Project";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-28 ps-0 md:ps-32">
        <Intro />
        <Info />
        <Experience />
        <Tech />
        <Project />
        <Contact />
      </main>
    </>
  );
}
