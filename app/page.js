'use client';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm('meagdydy');
  if (state.succeeded) {
    return (
      <div className="form-success">
        <div className="form-success-icon">✅</div>
        <h3>Message Sent!</h3>
        <p>Thank you for reaching out. We'll get back to you shortly.</p>
      </div>
    );
  }
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-field">
          <input type="text" name="name" placeholder="Your Name" className="form-input" required />
          <ValidationError field="name" errors={state.errors} className="form-error" />
        </div>
        <div className="form-field">
          <input type="email" name="email" placeholder="Email Address" className="form-input" required />
          <ValidationError field="email" errors={state.errors} className="form-error" />
        </div>
      </div>
      <div className="form-field">
        <input type="text" name="subject" placeholder="Subject" className="form-input" required />
      </div>
      <div className="form-field">
        <textarea name="message" placeholder="Tell us about your business needs..." className="form-input form-textarea" rows={4} required />
        <ValidationError field="message" errors={state.errors} className="form-error" />
      </div>
      <button type="submit" disabled={state.submitting} className="btn-primary" style={{width:'100%',justifyContent:'center'}}>
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <a href="#" className="nav-brand">
            <img src="/logo.jpg" alt="Next9Accounting Logo" className="nav-logo-img" />
            Next9<span>Accounting</span>
          </a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="#contact" className="nav-cta">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>Your Numbers,<br /><span className="hero-accent">Our Expertise</span></h1>
            <p className="hero-sub">Professional accounting and tax services that keep your business compliant, efficient, and financially healthy — so you can focus on growth.</p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">Book Free Consultation</a>
              <a href="#services" className="btn-ghost">Our Services →</a>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <div className="tagline-strip">
        <span>"Accounting is the language of business — every number tells a story."</span>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Complete Financial Services</h2>
          <p className="section-sub">From bookkeeping to strategic financial advisory, we provide everything your business needs to stay on track.</p>
          <div className="services-grid">
            {[
              { icon: '📊', color: 'orange', title: 'Financial Statements', desc: 'Accurate monthly and annual financial statements prepared to Thai accounting standards (TFRS/NPAE).' },
              { icon: '📒', color: 'green', title: 'Bookkeeping', desc: 'Systematic recording of all financial transactions, ensuring your books are always up-to-date and accurate.' },
              { icon: '🧾', color: 'yellow', title: 'VAT & Tax Support', desc: 'Monthly VAT filing (PP.30), withholding tax (ND.1, ND.3), and full compliance with the Revenue Department.' },
              { icon: '📋', color: 'orange', title: 'Tax Document Preparation', desc: 'Annual corporate income tax (PND.50) and personal income tax (PND.90/91) preparation and filing.' },
              { icon: '📈', color: 'green', title: 'Management Reporting', desc: 'Custom management reports that give you real insights into profitability, cash flow, and business performance.' },
              { icon: '💡', color: 'yellow', title: 'Financial Advisory', desc: 'Strategic advice on business structure, tax planning, and financial decisions to help you grow sustainably.' },
            ].map((s, i) => (
              <div key={i} className="service-card">
                <div className={`service-icon bg-${s.color}`}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container about-inner">
          <div className="about-content">
            <div className="section-label">Our Story</div>
            <h2>Dedicated to Your Financial Success</h2>
            <p>Next9Accounting was founded with a clear mission: to provide small and medium-sized businesses with the same quality of financial expertise that large corporations enjoy — at an accessible price.</p>
            <p>We combine deep knowledge of Thai tax law and accounting standards with a genuine commitment to client success. Every engagement is personal, every solution is tailored, and every number matters.</p>
            <ul className="about-list">
              <li>✅ Certified Public Accountant (CPA) on every engagement</li>
              <li>✅ Expertise in Thai Revenue Code &amp; accounting standards</li>
              <li>✅ Bilingual service: Thai &amp; English</li>
              <li>✅ Transparent pricing, no hidden fees</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-label" style={{color:'var(--green-dark)'}}>Reach Out</div>
          <h2 className="section-title" style={{color:'var(--ink)'}}>Let&apos;s Talk About Your Business</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">🌐</span>
                <div>
                  <div className="contact-label">Website</div>
                  <a href="https://next9accounting.com" target="_blank" rel="noopener noreferrer">next9accounting.com</a>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <div className="contact-label">Location</div>
                  <span>Bangkok, Thailand</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🗣️</span>
                <div>
                  <div className="contact-label">Languages</div>
                  <span>Thai &amp; English</span>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📘</span>
                <div>
                  <div className="contact-label">Facebook</div>
                  <a href="https://www.facebook.com/Next9Accounting" target="_blank" rel="noopener noreferrer">Next9Accounting</a>
                </div>
              </div>
            </div>
            <div className="contact-form-card">
              <h3>Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="footer-brand-name">
              <span className="nav-logo-mark" style={{width:'34px',height:'34px',fontSize:'14px'}}>N9</span>
              Next9<span>Accounting</span>
            </div>
            <div className="footer-tagline">&ldquo;Accounting is the language of business; every number tells a story.&rdquo;</div>

            {/* FOUNDER — moved here from About panel */}
            <div className="footer-founder">
              <div className="team-avatar">J</div>
              <div>
                <div className="team-name">Jittirat Pushsondok</div>
                <div className="team-role">Certified Public Accountant · Founder</div>
              </div>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-col">
              <div className="footer-col-title">Services</div>
              <a href="#services">Financial Statements</a>
              <a href="#services">Bookkeeping</a>
              <a href="#services">VAT &amp; Tax</a>
              <a href="#services">Tax Documents</a>
              <a href="#services">Management Reporting</a>
              <a href="#services">Financial Advisory</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
              <a href="https://www.facebook.com/Next9Accounting" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2024 Next9Accounting. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
