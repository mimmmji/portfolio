import { Inter } from "next/font/google";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import Menu from "@/components/Menu";
import { IonIcon } from "@ionic/react";
import { starHalf } from "ionicons/icons";
import Head from "next/head";

// gsap.registerPlugin(ScrollTrigger);

// const inter = Inter({ subsets: ["latin"] });

export default function Contact() {
  const form = useRef(null);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_zeicfh8",
          "template_pbep6ka",
          form.current,
          "umXtCnR6JBcahCOIb"
        )
        .then(
          (result) => {
            alert("Thank you for your valuable mail.");
          },
          (error) => {
            console.log("Failed to send :(");
          }
        );
    }
  };

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
      <Head>
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          noModule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
      </Head>
      <div className="nav">
        <div className="items-right">
          <Menu />
        </div>
      </div>
      <div className="logo-container"></div>

      <div className="container">
        <div className="top-nav">
          <p>Thank you for getting in touch! I'm here to assist you.</p>
        </div>
        <div className="nav-content">
          <div className="site-name">basement</div>
          <div className="branding">
            <p>CIRCA</p>
            <svg
              width="92"
              height="50"
              viewBox="0 0 92 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#EFEFEF"
            >
              <path
                d="M45.8129 44.3791C67.952 44.3791 85.8992 35.9503 85.8992 25.5528C85.8992 15.1554 67.952 6.72656 45.8129 6.72656C23.6738 6.72656 5.72656 15.1554 5.72656 25.5528C5.72656 35.9503 23.6738 44.3791 45.8129 44.3791Z"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M45.8127 44.3791C53.6247 44.3791 59.9575 35.9503 59.9575 25.5528C59.9575 15.1554 53.6247 6.72656 45.8127 6.72656C38.0008 6.72656 31.668 15.1554 31.668 25.5528C31.668 35.9503 38.0008 44.3791 45.8127 44.3791Z"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M45.8115 44.3791C61.5145 44.3791 74.2442 35.9503 74.2442 25.5528C74.2442 15.1554 61.5145 6.72656 45.8115 6.72656C30.1086 6.72656 17.3789 15.1554 17.3789 25.5528C17.3789 35.9503 30.1086 44.3791 45.8115 44.3791Z"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M70.1216 10.5781C65.6692 13.7134 56.4493 15.8609 45.8264 15.8609C35.1892 15.8609 25.9837 13.7134 21.5312 10.5781"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M21.5195 40.5289C25.972 37.3936 35.1918 35.2461 45.8147 35.2461C56.4519 35.2461 65.6574 37.3936 70.1099 40.5289"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M5.72656 25.5527H85.9135"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M45.8125 6.72656V44.3791"
                stroke-miterlimit="10"
                stroke-linecap="round"
              ></path>
              <path
                d="M48.219 23.1785C49.4307 24.4006 51.0776 25.1529 53.2422 25.5911C51.075 26.009 49.4225 26.7466 48.2005 27.9582C46.9784 29.17 46.2261 30.8169 45.7879 32.9814C45.37 30.8142 44.6324 29.1618 43.4208 27.9398C42.2091 26.7176 40.5622 25.9653 38.3976 25.5271C40.5648 25.1092 42.2172 24.3717 43.4392 23.1601C44.6614 21.9483 45.4137 20.3014 45.8519 18.1368C46.2698 20.3041 47.0073 21.9565 48.219 23.1785Z"
                fill="#EFEFEF"
              ></path>
            </svg>
            <p>2023</p>
          </div>
        </div>
        <div className="contact-marquee">
          <span>
            contact us / contact us / contact us / contact us / contact us /
            contact us / contact us / contact us / contact us / contact us
          </span>
        </div>
        <div className="contact-section">
          <div className="contact-details col">
            <p>
              Let's unlock together the next <br />
              level of possibilities! <br />
              Reach out.
            </p>

            <div className="social-media item">
              <h3>Social Media</h3>
              <span>GITHUB — BLOG — INSTAGRAM</span>
            </div>

            <div className="contact-info">
              <div className="email item">
                <h3>Get in touch</h3>
                <span>taylor7418@gmail.com</span>
              </div>
              <div className="address item">
                <h3>location</h3>
                <span>
                  Yongin <br /> in Republic of Korea
                </span>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="email-form">
            <div className="contact-form col">
              <div className="wrapper">
                <div className="row">
                  <input type="text" placeholder="Name" name="name" required />
                  <input type="text" placeholder="Company" name="company" />
                </div>
                <div className="row">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
                <div className="row">
                  <textarea
                    placeholder="Message"
                    rows={5}
                    id="message"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div className="row submit">
                  <button type="submit">Submit</button>
                  <div className="send-icon">
                    {/* <ion-icon name="arrow-forward-sharp"></ion-icon> */}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        .nav {
          background: #161616;
        }

        .menu-open {
          color: white !important;
        }

        .content {
          background-color: white;
        }

        .container {
          padding-top: 100px;
        }

        * {
          margin: 0;
          padding: 0;
          color: white;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
          width: 100%;
          height: 100vh;
          background: #000;
          color: white;
          font-family: "Neue Montreal";
        }

        .top-nav {
          width: 100%;
          border-bottom: 1px solid #fff;
          font-size: 12px;
          text-align: center;
          padding: 1em;
          font-weight: 300;
        }

        .nav-content {
          background-color: black;
          width: 100%;
          height: 60px;
          padding: 0 2em;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #fff;
        }

        .nav-content .site-name {
          font-family: "Basement Grotesque";
          font-weight: 900;
          font-size: 16px;
        }

        .branding {
          display: flex;
          align-items: center;
          font-size: 14px;
          font-weight: 300;
        }

        .menu-icon {
          font-size: 14px;
          text-transform: uppercase;
          font-weight: 300;
        }

        .menu-icon ion-icon {
          position: relative;
          top: 2px;
        }

        .container {
          flex: 1;
        }
        .contact-marquee {
          width: 1000%;
          margin: 0 auto;
          white-space: nowrap;
          overflow: hidden;
          padding-top: 1.2em;
        }

        .contact-marquee span {
          font-family: "Monument Extended";
          font-weight: 700;
          color: #fcfcfc;
          font-size: 8em;
          text-transform: uppercase;
          display: inline-block;
          padding-left: -10%;
          animation: marquee-animation 80s linear infinite;
        }

        @keyframes marquee-animation {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-100%, 0);
          }
        }

        .col {
          width: 50%;
          padding: 1em 3em;
        }

        .contact-section h3 {
          text-transform: uppercase;
          color: #747474;
          font-weight: 400;
          font-size: 20px;
          margin-bottom: 10px;
        }

        .contact-section span {
          text-transform: uppercase;
        }

        .contact-details p {
          font-size: 40px;
          line-height: 60px;
          padding-top: 0.8em;
        }

        .item {
          padding: 4em 0 0 0;
        }

        .contact-info {
          display: flex;
        }

        .address {
          padding-left: 4em;
        }

        input {
          background: none;
          outline: none;
          border: none;
          border-bottom: 1px solid #747474;
          font-size: 24px;
          padding: 0.4em;
          width: 100%;
          color: #fff;
          margin-right: 0.4em;
        }
        .wrapper {
          width: 100%;
        }

        .contact-form {
          width: 100%;
        }
        .row {
          display: flex;
          margin: 2em 0 !important;
        }

        textarea#message {
          width: 100%;
          background: none;
          outline: none;
          border: none;
          border-bottom: 1px solid #747474;
          font-size: 24px;
          padding: 0.4em;
          width: 100%;
          color: #fff;
          font-family: "Neue Montreal";
        }

        .submit {
          width: 100%;
          justify-content: space-between;
        }

        .submit button {
          background-color: black;
          text-decoration: none;
          color: #fff;
          font-family: "Monument Extended";
          font-size: 60px;
          font-weight: 600;
          text-transform: uppercase;
          box-shadow: none;
        }

        .submit button:hover {
          background-color: #353535;
        }
        .send-icon {
          font-size: 60px;
        }

        @media (min-width: 900px) {
          html,
          body {
            height: 100%;
          }

          .contact-section {
            width: 100%;
            display: flex;
          }
        }

        @media (max-width: 900px) {
          .col {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}
