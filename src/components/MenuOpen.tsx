import { useLayoutEffect, useRef } from "react";
import { TimelineMax, Expo } from "gsap";

export function MenuOpen({setOpen}: {setOpen: () => void}) {
  const menuOpenRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const t1 = new TimelineMax({ paused: true });

    t1.to(".nav-container", 1, {
      left: 0,
      ease: Expo.easeInOut,
    });

    t1.staggerFrom(
      ".menu > div",
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      "0.1"
    );

    t1.staggerFrom(
      ".socials",
      0.8,
      { y: 100, opacity: 0, ease: Expo.easeOut },
      "0.4"
    );

    t1.reverse();

    menuOpenRef.current?.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
    });
  }, []);

  return (
    <div ref={menuOpenRef} onClick={setOpen} className="menu-open">
      menu
    </div>
  );
}
