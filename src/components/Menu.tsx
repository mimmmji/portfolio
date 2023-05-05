import React, { FunctionComponent } from 'react';
import {MenuOpen} from "@/components/MenuOpen";
import {MenuClose} from "@/components/MenuClose";
import Link from "next/link";

interface Props {
};

const Menu: FunctionComponent<Props> = (props) => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
      {!menuOpen && <MenuOpen setOpen={() => setMenuOpen(true)} />}
    <div className="nav-container">
        {menuOpen && <MenuClose setClose={() => setMenuOpen(false)} />}
        <div className="socials">
            <span>facebook</span>
            <span>instagram</span>
        </div>
        <nav className="menu">
            <div className="menu__item">
                <Link href="/home" legacyBehavior>
                    <a className="menu__item-link">Home</a>
                </Link>
                <img className="menu__item-img" /*src="/menu-img-one.jpg"*/ />
                <div className="marquee">
                    <div className="marquee__inner">
                        <span>Home - Home - Home - Home - Home - Home - Home</span>
                    </div>
                </div>
            </div>
            <div className="menu__item">
                <Link href="/showcase" legacyBehavior>
                    <a className="menu__item-link">Showcase</a>
                </Link>
                <img className="menu__item-img" /*src="/menu-img-two.jpg"*/ />
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
                <Link href="/about" legacyBehavior>
                    <a className="menu__item-link">About</a>
                </Link>
                <img className="menu__item-img" /*src="/menu-img-three.jpg"*/ />
                <div className="marquee">
                    <div className="marquee__inner">
                <span>
                  About - About - About - About - About - About - About
                </span>
                    </div>
                </div>
            </div>
            <div className="menu__item">
                <Link href="/contact" legacyBehavior>
                    <a className="menu__item-link">Contact</a>
                </Link>
                <img className="menu__item-img" /*src="/menu-img-four.jpg"*/ />
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
)
};

export default Menu;
