import { useLayoutEffect, useRef } from "react";
import { TimelineMax, Expo } from "gsap";

export function MenuClose() {
  const menuCloseRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const t1 = new TimelineMax({ paused: true });

    t1.to(".nav-container", 1, {
      left: "-100%",
      ease: Expo.easeInOut,
    });

    t1.reverse();

    menuCloseRef.current?.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
      document.querySelector(".nav")?.classList.add("menu-closed");
      document.querySelector(".nav")?.classList.remove("menu-open");
    });
  }, []);

  return (
    <div ref={menuCloseRef} className="menu-close">
      close
    </div>
  );
}
