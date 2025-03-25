import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="max-w-7xl mx-auto px-8 h-[92vh] content-center">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Activities",
    subtitle: "Of Daily Living",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Nursing",
    subtitle: "Services",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Recreational",
    subtitle: "Programs",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "24-Hour Staff",
    subtitle: "Availability",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  }
];