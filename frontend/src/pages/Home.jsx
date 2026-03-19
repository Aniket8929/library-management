import BookShowcase from "@/components/BookShowcase";
import CTA from "@/components/Cta";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

function Home() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#111827]">
      <Hero />
      <Features />
      <BookShowcase />
      <CTA />
      <Footer />
    </div>
  );
}

export default  Home;