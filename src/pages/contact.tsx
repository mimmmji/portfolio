import { Inter } from "next/font/google";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

gsap.registerPlugin(ScrollTrigger);

const inter = Inter({ subsets: ["latin"] });

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
        <h1 className="logo">CONTACT</h1>
      </div>
      <div className="container"></div>
      <div className="content">
        <img src="/contact.jpg" alt="" />
        <h1 className="contact-header">Nice to meet you !</h1>

        <p className="intro">Get in touch with me.</p>
        <form ref={form} onSubmit={sendEmail} className="email-form">
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input type="text" name="user_name" id="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input type="email" name="user_email" id="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" rows={5} required></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .content {
          background-color: white;
          margin-bottom: 80rem;
        }
        .contact-header {
          text-align: center;
          color: white;
        }
        .intro {
          text-align: center;
          color: gainsboro;
        }
        .img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .contact-header {
          margin-top: 5rem;
          margin-bottom: 2.8rem;
          font-size: 4rem;
          line-height: 1.2;
          letter-spacing: -0.06em;
        }
        .intro {
          font-size: 1.5rem;
          margin-bottom: 2rem;
          font-weight: 900;
          letter-spacing: 1px;
          line-height: 1.5;
        }

        .email-form {
          max-width: 600px;
          margin: 0 auto;
          margin-bottom: 8rem;
        }
        .form-group {
          margin-bottom: 1.5rem;
          display: flex;
          flex-direction: column;
        }
        label {
          color: white;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        input,
        textarea {
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1rem;
        }
        textarea {
          resize: vertical;
        }
        button[type="submit"] {
          background-color: #666;
          color: white;
          padding: 1rem 1rem;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          cursor: pointer;
        }
        button[type="submit"]:hover {
          background-color: #444;
        }
      `}</style>
    </>
  );
}
