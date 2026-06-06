import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Destinations } from "@/components/site/Destinations";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { Footer } from "@/components/site/Footer";
import { useReveal } from "@/hooks/use-reveal";
import { useParallax } from "@/hooks/use-parallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Triplio | Luxury Immersive Discovery" },
      {
        name: "description",
        content:
          "Your portal to the world's most breathtaking natural landscapes and luxury escapes.",
      },
      { property: "og:title", content: "Triplio | Luxury Immersive Discovery" },
      {
        property: "og:description",
        content:
          "Your portal to the world's most breathtaking natural landscapes and luxury escapes.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  useParallax();

  return (
    <main className="relative overflow-x-clip">
      <Nav />
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <Footer />
    </main>
  );
}
