'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* NAV */}
      <nav>
        <div class="nav-inner">
          <a href="#" className="nav-logo">Next9<span>Accounting</span></a>
          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#insights">Insights</a></li>
            <li><a href="#contact" className="nav-cta">Get in Touch</a></li>
          </ul>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="hero-eyebrow">Certified Public Accountants · Thailand</div>
              <h1>
                Every number<br />tells a <em>story.</em><br />We tell it right.
              </h1>
              <p className="hero-sub">
                Next9Accounting delivers clear, accurate, and strategic financial guidance for businesses in Thailand and beyond — from bookkeeping and VAT to investor-ready reporting.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">Start a conversation →</a>
                <a href="#services" className="btn-outline">Our services</a>
              </div>
            </div>
            <div className="hero-stats">
              <div className="stat-box">
                <div className="stat-num">10+</div>
                <div className="stat-label">Years experience</div>
                <div className="stat-desc">Deep local expertise, international standards</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">200+</div>
                <div className="stat-label">Happy clients</div>
                <div className="stat-desc">Businesses across Thailand and beyond</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">100%</div>
                <div className="stat-label">Compliance rate</div>
                <div className="stat-desc">Thai and international standards</div>
              </div>
              <div className="stat-box">
                <div className="stat-num">5★</div>
                <div className="stat-label">Client rating</div>
                <div className="stat-desc">Consistent excellence, every engagement</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TAGLINE STRIP */}
      <div className="tagline-strip">
        <p className="tagline-text">"Accounting is the language of business — every number tells a story."</p>
      </div>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="container">
          <div className="services-header">
            <div>
              <div className="section-eyebrow">What we do</div>
              <h2>Comprehensive financial services</h2>
            </div>
            <p className="section-sub">
              We turn complex financial tasks into simple, accurate systems — so you always know where your business stands.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Financial Statements</h3>
              <p>Structured, accurate statements that reflect your real performance and support compliance — prepared monthly or quarterly.</p>
              <div className="service-tags">
                <span className="service-tag">P&L Statement</span>
                <span className="service-tag">Balance Sheet</span>
                <span className="service-tag">Cash Flow</span>
                <span className="service-tag">Reconciliation</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📚</div>
              <h3>Bookkeeping</h3>
              <p>Clean, reliable records of every transaction. We keep your books accurate and up-to-date so you can focus on running your business.</p>
              <div className="service-tags">
                <span className="service-tag">Daily Recording</span>
                <span className="service-tag">Bank Reconciliation</span>
                <span className="service-tag">AR / AP</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🧾</div>
              <h3>VAT & Tax Support</h3>
              <p>Timely VAT filing, withholding tax management, and full compliance with Thai Revenue Department requirements.</p>
              <div className="service-tags">
                <span className="service-tag">VAT Filing</span>
                <span className="service-tag">Tax Invoice</span>
                <span className="service-tag">WHT Certificates</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📋</div>
              <h3>Tax Document Preparation</h3>
              <p>From quotations to receipts — we prepare and maintain every document your service business needs for tax compliance.</p>
              <div className="service-tags">
                <span className="service-tag">Quotations</span>
                <span className="service-tag">Service Agreements</span>
                <span className="service-tag">Receipts</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">📈</div>
              <h3>Management Reporting</h3>
              <p>Monthly reports that go beyond numbers — we highlight cost drivers, profitability trends, and opportunities for growth.</p>
              <div className="service-tags">
                <span className="service-tag">KPI Dashboards</span>
                <span className="service-tag">Cost Analysis</span>
                <span className="service-tag">Forecasting</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">🤝</div>
              <h3>Financial Advisory</h3>
              <p>We become your long-term financial partner — supporting audits, loan applications, investor reporting, and strategic decisions.</p>
              <div className="service-tags">
                <span className="service-tag">Audit Support</span>
                <span className="service-tag">Investor Reports</span>
                <span className="service-tag">Loan Prep</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="container">
          <div className="about-grid">
            <div>
              <div className="section-eyebrow">About us</div>
              <h2>Your trusted financial partner</h2>
              <p className="section-sub">
                At Next9Accounting, we believe every business deserves clear, accurate, and strategic financial guidance — founded with a commitment to excellence, serving businesses in Thailand and beyond.
              </p>
              <div className="about-values">
                <div className="about-value">
                  <div className="value-icon">🎯</div>
                  <div className="value-content">
                    <h4>Accuracy first</h4>
                    <p>Every figure matters. We ensure your financials are precise and compliant with Thai and international standards.</p>
                  </div>
                </div>
                <div className="about-value">
                  <div className="value-icon">🤝</div>
                  <div className="value-content">
                    <h4>Client partnership</h4>
                    <p>We don't just file reports — we become your long-term financial advisor and growth partner.</p>
                  </div>
                </div>
                <div className="about-value">
                  <div className="value-icon">🔒</div>
                  <div className="value-content">
                    <h4>Full confidentiality</h4>
                    <p>Your financial data is handled with the highest level of security and professional discretion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="about-panel">
                <div className="about-panel-title">By the numbers</div>
                <div className="about-stats">
                  <div>
                    <div className="about-stat-num">10+</div>
                    <div className="about-stat-label">Years experience</div>
                  </div>
                  <div>
                    <div className="about-stat-num">200+</div>
                    <div className="about-stat-label">Happy clients</div>
                  </div>
                  <div>
                    <div className="about-stat-num">100%</div>
                    <div className="about-stat-label">Compliance rate</div>
                  </div>
                  <div>
                    <div className="about-stat-num">5★</div>
                    <div className="about-stat-label">Client rating</div>
                  </div>
                </div>
                <div className="about-team">
                  <div className="team-member">
                    <div className="team-avatar">J</div>
                    <div>
                      <div className="team-name">Jittirat Pushsondok</div>
                      <div className="team-role">Certified Public Accountant · Founder</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / INSIGHTS */}
      <section className="blog" id="insights">
        <div className="container">
          <div className="blog-header">
            <div>
              <div className="section-eyebrow">Insights</div>
              <h2>Financial knowledge for your business</h2>
            </div>
            <a href="#contact" className="btn-primary" style={{whiteSpace:'nowrap'}}>All articles →</a>
          </div>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-card-body">
                <div className="blog-date">January 2026</div>
                <h3>Financial Statements: The Foundation of Smart Business Decisions</h3>
                <p>Financial statements are more than reports — they are the foundation of smart business decisions. We prepare structured, accurate statements that reflect your real performance and support compliance.</p>
                <div className="blog-read-more">Read article →</div>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-card-body">
                <div className="blog-date">February 2026</div>
                <h3>Essential Tax Documents Every Service Business Must Have</h3>
                <p>Running a service business requires more than delivering great work — proper documentation is crucial for tax compliance, cash flow control, and financial transparency.</p>
                <div className="blog-read-more">Read article →</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="section-eyebrow" style={{color:'var(--gold)'}}>Get in touch</div>
              <h2>Let's talk about your business</h2>
              <p className="section-sub">
                Whether you need bookkeeping, VAT support, or a full financial reporting package — we're here to help. Reach out and we'll respond within one business day.
              </p>
              <div className="contact-info">
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div>
                    <div className="contact-item-label">Website</div>
                    <div className="contact-item-value">next9accounting.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">Thailand · Serving clients internationally</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">💬</div>
                  <div>
                    <div className="contact-item-label">Languages</div>
                    <div className="contact-item-value">English · ภาษาไทย</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form">
              {submitted ? (
                <div style={{textAlign:'center', padding:'40px 0'}}>
                  <div style={{fontSize:'40px', marginBottom:'16px'}}>✅</div>
                  <h3 style={{fontFamily:'var(--font-display)', fontSize:'22px', color:'var(--white)', marginBottom:'10px'}}>Message received</h3>
                  <p style={{color:'rgba(255,255,255,0.55)', fontSize:'14px'}}>We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Your name</label>
                      <input type="text" placeholder="Somchai K." required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" placeholder="you@company.com" required
                        value={formData.email}
                        onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service needed</label>
                    <select value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}>
                      <option value="">Select a service...</option>
                      <option>Financial Statements</option>
                      <option>Bookkeeping</option>
                      <option>VAT & Tax Support</option>
                      <option>Tax Document Preparation</option>
                      <option>Management Reporting</option>
                      <option>Financial Advisory</option>
                      <option>Other / Not sure</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Tell us about your business</label>
                    <textarea rows="4" placeholder="Briefly describe your business and what you need help with..."
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="form-submit">Send message →</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">Next9<span>Accounting</span></div>
              <div className="footer-tagline">"Accounting is the language of business; every number tells a story."</div>
            </div>
            <div>
              <div className="footer-col-title">Services</div>
              <ul className="footer-links">
                <li><a href="#services">Financial Statements</a></li>
                <li><a href="#services">Bookkeeping</a></li>
                <li><a href="#services">VAT & Tax Support</a></li>
                <li><a href="#services">Management Reporting</a></li>
                <li><a href="#services">Financial Advisory</a></li>
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <ul className="footer-links">
                <li><a href="#about">About us</a></li>
                <li><a href="#insights">Insights</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Next9Accounting. All rights reserved.</div>
            <div className="footer-copy">Thailand · <a href="#">next9accounting.com</a></div>
          </div>
        </div>
      </footer>
    </>
  )
}
