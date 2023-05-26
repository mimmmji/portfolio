import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "@/components/Menu";

// gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"] });

export default function Showcase() {
  // useLayoutEffect(() => {
  //   ScrollTrigger.create({
  //     animation: gsap.from(".logo", {
  //       y: "50vh",
  //       scale: 6,
  //       yPercent: -50,
  //     }),
  //     scrub: true,
  //     trigger: ".content",
  //     start: "top bottom",
  //     endTrigger: ".content",
  //     end: "top center",
  //   });
  // }, []);
  return (
    <>
      <div className="nav">
        {/* <div className="items-left"></div> */}
        <div className="items-right">
          <Menu />
        </div>
      </div>
      <div className="logo-container">
        {/* <h1 className="logo">SHOWCASE</h1> */}
      </div>
      <div className="container"></div>
      <div className="content">{/* <img src="/hero.jpg" alt="" /> */}</div>
      <style jsx>{`
        .menu-open {
          color: white !important;
        }

        .menu-close {
          color: black !important;
        }
      `}</style>
    </>
  );
}
