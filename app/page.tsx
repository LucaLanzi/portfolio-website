import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/about/About";
import { RepoGrid } from "@/components/github/RepoGrid";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { ResumeSection } from "@/components/resume/ResumeSection";
import { GallerySection } from "@/components/gallery/GallerySection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <RepoGrid />
      <PortfolioGrid />
      <ResumeSection />
      <GallerySection />
      <ContactSection />
    </main>
  );
}
