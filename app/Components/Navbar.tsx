"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top ${styles.saaslandNavbar
                } ${scrolled ? styles.scrolled : ""}`}
        >
            <div className="container">

                {/* LOGO */}
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img
                        src="/images/nickname-logo.png"
                        alt="NickName InfoTech"
                        className={styles.logo}
                    />
                </a>

                {/* TOGGLER */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#mainNavbar"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* MENU */}
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4">
                        <li className="nav-item">
                            <a className={styles.navLink} href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={styles.navLink} href="#features">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className={styles.navLink} href="#industries">Industries</a>
                        </li>
                        <li className="nav-item">
                            <a className={styles.navLink} href="#pricing">Pricing</a>
                        </li>
                        <li className="nav-item ms-lg-3">
                            <a href="#demo" className="btn btn-light fw-bold">
                                Start Free Demo
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    );
}
