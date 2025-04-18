import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffect() {
  return (
    <div className="mx-auto px-8 h-fit content-center">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    image: "/images/assisted-living-13.webp",
    title: "Activities",
    subtitle: "Of Daily Living",
    description:
      "We thrive in making each day easy, fun and successful for all our families. At, Noble we understand as we age even the simplest daily activities, routines can be challenging to be done or complicated.",
    link: "/services#activity",
  },
  {
    image: "/images/assisted-living-8.webp",
    title: "Nursing",
    subtitle: "Services",
    description:
      "At Noble, our nurses are dedicated to go above and beyond to make sure residents get the medical care they need to improve their overall well being as well as quality of life.",
    link: "/services#nursing",
  },
  {
    image: "/images/assisted-living-2.webp",
    title: "Recreational",
    subtitle: "Programs",
    description:
      "Fun doesn’t stop as we age it just gets more fun and interesting. At noble we thrive in making sure our residents don’t get bored  and are able to engage in fun activities that are harmless to them and that meet their needs in terms of strength and life enjoyment.  ",
    link: "/services#recreational",
  },
  {
    image: "/images/assisted-living-7.webp",
    title: "24-Hour Staff",
    subtitle: "Availability",
    description:
      "At noble home care, your comfort and well being is  our top priority. Our dedicated team is always available 24/7 to meet your loved ones’ needs as needed.",
    link: "/services#availability",
  }
];