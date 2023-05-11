import { Inter } from "next/font/google";
import React, { useLayoutEffect, useRef } from "react";
import { TimelineMax, Expo } from "gsap";
import Link from "next/link";
import { MenuOpen } from "@/components/MenuOpen";
import { MenuClose } from "@/components/MenuClose";
import Menu from "@/components/Menu";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const menuOpenRef = useRef<HTMLDivElement>(null);
  const menuCloseRef = useRef<HTMLDivElement>(null);

  const [menuOpen, setMenuOpen] = React.useState(false);

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
    menuCloseRef.current?.addEventListener("click", () => {
      t1.reversed(!t1.reversed());
    });
  }, []);

  return (
    <div id="index">
      <Menu />
      <main></main>
    </div>
  );
}

/** */
