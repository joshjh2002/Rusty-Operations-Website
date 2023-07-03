import About from "./components/About";
import Navbar from "./components/NavbarItem.js";

export default function Home() {
  return (
    <main>
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center h-screen">
        <Navbar />
        <div className="content">
          <About />
        </div>
      </div>
    </main>
  );
}
