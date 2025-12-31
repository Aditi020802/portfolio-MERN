import { useEffect } from "react";

export default function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.3 }
    );

    document
      .querySelectorAll(".reveal-left, .reveal-right, .reveal")
      .forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
