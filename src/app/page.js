import About from "./components/About";
import Navbar from "./components/NavbarItem.js";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="flex justify-center">
        <About />
      </div>
    </main>
  );
}
