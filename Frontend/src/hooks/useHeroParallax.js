import { useEffect } from "react";

export default function useHeroParallax(heroRef, svgRefs) {
  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = e => {
      const { width, height } = hero.getBoundingClientRect();
      const x = (e.clientX - width / 2) / width;
      const y = (e.clientY - height / 2) / height;

      svgRefs.current.forEach((svg, i) => {
        const depth = (i + 1) * 8;
        svg.style.transform = `translate(${x * depth}px, ${y * depth}px)`;
      });
    };

    const onLeave = () => {
      svgRefs.current.forEach(svg => {
        svg.style.transform = "translate(0,0)";
      });
    };

    hero.addEventListener("mousemove", onMove);
    hero.addEventListener("mouseleave", onLeave);

    return () => {
      hero.removeEventListener("mousemove", onMove);
      hero.removeEventListener("mouseleave", onLeave);
    };
  }, [heroRef, svgRefs]);
}
