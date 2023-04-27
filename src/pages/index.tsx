import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";
import { TimelineMax, Expo } from "gsap";
import $ from "jquery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useLayoutEffect(() => {
    var t1 = new TimelineMax({ paused: true });

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
    $(document).on("click", ".menu-open", function () {
      t1.reversed(!t1.reversed());
    });
    $(document).on("click", ".menu-close", function () {
      t1.reversed(!t1.reversed());
    });
  }, []);

  return (
    <>
      <div className="menu-open">menu</div>
      <div className="nav-container">
        <div className="menu-close">close</div>
        <div className="socials">
          <span>facebook</span>
          <span>instagram</span>
        </div>
        <nav className="menu">
          <div className="menu__item">
            <a className="menu__item-link">Home</a>
            <img className="menu__item-img" src="menu-img-one.jpg" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>Home - Home - Home - Home - Home - Home - Home</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Showcase</a>
            <img className="menu__item-img" src="menu-img-two.jpg" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Showcase - Showcase - Showcase - Showcase - Showcase -
                  Showcase - Showcase
                </span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a className="menu__item-link">About</a>
            <img className="menu__item-img" src="menu-img-three.jpg" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  About - About - About - About - About - About - About
                </span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Contact</a>
            <img className="menu__item-img" src="menu-img-four.jpg" />
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Contact - Contact - Contact - Contact - Contact - Contact -
                  Contact
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

/** */
