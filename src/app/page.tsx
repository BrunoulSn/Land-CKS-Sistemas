import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Features from "./components/Features";
import CTAFinal from "./components/CTAFinal";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <About />
        <Services />
        <Features />
        <CTAFinal />
      </main>
      <Footer />
    </>
  );
}
