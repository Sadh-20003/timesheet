import { features } from "process";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      {/* {Hero sectio} */}
      <section className="hero-curve">
        <div className="hero-glow"></div>

        <div className="hero-wrap">

          {/* LEFT FEATURES */}
          <div className="curve left">
            <span>Smart Time Tracking</span>
            <span>Project Timesheets</span>
            <span>Shift Management</span>
            <span>GPS Attendance</span>
            <span>HR Ready</span>
          </div>

          {/* CENTER */}
          <div className="hero-center">
            <h1>
              Powerful Timesheet Software <br />
              <span>for UAE Businesses</span>
            </h1>

            <p>
              Manage attendance, projects, payroll and compliance from a
              single unified platform built for modern teams.
            </p>

            <button className="hero-btn">Start Free Demo</button>
          </div>

          {/* RIGHT FEATURES */}
          <div className="curve right">
            <span>UAE Labour Law</span>
            <span>Overtime Rules</span>
            <span>Payroll Export</span>
            <span>Multi Location</span>
            <span>Multi Language</span>
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
              Data that proves <br />
              <span>Real Productivity Gains</span>
            </h2>

            <p>
              Track adoption, accuracy, and compliance growth with analytics
              designed specifically for UAE businesses.
            </p>

            <ul className="stats-points">
              <li><span className="dot yellow"></span>99.9% platform uptime</li>
              <li><span className="dot blue"></span>100% accurate time capture</li>
              <li><span className="dot green"></span>Used across 8+ industries</li>
            </ul>
          </div>

          {/* RIGHT CARD */}
          <div className="stats-card">
            <img
              src="/images/graph.png"
              alt="Analytics Graph"
            />
            <span className="card-label">
              Adoption & Accuracy Trend (last quarters)
            </span>
          </div>

        </div>
      </section>



      {/* STATS + TRUST END */}


      {/* {features section } */}

      <section className="why-dark">
        <div className="container why-grid">
          {/* LEFT VISUAL CARD */}
          <div className="brand-card">
            <span className="stat stat-top">
              99.9%<small>Uptime</small>
            </span>
            <img src="images/nickname-logo.png" alt="NickName InfoTech" />
            <span className="tagline">WE DO IT</span>
            <span className="stat stat-bottom">
              100%<small>Accurate Tracking</small>
            </span>
            {/* GLOW SHAPES */}
            <span className="glow yellow" />
            <span className="glow blue" />
            <span className="glow green" />
          </div>
          {/* RIGHT CONTENT */}
          <div className="why-content">
            <h2>
              Why UAE Companies Choose
              <span>NickName Time Sheet</span>
            </h2>
            <p className="subtitle">
              Smart, compliant and payroll-ready timesheet software built specifically
              for UAE businesses.
            </p>
            <ul className="why-list">
              <li>
                <span className="icon yellow">⏱</span>
                <div>
                  <h4>Accurate Time Tracking</h4>
                  <p>
                    Automatic capture of work hours, overtime and project time with
                    zero errors.
                  </p>
                </div>
              </li>
              <li>
                <span className="icon blue">⚖</span>
                <div>
                  <h4>UAE Labour Law Compliant</h4>
                  <p>
                    Built for UAE rules including overtime slabs, shift policies and
                    compliance tracking.
                  </p>
                </div>
              </li>
              <li>
                <span className="icon green">📊</span>
                <div>
                  <h4>Payroll-Ready Reports</h4>
                  <p>Export WPS and payroll-ready reports in one single click.</p>
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
              Perfect for These <span>Industries in UAE</span>
            </h2>
            <p className="section-subtitle">
              Designed to support diverse industries with accurate time tracking,
              compliance, and productivity insights.
            </p>
          </div>

          {/* Grid */}
          <div className="industries-grid">

            <div className="industry-card">
              <img src="/images/hero -1.webp" alt="Construction & Contracting" />
              <div className="overlay">
                <h5>Construction & Contracting</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-2.webp" alt="Facility Management" />
              <div className="overlay">
                <h5>Facility Management</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-3.webp" alt="IT & Software Companies" />
              <div className="overlay">
                <h5>IT & Software Companies</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-4.webp" alt="Consulting Firms" />
              <div className="overlay">
                <h5>Consulting Firms</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-5.webp" alt="Logistics & Transportation" />
              <div className="overlay">
                <h5>Logistics & Transportation</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-6.webp" alt="Healthcare & Clinics" />
              <div className="overlay">
                <h5>Healthcare & Clinics</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-7.webp" alt="Manufacturing" />
              <div className="overlay">
                <h5>Manufacturing</h5>
              </div>
            </div>

            <div className="industry-card">
              <img src="/images/hero-8.webp" alt="Trading & Retail" />
              <div className="overlay">
                <h5>Trading & Retail</h5>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* {PERFECT FOR INDUSTRIES END} */}



      {/* { Mobile App for Employees & Managers} */}


      <section className="mobile-app-mass">
        <div className="container">

          {/* Heading */}
          <div className="text-center mb-5">
            <h2 className="mass-title">
              One App. <span>Two Powerful Experiences.</span>
            </h2>
            <p className="mass-subtitle">
              Designed for employees on the move and managers in control.
            </p>
          </div>

          <div className="mass-wrapper">

            {/* LEFT – EMPLOYEE */}
            <div className="mass-card employee">
              <h5>For Employees</h5>
              <ul>
                <li>Clock-in / Clock-out</li>
                <li>Submit Timesheets</li>
                <li>Request Leave</li>
                <li>View Shifts & Updates</li>
              </ul>
            </div>

            {/* CENTER – PHONE */}
            <div className="mass-phone">
              <img
                src="/images/mobile-2.webp"
                alt="NickName Time Sheet App"
              />
            </div>

            {/* RIGHT – MANAGER */}
            <div className="mass-card manager">
              <h5>For Managers</h5>
              <ul>
                <li>Approve / Reject Entries</li>
                <li>Monitor Team Performance</li>
                <li>Assign Tasks & Projects</li>
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
                Enterprise-Grade <br />
                <span>Security & Compliance</span>
              </h2>

              <p>
                Designed for UAE businesses that demand
                reliability, compliance, and total data protection.
              </p>

              <ul>
                <li>✔ End-to-end encrypted data</li>
                <li>✔ UAE labour law ready</li>
                <li>✔ Role-based access control</li>
                <li>✔ 99.9% cloud uptime</li>
              </ul>
            </div>

            {/* RIGHT – VISUAL */}
            <div className="security-plexify-visual">
              <img
                src="/images/security.webp"
                alt="Security Dashboard"
                className="security-dashboard"
              />

              {/* Floating stats */}
              <div className="security-float yellow">
                <strong>99.9%</strong>
                <span>Uptime</span>
              </div>

              <div className="security-float blue">
                <strong>Encrypted</strong>
                <span>Data</span>
              </div>

              <div className="security-float green">
                <strong>UAE</strong>
                <span>Compliant</span>
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
        <div className="container">

          {/* BIG STATEMENT */}
          <div className="trust-header">
            <h2>
              Trusted by <span>UAE Businesses</span> <br />
              That Run on Accuracy
            </h2>

            <p>
              From construction sites to IT teams,
              organizations across the UAE rely on
              NickName Time Sheet to stay compliant,
              productive, and in control.
            </p>
          </div>

          {/* LOGO MARQUEE */}
          <div className="logo-marquee">
            <div className="logo-track">
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
              <img src="/images/lnickname-logo.png" />

              {/* repeat for smooth loop */}
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
              <img src="/images/nickname-logo.png" />
            </div>
          </div>

          {/* TRUST METRICS */}
          <div className="trust-metrics">
            <div>
              <strong>99.9%</strong>
              <span>Uptime</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Accurate Tracking</span>
            </div>
            <div>
              <strong>8+</strong>
              <span>Industries</span>
            </div>
            <div>
              <strong>UAE</strong>
              <span>Compliant</span>
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
                Built for a <span>Global Workforce</span>
              </h2>

              <p>
                Empower employees across regions to work
                comfortably in their preferred language —
                boosting adoption, accuracy, and productivity.
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



      {/* CTA STRIP */}
      <section className="footer-cta">
        <div className="container footer-cta-inner">
          <h3>
            Ready to simplify time tracking for your business?
          </h3>
          <a href="#demo" className="btn btn-dark">
            Start Free Demo
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="container">

          <div className="footer-grid">

            {/* BRAND */}
            <div className="footer-brand">
              <img
                src="/images/nickname-logo.png"
                alt="NickName InfoTech"
                width={120}
              />
              <p>
                Smart, compliant, and scalable timesheet
                management software built for UAE businesses.
              </p>
            </div>

            {/* LINKS */}
            <div className="footer-links">
              <h5>Product</h5>
              <a href="#">Features</a>
              <a href="#">Industries</a>
              <a href="#">Pricing</a>
              <a href="#">Mobile App</a>
            </div>

            <div className="footer-links">
              <h5>Company</h5>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
              <a href="#">Blog</a>
            </div>

            <div className="footer-links">
              <h5>Legal</h5>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">UAE Labour Law</a>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} NickName InfoTech. All rights reserved.
            </span>

            <div className="footer-socials">
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
            </div>
          </div>

        </div>
      </footer>









    </>

  );
}
