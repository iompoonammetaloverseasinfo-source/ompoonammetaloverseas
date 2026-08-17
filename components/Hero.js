import ScrollReveal from "./ScrollReveal";
import GradeMarquee from "./GradeMarquee";
import HeroSlider from "./HeroSlider";

export default function Hero() {
  return (
    <section className="relative bg-paper pt-[68px] overflow-hidden">
      <ScrollReveal>
        <HeroSlider />
      </ScrollReveal>

      <GradeMarquee />
    </section>
  );
}