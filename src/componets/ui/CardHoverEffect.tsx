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
    image: "/images/assisted-living-13.jpg",
    title: "Activities",
    subtitle: "Of Daily Living",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.Aenean lobortis erat ac lectus viverra.",
    link: "/services#activity",
  },
  {
    image: "/images/assisted-living-8.jpg",
    title: "Nursing",
    subtitle: "Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.",
    link: "/services#nursing",
  },
  {
    image: "/images/assisted-living-2.jpg",
    title: "Recreational",
    subtitle: "Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. ",
    link: "/services#recreational",
  },
  {
    image: "/images/assisted-living-7.jpg",
    title: "24-Hour Staff",
    subtitle: "Availability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur, vitae accumsan erat pharetra.",
    link: "/services#availability",
  }
];