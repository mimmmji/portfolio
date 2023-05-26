import { Inter } from "next/font/google";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Menu from "@/components/Menu";
import anime from "animejs";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  useLayoutEffect(() => {
    var textWrapper = document.querySelector(".loader-text")!;
    textWrapper.innerHTML = textWrapper.textContent!.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );

    anime.timeline().add({
      targets: ".loader-text .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el: HTMLElement, i: number) => 600 + 30 * i,
    });

    gsap.from(".loader-wrapper", 2, {
      scale: 0.8,
      ease: "power1.inOut",
    });

    gsap.from(".loader", 2, {
      top: "100%",
      ease: "power3.inOut",
    });

    gsap.to(".loader-wrapper", 1, {
      scale: 1.5,
      duration: 1,
      opacity: 0,
      display: "none",
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.from(".revealer", 1, {
      width: "0",
      ease: "power3.inOut",
      delay: 1,
    });

    gsap.to(".revealer", 0.8, {
      left: "100%",
      ease: "power3.inOut",
      delay: 2,
    });

    gsap.to(".loader-text-wrapper", 0.2, {
      opacity: 0,
      display: "none",
      ease: "power3.inOut",
      delay: 2, // 로딩화면이 보여지는 시간 (초 단위)
    });

    gsap.from(".col-left", 1, {
      left: "-100%",
      ease: "power3.inOut",
      delay: 2.5,
    });

    gsap.from(".col-left .copy > div", 1.5, {
      x: -40,
      opacity: 0,
      ease: "power3.inOut",
      delay: 3,
      stagger: {
        amount: 0.3,
      },
    });

    gsap.from(".col-right .header", 1, {
      x: -20,
      opacity: 0,
      ease: "power3.inOut",
      delay: 5.5,
    });
  }, []);

  return (
    <>
      <div className="nav">
        <div className="items-right">
          <Menu />
        </div>
      </div>
      <div className="main-container">
        <div className="hero-img">
          <img src="/sunflower.jpg" alt="" />
        </div>
        <div className="about-container">
          <div className={"cols"}>
            <div className="col col-left">
              <div className="copy">
                <div className="header">2023</div>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <div className="sub-header">I'm frontend developer :)</div>
                <div className="img-wrapper">
                  <img src="./menu-img-four.jpg" />
                </div>
                <div className="info">
                  2020.03 ~ ing 명지대학교 정보통신공학과 재학중
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-right">
          <div className="header">
            {/*Emotion*/}
            {/*<br />*/}
            {/*from the <br /> photo day <br />*/}
            {/*no.8*/}
          </div>
        </div>
        <div className="loader-text-wrapper block">
          <h1 className="loader-text">about</h1>
        </div>
        <div className="revealer"></div>
      </div>
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .main-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .about-container {
          position: absolute;

          width: 100%;
          height: 100vh;

          overflow: hidden;
        }

         {
          /* .about-nav {
          position: absolute;
          top: 0;
          width: 100%;
          border-bottom: 1px solid rgb(0, 0, 0, 0.1);
          display: flex;
        } */
        }

        .hero-img {
          position: absolute;
          width: 100%;
          height: 100vh;
        }

        .hero-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .cols {
          width: 100%;
          display: flex;
        }

        .col {
          width: 50%;
          height: 100vh;
          display: flex;
        }

        .col-right {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 80px;
          font-family: "Dahlia";
          color: yellow;
          text-transform: uppercase;
          border: none;
          padding: 3em 2em 2em 2em;
        }
        .col-right .header {
          position: absolute;
        }

        .col-left {
          position: relative;
          left: 0;
          background-color: beige;
          border-right: 1px solid rgb(0, 0, 0, 0.1);
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 4em 2em 2em 2em;
        }

        .copy {
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 60%;
          font-family: "Neue Montreal";
        }

        .copy > * {
          position: relative;
        }

        .col-left .header {
          text-transform: uppercase;
          font-size: 24px;
          border: 1px solid black;
          border-radius: 10px;
          padding: 0.2em 0.4em;
          margin: 1em 0;
        }

        .sub-header {
          text-transform: uppercase;
          text-align: center;
        }

        .img-wrapper {
          width: 300px;
          height: 300px;
          background-color: antiquewhite;
          margin: 2em 0;
        }
        .img-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .info {
          font-size: 16px;
          text-align: center;
          color: rgb(60, 60, 60);
          margin-top: 4em;
        }
        /*속성추가 */
        .block {
          background: black;
          display: flex;

          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
        }

        .loader-text {
          background: black;
        }

        .loader-text-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          background: #000;
        }

        .revealer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #988871;
        }

        @media (max-width: 900px) {
          body,
          .container {
            height: 100%;
            overflow: auto;
          }

          .hero-img {
            top: 100vh;
          }

          .cols {
            flex-direction: column;
          }

          .col {
            width: 100%;
          }
        }

        .block {
           {
            /* background: black; */
          }
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100vh;
        }

        .loader-text-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          background-color: black;
        }

        .loader-text {
          font-family: "Neue Montreal";
          font-size: 20px;
          font-weight: 400;
          text-transform: uppercase;
          letter-spacing: 0.5em;
          color: white;
        }

        .loader-text .letter {
          display: inline-block;
          line-height: 1em;
        }

        .revealer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: #988871;
        }
      `}</style>
    </>
  );
}
