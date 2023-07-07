import Welcome from "./components/Welcome";
import Navbar from "./components/NavbarItem.js";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="bg-[url('/img/rust-banner-notext.png')] bg-cover bg-center bg-fixed overflow-auto">
        <div className="content">
          <Welcome />
        </div>
      </div>
    </main>
  );
}
