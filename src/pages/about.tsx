import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  useLayoutEffect(() => {
    ScrollTrigger.create({
      animation: gsap.from(".logo", {
        y: "50vh",
        scale: 6,
        yPercent: -50,
      }),
      scrub: true,
      trigger: ".content",
      start: "top bottom",
      endTrigger: ".content",
      end: "top center",
    });
  }, []);
  return (
    <>
      <div className="nav">
        <div className="items-left">
          <Link href="/about" legacyBehavior>
            <a>ABOUT</a>
          </Link>
          <Link href="/showcase" legacyBehavior>
            <a>SHOWCASE</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>CONTACT</a>
          </Link>
        </div>
        <div className="items-right">
          <Link href="/home" legacyBehavior>
            <a>HOME</a>
          </Link>
        </div>
      </div>
      <div className="logo-container">
        <h1 className="logo">ABOUT</h1>
      </div>
      <div className="container"></div>
      <div className="content">
        <img src="/hero.jpg" alt="" />
      </div>
    </>
  );
}
