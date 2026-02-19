"use client";

import { useEffect } from "react";
import { useState } from "react";


import { features } from "process";







export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const track = document.querySelector(".carousel-track") as HTMLElement | null;
    const nextBtn = document.querySelector(".nav.next");
    const prevBtn = document.querySelector(".nav.prev");

    if (!track || !nextBtn || !prevBtn) return;

    const scrollNext = () => {
      track.scrollBy({ left: 900, behavior: "smooth" });
    };

    const scrollPrev = () => {
      track.scrollBy({ left: -900, behavior: "smooth" });
    };

    nextBtn.addEventListener("click", scrollNext);
    prevBtn.addEventListener("click", scrollPrev);

    return () => {
      nextBtn.removeEventListener("click", scrollNext);
      prevBtn.removeEventListener("click", scrollPrev);
    };
  }, []);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const navbar = document.querySelector(".main-navbar");

    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling DOWN → hide navbar
        navbar.classList.add("nav-hidden");
      } else {
        // scrolling UP → show navbar
        navbar.classList.remove("nav-hidden");
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>






      {/* <Navbar /> */}

      {/* NAVBAR */}
      <nav className="main-navbar">
        <div className="nav-container">

          <div className="nav-logo">
            <img src="/images/Logo.png" alt="NickName InfoTech" />
          </div>

          {/* LINKS */}
          <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
            <li>Home</li>
            <li>Product</li>
            <li>Features</li>
            <li>Industries</li>
            <li>Security</li>
            <li>Pricing</li>
            <li>Company</li>
            <li>Contact</li>
          </ul>

          <div className="nav-actions">
            <button className="btn-ghost">Sign In</button>
            <button className="btn-primary">Register</button>
          </div>

          {/* HAMBURGER */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

        </div>
      </nav>





      {/* {Hero sectio} */}
      <section className="hero-curve">
        <div className="hero-glow"></div>

        <div className="hero-wrap">

          {/* LEFT FEATURES */}
          <div className="curve left">
            <span>Smart Time Tracking</span>
            <span>Payroll Ready</span>
            <span>Shift Management</span>
            <span>Secure Data</span>
            <span>UAE Complaint</span>
          </div>

          {/* CENTER */}
          <div className="hero-center">
            <h1 className="hero-title">
              Next-Gen Timesheet Software Built
              <span>for UAE Businesses</span>
            </h1>

            <p>
              Automate time tracking, unlock productivity insights, improve operational efficiency, and ensure compliance with UAE labor regulations through one intelligent platform.
            </p>

            <button className="hero-btn">Get Personalized Demo</button>
          </div>


          {/* RIGHT FEATURES */}
          <div className="curve right">
            <span>Leave Tracking</span>
            <span>Productivity Insights</span>
            <span>GPS Tracking</span>
            <span>Mobile Access</span>
            <span>Budget Tracking</span>
          </div>

        </div>
      </section>






      {/* {Hero sectio END} */}



      {/* STATS + TRUST */}
      <section className="stats-dark">
        <div className="stats-container">

          {/* LEFT CONTENT */}
          <div className="stats-text">
            <h2>
              Proven Insights <br />
              <span>That Drive Performance</span>
            </h2>

            <p>
              Gain complete visibility into workforce adoption, accurate time and leave tracking,
              project progress, budget utilization, productivity insights, and payroll-ready reports—
              all from a single platform.
            </p>

            <ul className="stats-points">
              <li><span className="dot yellow"></span>99.9% Reliable Platform</li>
              <li><span className="dot blue"></span>100% Precise Time Data</li>
              <li><span className="dot green"></span>Configurable for Complex Industry Requirements</li>
            </ul>
          </div>

          {/* RIGHT IMAGE */}
          <div className="stats-image-wrapper">
            <img
              src="/images/time1.png"
              alt="Timesheet Preview"
            />
          </div>

        </div>
      </section>




      {/* STATS + TRUST END */}


      {/* {features section } */}

      <section className="why-dark">
        <div className="container why-grid">

          {/* LEFT IMAGE */}
          <div className="why-image">
            <img
              src="/images/time2.png"
              alt="Productivity Dashboard"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="why-content">
            <h2>
              Companies Rely on Us
              <span> for Productivity Made Simple</span>
            </h2>

            <p className="subtitle">
              Manage projects, track budgets, assign tasks, hold employees accountable,
              generate invoices - all in your language effortlessly.
            </p>

            <ul className="why-list">
              <li>
                <span className="icon red">⏱</span>
                <div>
                  <h4>Mobile-first, employee-friendly design</h4>
                  <p>
                    Easy-to-use interface designed for seamless access on any device,
                    keeping employees productive on the go.
                  </p>
                </div>
              </li>

              <li>
                <span className="icon white">⚖</span>
                <div>
                  <h4>Secure, cloud-based access</h4>
                  <p>
                    Reliable cloud platform that ensures your data is safe,
                    accessible anytime, anywhere.
                  </p>
                </div>
              </li>

              <li>
                <span className="icon green">📊</span>
                <div>
                  <h4>Track projects, budgets, and performance</h4>
                  <p>
                    Monitor project progress, budget usage, and team performance in real time
                    for better decision-making.
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>




      {/* {features section END} */}

      {/* {PERFECT FOR INDUSTRIES} */}

      <section className="industries-visual" id="industries">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="section-title">
              Designed for Businesses<span> Across Sectors</span>
            </h2>
            <p className="section-subtitle">
              Tailor every feature to fit your unique business needs and UAE compliance standards.
            </p>
          </div>

          {/* Grid */}
          <div className="industries-grid">

            <div className="industry-card">
              <img src="/images/track.webp" alt="Construction & Contracting" />
              <div className="overlay">
                <h5>Track Budget</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/manage.webp" alt="Facility Management" />
              <div className="overlay">
                <h5>Manage Leave and Payroll</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/monitor.png" alt="IT & Software Companies" />
              <div className="overlay">
                <h5>Monitor Project Milestone</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/plan.png" alt="Consulting Firms" />
              <div className="overlay">
                <h5>Plan Projects</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/gps.webp" alt="Logistics & Transportation" />
              <div className="overlay">
                <h5>GPS Tracking for field workers</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/insight.webp" alt="Healthcare & Clinics" />
              <div className="overlay">
                <h5>Insights with dashboards and analytics </h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/multi.png" alt="Manufacturing" />
              <div className="overlay">
                <h5>Mutilingual </h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/analys.png" alt="Trading & Retail" />
              <div className="overlay">
                <h5>Analytics</h5>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* {PERFECT FOR INDUSTRIES END} */}


      {/* DASHBOARD UI CAROUSEL SECTION */}
      <section className="ui-carousel">
        <div className="container">

          <div className="ui-header">

            <h2>
              Seamless  <span>Control at Your Fingertips</span>
            </h2>
            <p>
              Take full control of your work with effortless navigation and smart tools.
            </p>
          </div>

          <div className="carousel-wrapper">
            <button className="nav prev">‹</button>

            <div className="carousel-track">

              <div className="ui-card">
                <img src="/images/dash1.png" alt="Dashboard UI 1" />
              </div>

              <div className="ui-card">
                <img src="/images/dash2.png" alt="Dashboard UI 2" />
              </div>

              <div className="ui-card">
                <img src="/images/dash3.png" alt="Dashboard UI 3" />
              </div>

              <div className="ui-card">
                <img src="/images/dash4.png" alt="Dashboard UI 4" />
              </div>

              <div className="ui-card">
                <img src="/images/dash5.png" alt="Dashboard UI 5" />
              </div>

            </div>

            <button className="nav next">›</button>
          </div>

        </div>
      </section>






      {/* { Mobile App for Employees & Managers} */}


      <section className="mobile-app-mass">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="mass-title">
              Hierarchy Made  <span>Simple and Transparent </span>
            </h2>
            <p className="mass-subtitle">
              Easily define roles, streamline workflows, track accountability, and keep everyone on the same page.
            </p>
          </div>

          <div className="mass-wrapper">

            {/* LEFT – EMPLOYEE */}
            <div className="mass-card employee">
              <h5>Multi-Role Management</h5>
              <ul>
                <li>Administrators</li>
                <li>Managers</li>
                <li>Team Leads</li>
                <li>Human Resources</li>
                <li>Employees</li>
              </ul>
            </div>

            {/* CENTER – SINGLE LARGE PHONE */}
            <div className="mass-phone">
              <img
                src="/images/mob1.png"
                alt="Role Management App"
                className="main-phone"
              />
            </div>



            {/* RIGHT – MANAGER */}
            <div className="mass-card manager">
              <h5>One-Word Action Style</h5>
              <ul>
                <li>Switch</li>
                <li>Clock-in/Clock-out</li>
                <li>Track</li>
                <li>Submit/Approve</li>
                <li>Report</li>
              </ul>
            </div>

          </div>

          {/* Background shapes */}
          <span className="mass-bg yellow"></span>
          <span className="mass-bg blue"></span>

        </div>
      </section>



      {/* Mobile App for Employees & Managers END */}

      {/* Security */}

      <section className="security-plexify">
        <div className="container">

          <div className="security-plexify-wrapper">

            {/* LEFT – CONTENT */}
            <div className="security-plexify-content">
              <h2>
                Built with <span>Enterprise-Grade</span> Security

              </h2>

              <p>
                Ensuring data privacy, secure access, and reliable protection across all user roles.
              </p>

              <ul>
                <li>✔ Secure role-based access</li>
                <li>✔ Encrypted data protection</li>
                <li>✔ Strong user authentication</li>
                <li>✔ Continuous security monitoring</li>
                <li>✔ Compliance with security standards</li>
              </ul>
              <br />

              <p>

                UAE Complient - Fully Configurable

              </p>



            </div>


            {/* RIGHT – VISUAL */}
            <div className="security-plexify-visual">
              <img
                src="/images/secure.png"
                alt="Security Dashboard"
                className="security-dashboard"
              />

              {/* Floating stats */}
              <div className="security-float yellow">
                <strong>99.9%</strong>
                <strong>Uptime</strong>
              </div>

              <div className="security-float blue">
                <strong>Encrypted</strong>
                <strong>Data </strong>
              </div>

              <div className="security-float green">
                <strong>UAE</strong>
                <strong>Complient </strong>
              </div>
            </div>

          </div>

          {/* GLOW SHAPES */}
          <span className="plex-glow yellow"></span>
          <span className="plex-glow blue"></span>

        </div>
      </section>

      {/* Security END */}


      {/* CTA SECTION */}

      <section className="trust-pro">

        <div className="cta-image">
          {/* <img src="/images/mobile-3.jpg" className="phone main" /> */}

        </div>
        <div className="container">



          {/* BIG STATEMENT */}
          <div className="trust-header">
            <h2>
              Trusted Across Industries <span> Worldwide</span>

            </h2>

            <p>
              Supporting companies worldwide with dependable technology, consistent performance, and solutions designed to scale with growing business needs.</p>          </div>




          {/* LOGO MARQUEE
          <div className="logo-marquee">
            <div className="logo-track">
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />

              repeat for smooth loop
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
              <img src="/images/Logo.png" />
            </div>
          </div> */}

          {/* TRUST METRICS */}
          <div className="trust-metrics">
            <div>
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Accuracy</span>
            </div>
            <div>
              <strong>99%</strong>
              <span>Automated</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Productivity</span>
            </div>
          </div>

        </div>
      </section>









      {/* CTA SECTION END */}


      {/* Language section */}

      <section className="language-pro dark">
        <div className="container">

          <div className="language-grid">

            {/* LEFT CONTENT */}
            <div className="language-content">
              <h2>

                Powering Teams Across Bor
                <span>ders through Multilingual Access</span>
              </h2>

              <p>
                Designed to help global teams communicate, collaborate, and perform efficiently in their preferred language — reducing barriers, improving adoption, and enhancing productivity across regions.
              </p>

              <ul className="lang-list">
                <li>English</li>
                <li>Arabic</li>
                <li>Tamil</li>
                <li>Hindi</li>
                <li>Urdu</li>
                <li>Malayalam</li>
              </ul>
            </div>

            {/* RIGHT VISUAL */}
            <div className="language-visual">
              <div className="globe-glow"></div>

              <img
                src="/images/globe.png"
                alt="Global Language Support"
                className="globe-img"
              />

              <span className="lang-pill p1">English</span>
              <span className="lang-pill p2">العربية</span>
              <span className="lang-pill p3">தமிழ்</span>
              <span className="lang-pill p4">हिंदी</span>
              <span className="lang-pill p5">اردو</span>
              <span className="lang-pill p6">മലയാളം</span>
            </div>

          </div>
        </div>
      </section>





      {/* Language section END */}


      {/* ENQUIRY SECTION */}
      <section className="enquiry-center">
        <div className="container">

          <div className="enquiry-head">

            <h2>
              Request a <span>Free Demo</span>
            </h2>
            <p>
              Talk to our expert to find the best approach for your requirements.
            </p>
          </div>

          <form className="enquiry-form">

            <div className="field">
              <label>Full Name</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Work Email</label>
              <input type="email" />
            </div>

            <div className="field">
              <label>Company Name</label>
              <input type="text" />
            </div>

            <div className="field">
              <label>Company Size</label>
              <select>
                <option>1–10 Employees</option>
                <option>11–50 Employees</option>
                <option>51–200 Employees</option>
                <option>200+ Employees</option>
              </select>
            </div>

            <div className="field">
              <label>Your Requirement</label>
              <textarea></textarea>
            </div>

            <button className="submit-btn">
              Book A Free Demo →
            </button>

            <p className="form-note">
              We’ll be in touch within 24 hours to assist you
            </p>

          </form>
        </div>
      </section>



      {/* ENQUIRY SECTION  END*/}



      {/* {CTA strip} */}

      <section className="footer-cta-pro">
        <div className="footer-cta-box">
          <div className="cta-left">
            <h3>How to adopt this for my team?</h3>
            <p>Customize Nickname for your team.</p>
          </div>
          <div className="cta-right">
            <a href="#" className="cta-btn primary">
              Get Started →
            </a>
            <a href="#" className="cta-btn outline">
              Learn More →
            </a>
          </div>
        </div>
      </section>

      {/* {CTA strip END} */}







      {/* FOOTER */}
      <footer className="footer-dark">
        <div className="container">



          <div className="footer-grid">

            {/* COLUMN 1 – BRAND */}
            <div className="footer-brand">
              <h3 className="footer-logo">
                NickName <span>InfoTech</span>
              </h3>
              <p>
                Smart workforce management platform built for productivity,
                transparency, and enterprise-level security.
              </p>

              <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-x-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            {/* COLUMN 2 – PRODUCT */}
            <div>
              <h5>Product</h5>
              <ul>
                <li><a href="#">Time Tracking</a></li>
                <li><a href="#">Project Management</a></li>
                <li><a href="#">Payroll Reports</a></li>
                <li><a href="#">Mobile App</a></li>
              </ul>
            </div>

            {/* COLUMN 3 – COMPANY */}
            <div>
              <h5>Company</h5>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Compliance</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>

            {/* COLUMN 4 – NEWSLETTER */}
            <div>
              <h5>Stay Updated</h5>
              <p>Subscribe for updates & product news.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
            </div>

          </div>
          {/* CERTIFICATIONS */}


          <div className="footer-bottom">
            <p>© 2026 NickName InfoTech. All rights reserved.</p>
          </div>

          {/* Glow Effects */}
          <span className="footer-glow blue"></span>
          <span className="footer-glow green"></span>

        </div>
      </footer>













    </>

  );
}
