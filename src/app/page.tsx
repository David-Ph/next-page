import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Contact from "./components/sections/contact/Contact";
import Intro from "./components/sections/intro/Intro"

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-28 ps-0 md:ps-32">
        <Intro />
        {/* ? Intro section */}
        {/* ? Info section */}
        {/* ? Experience section */}
        {/* ? Tech Stack section */}
        {/* ? Project section */}
        <Contact />
      </main>
    </>
  );
}
