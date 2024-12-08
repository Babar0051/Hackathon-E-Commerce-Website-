import Image from "next/image";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Hero3 from './components/Hero3';
import Hero4 from './components/Hero4';
import Hero5 from './components/Hero5';
import Insta from './components/Insta';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
       <Navbar />
       <Hero />
       <Hero2 />
       <Hero3 />
       <Hero4 />
       <Hero5 />
       <Insta />
       <Footer />
    </div>
  );
}
