import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Contact from "./components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="text-2xl font-bold pt-28 ps-0 md:ps-32">
        {/* ? Intro section */}
        {/* ? Info section */}
        {/* ? Experience section */}
        {/* ? Tech Stack section */}
        {/* ? Project section */}
        {/* ? Contact section */}
        <Contact />
      </main>
    </>
  );
}
