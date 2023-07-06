import Image from "next/image";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

export default function Home() {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="text-2xl font-bold italic">Hallo</main>
    </>
  );
}
