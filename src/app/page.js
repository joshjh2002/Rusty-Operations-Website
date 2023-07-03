import About from "./components/About";
import Navbar from "./components/NavbarItem.js";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center h-screen">
        <Navbar />
        <div className="flex justify-center mt-32">
          <About />
        </div>
      </div>
    </main>
  );
}
