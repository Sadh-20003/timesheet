import { features } from "process";
import Navbar from "./Components/Navbar";


export default function Home() {
  return (
    <>
      {/* <Navbar /> */}

      {/* {Hero sectio} */}
      <section className="hero-section">

        {/* Text + Stats */}
        <div className="hero-content container text-center">
          <h1 className="saasland-hero-title">
            Timesheet Management Software <br />
            for UAE Businesses
          </h1>

          <p className="saasland-hero-desc mt-3">
            Track Time. Boost Productivity. Simplify Payroll.
            <br />
            Smart, accurate and automated timesheet management
            designed for UAE companies.
          </p>

          {/* STATS */}
          <div className="row justify-content-center mt-5 saasland-stats fw-bolder">
            <div className="col-6 col-md-3">
              <h2 className="saasland-hero-title">99.9%</h2>
              <p>Uptime</p>
            </div>
            <div className="col-6 col-md-3">
              < h2 className="saasland-hero-title">100%</h2>
              <p>Accurate Tracking</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="saasland-hero-title">8+</h2>
              <p>Industries</p>
            </div>
            <div className="col-6 col-md-3">
              <h2 className="saasland-hero-title">UAE</h2>
              <p>Labour Law Ready</p>
            </div>
          </div>
        </div>

        {/* IMAGE LAYER – NOT A SECTION */}
        <div className="hero-image-layer">
          <img src="/images/hero -1.webp" className="hero-img img-1" />
          <img src="/images/hero-2.webp" className="hero-img img-2" />
          <img src="/images/hero-3.webp" className="hero-img img-3" />
          <img src="/images/hero-4.webp" className="hero-img img-4" />
          <img src="/images/hero-5.webp" className="hero-img img-5" />
          <img src="/images/hero-6.webp" className="hero-img img-6" />
          <img src="/images/hero-7.webp" className="hero-img img-7" />
          <img src="/images/hero-9.webp" className="hero-img img-8" />
          <img src="/images/hero-10.webp" className="hero-img img-9" />
          <img src="/images/hero-11.webp" className="hero-img img-10" />


          <img src="/images/hero-8.webp" className="hero-leaf" />
        </div>

      </section>




      {/* {Hero sectio END} */}


      {/* {Why Choose us} */}
      <section className="why-choose-model">
        <div className="container">

          {/* Section Title */}
          <div className="text-center mb-5 py-4">
            <h2 className="why-title">
              We work together to <span>make your process better</span>
            </h2>
          </div>

          <div className="row g-5">

            {/* LEFT COLUMN */}
            <div className="col-lg-6">

              <div className="why-item d-flex">
                <div className="why-icon">
                  👤
                </div>
                <div className="why-content">
                  <h5>100% Accurate Time Tracking</h5>
                  <p>
                    Record employee work hours, breaks, overtime, and project time
                    automatically with complete accuracy and zero manual errors.
                  </p>
                </div>
              </div>

              <div className="why-item d-flex">
                <div className="why-icon">
                  ⏱️
                </div>
                <div className="why-content">
                  <h5>Up-to-the-Minute Attendance</h5>
                  <p>
                    Track real-time clock-in and clock-out across office and field
                    employees using mobile, web, GPS, or IP-based validation.
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="col-lg-6">

              <div className="why-item d-flex">
                <div className="why-icon">
                  🔄
                </div>
                <div className="why-content">
                  <h5>UAE Labour Law Compliant</h5>
                  <p>
                    Built with UAE regulations in mind, including overtime slabs,
                    shift policies, and daily or weekly working hour limits.
                  </p>
                </div>
              </div>

              <div className="why-item d-flex">
                <div className="why-icon">
                  📅
                </div>
                <div className="why-content">
                  <h5>Integrated Leave Management</h5>
                  <p>
                    Manage leave requests, approvals, balances, and payroll impact
                    in one place with automatic calculations.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* {Why Choose us END} */}


      {/* {features section } */}

      <section id="features" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title"><span>Key Features</span></h2>
            <p className="text-muted mt-2 fw-bold">
              Everything you need to manage time, projects, and payroll — in one platform.
            </p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <h5 className="fw-bold">Smart Time Tracking</h5>
                <p className="text-muted mt-2">
                  Clock-in and clock-out via mobile or web with GPS and IP validation.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-list-check"></i>
                </div>
                <h5 className="fw-bold">Project & Task Timesheets</h5>
                <p className="text-muted mt-2">
                  Track hours per project and compare planned vs actual effort.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-calendar2-week"></i>
                </div>
                <h5 className="fw-bold">Overtime & Leave Management</h5>
                <p className="text-muted mt-2">
                  Auto-calculated overtime, leave requests, approvals, and balance tracking.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-check2-circle"></i>
                </div>
                <h5 className="fw-bold">Approval Workflow</h5>
                <p className="text-muted mt-2">
                  Managers can review, edit, approve, or reject timesheets easily.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-bar-chart-line"></i>
                </div>
                <h5 className="fw-bold">Advanced Reports & Analytics</h5>
                <p className="text-muted mt-2">
                  Daily, weekly, and monthly reports with productivity insights.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4">
              <div className="feature-card h-100 p-4">
                <div className="feature-icon">
                  <i className="bi bi-credit-card-2-front"></i>
                </div>
                <h5 className="fw-bold">Payroll & Billing Integration</h5>
                <p className="text-muted mt-2">
                  Export payroll data and auto-generate invoices for clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* {features section END} */}

      {/* {PERFECT FOR INDUSTRIES} */}

      <section id="industries" className="section-gap">
        <div className="container">
          <div className="text-center mb-5">
            <h3 className="why-title">
              <span>Perfect for These Industries in UAE</span>
            </h3>
          </div>

          <div className="row g-4">
            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-blue">
                  <i className="bi bi-building"></i>
                </div>
                <p>Construction & Contracting</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-green">
                  <i className="bi bi-tools"></i>
                </div>
                <p>Facility Management</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-purple">
                  <i className="bi bi-code-slash"></i>
                </div>
                <p>IT & Software Companies</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-orange">
                  <i className="bi bi-briefcase"></i>
                </div>
                <p>Consulting Firms</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-teal">
                  <i className="bi bi-truck"></i>
                </div>
                <p>Logistics & Transportation</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-red">
                  <i className="bi bi-heart-pulse"></i>
                </div>
                <p>Healthcare & Clinics</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-yellow">
                  <i className="bi bi-gear"></i>
                </div>
                <p>Manufacturing</p>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-3">
              <div className="industry-card">
                <div className="industry-icon bg-indigo">
                  <i className="bi bi-shop"></i>
                </div>
                <p>Trading & Retail</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* {PERFECT FOR INDUSTRIES END} */}

      {/* {Secure. Scalable. Cloud-Ready.} */}

      <section id="security" className="security-section">
        <div className="container">
          <div className="security-box text-center">
            <h2 className="security-title">
              Secure. Scalable. Cloud-Ready.
            </h2>

            <p className="security-desc">
              Hosted on secure cloud servers with 99.9% uptime, data encryption,
              automated backups, and enterprise-grade access control.
            </p>
          </div>
        </div>
      </section>

      {/* { Secure. Scalable. Cloud-Ready.END} */}

      {/* { Mobile App for Employees & Managers} */}


      <section id="mobile-app" className="mobile-app-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Content */}
            <div className="col-lg-6">
              <h2 className="mobile-app-title">
                Mobile App for Employees & Managers
              </h2>

              <div className="mobile-app-block">
                <h5>Employees can:</h5>
                <ul>
                  <li>Clock-in / Clock-out</li>
                  <li>Submit timesheets</li>
                  <li>Request leave</li>
                  <li>View shifts & updates</li>
                </ul>
              </div>

              <div className="mobile-app-block">
                <h5>Managers can:</h5>
                <ul>
                  <li>Approve / reject entries</li>
                  <li>Monitor team performance</li>
                  <li>Assign tasks & projects</li>
                </ul>
              </div>
            </div>

            {/* Right Image */}
            <div className="col-lg-6 text-center">
              <img
                src="/images/mobile-app.png"
                alt="Mobile App Preview"
                className="mobile-app-img"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Mobile App for Employees & Managers END */}

      {/* Announcements & Internal Communication Section */}


      <section id="security" className="security-section-1">
        <div className="container">
          <div className="security-box text-center">
            <h2 className="security-title">
              Announcements & Internal Communication

            </h2>

            <p className="security-desc">
              Share circulars, new updates, instructions, meeting notes & important alerts — visible instantly to all employees.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements & Internal Communication Section END */}

      {/* Language section */}

      <section id="multi-language" className="language-section">
        <div className="container">
          <div className="row align-items-center g-5">

            {/* Left Content */}
            <div className="col-lg-6">
              <h2 className="language-title">Multi-Language Support</h2>

              <p className="language-desc">
                Supports English, Arabic, Hindi, Urdu, Malayalam, Tamil & more —
                enabling teams to work comfortably in their preferred language.
              </p>
            </div>

            {/* Right Globe Visual */}
            <div className="col-lg-6">
              <div className="globe-wrapper">

                <img
                  src="/images/globe.avif"
                  alt="Global Language Support"
                  className="globe-img"
                />

                <span className="lang-tag lang-en">English</span>
                <span className="lang-tag lang-ar">العربية</span>
                <span className="lang-tag lang-hi">हिन्दी</span>
                <span className="lang-tag lang-ur">اردو</span>
                <span className="lang-tag lang-ml">മലയാളം</span>
                <span className="lang-tag lang-ta">தமிழ்</span>

              </div>
            </div>

          </div>
        </div>
      </section>



      {/* Language section END */}

      {/* Why Your UAE Business Needs This */}



      <section id="why-uae" className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="why-title">Why Your UAE Business Needs This</h2>
          </div>

          <div className="row g-4 justify-content-center">

            {/* Row 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-shield-check"></i>
                </div>
                <p>Reduce manual errors</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-graph-up-arrow"></i>
                </div>
                <p>Improve productivity</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-file-earmark-check"></i>
                </div>
                <p>Ensure compliance</p>
              </div>
            </div>

            {/* Row 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-clock-history"></i>
                </div>
                <p>Save time on payroll</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-people"></i>
                </div>
                <p>Manage hybrid & field teams easily</p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-currency-dollar"></i>
                </div>
                <p>Better project cost control</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Your UAE Business Needs This END */}


      {/* last section */}
      <section id="cta-demo" className="cta-section">
        <div className="container">
          <div className="cta-box text-center">
            <h2 className="cta-title">
              Start Your Free Demo Today
            </h2>

            <p className="cta-desc">
              Experience how easy it is to manage timesheets, projects, and payroll —
              all from one powerful platform.
            </p>

            <p className="cta-sub">
              Try the UAE’s most efficient Timesheet Management Software now.
            </p>

            <div className="cta-actions">
              <a href="#contact" className="cta-btn primary">
                Request Free Demo
              </a>
              <a href="#contact" className="cta-btn secondary">
                Talk to Sales
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* last section END */}








    </>

  );
}
