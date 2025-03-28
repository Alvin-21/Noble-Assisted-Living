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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.Aenean lobortis erat ac lectus viverra.",
    link: "https://stripe.com",
  },
  {
    title: "Nursing",
    subtitle: "Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur.",
    link: "https://netflix.com",
  },
  {
    title: "Recreational",
    subtitle: "Programs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. ",
    link: "https://google.com",
  },
  {
    title: "24-Hour Staff",
    subtitle: "Availability",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ornare risus vel mollis pharetra. Aliquam feugiat mattis neque et efficitur, vitae accumsan erat pharetra.",
    link: "https://meta.com",
  }
];