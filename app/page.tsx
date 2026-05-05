import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { PhoneMockups } from "@/components/phone-mockups";
import { Features } from "@/components/features";
import { Support } from "@/components/support";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhoneMockups />
        <Features />
        <hr className="border-t border-[var(--border)] max-w-[1060px] mx-auto" />
        <Support />
      </main>
      <Footer />
    </>
  );
}
