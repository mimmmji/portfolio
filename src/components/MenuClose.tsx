import { useLayoutEffect, useRef } from "react";
import { TimelineMax, Expo } from "gsap";

export function MenuClose({setClose}: {setClose: () => void}) {
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
    });
  }, []);

  return (
    <div ref={menuCloseRef} onClick={setClose} className="menu-close">
      close
    </div>
  );
}
