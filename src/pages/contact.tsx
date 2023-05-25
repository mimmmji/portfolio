import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Menu from "@/components/Menu";
import Head from "next/head";

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
                  <div className="send-icon"></div>
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

        .menu-close {
          color: black !important;
        }

        .content {
          background-color: white;
        }

        .container {
          padding-top: 100px;
        }

        .contact-section {
          margin: auto;
        }

        * {
          padding-top: 0.25em;
          color: white;
          box-sizing: border-box;
          overflow: hidden;
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
          font-size: 15px;
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
        .contact-section {
          display: flex;
          justify-content: center; /* 수평 가운데 정렬 */
          align-items: center; /* 수직 가운데 정렬 */
          margin: auto;
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
          background-color: #161616;
          text-decoration: none;
          color: #fff;
          font-family: "Monument Extended";
          font-size: 60px;
          font-weight: 600;
          text-transform: uppercase;
          outline: none !important;
          box-shadow: none !important;
        }

        .send-icon {
          font-size: 60px;
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

        button {
          border: none;
        }
      `}</style>
    </>
  );
}
