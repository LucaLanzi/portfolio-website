import { SectionContainer } from "@/components/layout/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Gallery } from "@/components/gallery/Gallery";
import { galleryImages } from "@/content/gallery";

export function GallerySection() {
  return (
    <SectionContainer id="gallery">
      <Reveal>
        <SectionHeading
          eyebrow={`${galleryImages.length} Images`}
          title="Gallery"
          description="A few things I enjoy outside of coursework."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <Gallery images={galleryImages} />
      </Reveal>
    </SectionContainer>
  );
}
