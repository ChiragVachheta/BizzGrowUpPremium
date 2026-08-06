import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import LiveDemos from '@/components/LiveDemos';
import Pricing from '@/components/Pricing';
import Process from '@/components/Process';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppWidget from '@/components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <LiveDemos />
        <Pricing />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
