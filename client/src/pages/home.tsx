import Header from "@/components/header";
import Hero from "@/components/hero";
import Plans from "@/components/plans";
import Features from "@/components/features";
import Vendors from "@/components/vendors";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Plans />
      <Features />
      <Vendors />
      <Footer />
    </div>
  );
}
