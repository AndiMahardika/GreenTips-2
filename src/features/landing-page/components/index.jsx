import Header from "../../../components/Header.jsx";
import About from "./about.jsx";
import Contact from "./contact.jsx";
import Features from "./features.jsx";
import Footer from "./footer.jsx";
import Hero from "./hero.jsx";

export default function LandingPage() {
  return (
    <main>
      <Header />
      {/* Hero */}
      <Hero />

      {/* About Us */}
      <About />

      {/* Features */}
      <Features/>

      {/* Contact Us */}
      <Contact />

      {/* footer */}
      <Footer />
    </main>
  )
}