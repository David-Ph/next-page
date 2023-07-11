import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Contact from "./components/sections/contact/Contact";
import Intro from "./components/sections/intro/Intro"
import Info from "./components/sections/info/Info";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-28 ps-0 md:ps-32 text-slate-300">
        <Intro />
        <Info />
        {/* ? Experience section */}
        {/* ? Tech Stack section */}
        {/* ? Project section */}
        <Contact />
      </main>
    </>
  );
}
