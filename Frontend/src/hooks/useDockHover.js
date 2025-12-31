import { useEffect } from "react";

export default function useDockHover(dockRef) {
  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const items = [...dock.children];

    const onMove = e => {
      items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const center = rect.left + rect.width / 2;
        const distance = Math.abs(e.clientX - center);
        const scale = Math.max(1, 1.8 - distance / 120);

        item.style.transform = `scale(${scale}) translateY(${-(scale - 1) * 18}px)`;
      });
    };

    const onLeave = () => {
      items.forEach(item => {
        item.style.transform = "scale(1) translateY(0)";
      });
    };

    dock.addEventListener("mousemove", onMove);
    dock.addEventListener("mouseleave", onLeave);

    return () => {
      dock.removeEventListener("mousemove", onMove);
      dock.removeEventListener("mouseleave", onLeave);
    };
  }, [dockRef]);
}
