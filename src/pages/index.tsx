import Image from 'next/image'
import {Inter} from 'next/font/google'
import {useEffect, useLayoutEffect} from "react";
import gsap from 'gsap';

const inter = Inter({subsets: ['latin']})

export default function Home() {
    useLayoutEffect(() => {
        TweenMax.to(".block-1", 2, {
            x: "-180",
            y: "-100",
            scale: "2.4",
            ease: Expo.easeInOut,
        });

        TweenMax.to(".block-2", 2, {
            x: "-180",
            y: "200",
            scale: "1.2",
            ease: Expo.easeInOut,
        });

        TweenMax.to(".block-3", 2, {
            x: "180",
            y: "-240",
            scale: "1.6",
            ease: Expo.easeInOut,
        });

        TweenMax.to(".block-4", 2, {
            x: "280",
            y: "240",
            scale: "0.8",
            ease: Expo.easeInOut,
        });

        TweenMax.to(".box", 2.4, {
            y: "-100%",
            ease: Expo.easeInOut,
        });

        TweenMax.from(".circle-shape", 2.4, {
            scale: "0",
            ease: Expo.easeInOut,
        });
        TweenMax.from(".circle-shape-2", 2.4, {
            scale: "0",
            ease: Expo.easeInOut,
        });
        TweenMax.from(".circle-shape-3", 2.4, {
            scale: "0",
            ease: Expo.easeInOut,
        });
        TweenMax.from(".navbar > div", 1.6, {
            opacity: 0,
            y: 60,
            ease: Expo.easeInOut,
            delay: 0.6,
        });
        TweenMax.from(".site-logo", 1.6, {
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut,
            delay: 0.6,
        });
        TweenMax.from(".showreel", 1.6, {
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut,
            delay: 0.6,
        });
        TweenMax.staggerFrom(
            ".site-menu > div",
            1,
            {
                opacity: 0,
                y: 60,
                ease: Power2.easeOut,
            },
            0.2
        );
    }, [])

    return (
        <>
            <div className="site-logo">mouthwash</div>
            <div className="navbar">
                <div className="site-info">photos / films</div>
                <div className="site-menu">
                    <div className="menu-item">projects</div>
                    <div className="menu-item">about</div>
                    <div className="menu-item">contact</div>
                </div>
            </div>
            <div className="showreel">view showreel</div>
            <div className="container">
                <div className="wrapper-img">
                    <div className="box"></div>
                    <div>
                        <img className="image" src="hero-img.jpeg"/>
                    </div>
                </div>
                <div className="circle-shape"></div>
                <div className="circle-shape-2"></div>
                <div className="circle-shape-3"></div>
                <div className="blocks">
                    <div className="block-1 block">F</div>
                    <div className="block-2 block">L</div>
                    <div className="block-3 block">E</div>
                    <div className="block-4 block">X</div>
                </div>
            </div>
        </>
    )
}
